"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, type User } from "firebase/auth";
import { useRouter } from "next/navigation";
import { getFirebaseAuth, isFirebaseConfigured } from "@/lib/firebase";
import { ensureUserProfile } from "@/lib/firestore/user-data";
import type { UserProfile } from "@/lib/firestore/types";

type AuthState = {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
};

export function useAuthUser(): AuthState {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getFirebaseAuth();
    if (!auth) {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (nextUser) => {
      setUser(nextUser);
      if (!nextUser) {
        setProfile(null);
        setLoading(false);
        return;
      }

      try {
        const nextProfile = await ensureUserProfile(nextUser.uid, {
          firstName: nextUser.displayName?.split(" ")[0],
          lastName: nextUser.displayName?.split(" ").slice(1).join(" "),
        });
        setProfile(nextProfile);
      } catch {
        setProfile(null);
      } finally {
        setLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  return { user, profile, loading };
}

export function useRequireAuth(redirectTo?: string) {
  const router = useRouter();
  const auth = useAuthUser();

  useEffect(() => {
    if (auth.loading) return;

    if (!isFirebaseConfigured()) return;

    if (!auth.user) {
      const path = redirectTo
        ? `/login?redirect=${encodeURIComponent(redirectTo)}`
        : "/login";
      router.replace(path);
    }
  }, [auth.loading, auth.user, redirectTo, router]);

  return auth;
}
