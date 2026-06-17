import {
  collection,
  doc,
  getDoc,
  limit,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where,
  type Unsubscribe,
} from "firebase/firestore";
import { getFirestoreDb } from "@/lib/firebase";
import type {
  FirestoreReferralDoc,
  FirestoreStampDoc,
  LeaderboardEntry,
  ReferralRecord,
  StampRecord,
  UserProfile,
} from "@/lib/firestore/types";
import {
  formatReferralName,
  generateReferralCode,
  generateStreakCardId,
} from "@/lib/referral-utils";
import type { StreakRewardChoice } from "@/lib/streak-content";

function parseUserProfile(data: Record<string, unknown>): UserProfile {
  return {
    referralCode: String(data.referralCode ?? ""),
    firstName: data.firstName ? String(data.firstName) : undefined,
    lastName: data.lastName ? String(data.lastName) : undefined,
    neighborhood: data.neighborhood ? String(data.neighborhood) : undefined,
    leaderboardOptIn: Boolean(data.leaderboardOptIn),
    monthlyReferralCount: Number(data.monthlyReferralCount ?? 0),
    streakCardId: data.streakCardId ? String(data.streakCardId) : undefined,
    streakCardLinked: Boolean(data.streakCardLinked),
    currentStreak: Number(data.currentStreak ?? 0),
    weeksActive: Number(data.weeksActive ?? 0),
    streakRewardChoice: (data.streakRewardChoice as StreakRewardChoice) ?? "bag",
  };
}

export async function ensureUserProfile(
  uid: string,
  seed?: Partial<UserProfile>
): Promise<UserProfile> {
  const db = getFirestoreDb();
  if (!db) {
    return {
      referralCode: generateReferralCode(),
      streakCardId: generateStreakCardId(),
      streakCardLinked: false,
      currentStreak: 0,
      weeksActive: 0,
      streakRewardChoice: "bag",
      leaderboardOptIn: false,
      monthlyReferralCount: 0,
      ...seed,
    };
  }

  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);

  if (snap.exists()) {
    const existing = parseUserProfile(snap.data());
    const updates: Partial<UserProfile> = {};

    if (!existing.referralCode) updates.referralCode = generateReferralCode();
    if (!existing.streakCardId) updates.streakCardId = generateStreakCardId();

    if (Object.keys(updates).length > 0) {
      await setDoc(ref, updates, { merge: true });
      return { ...existing, ...updates };
    }

    return existing;
  }

  const profile: UserProfile = {
    referralCode: generateReferralCode(),
    streakCardId: generateStreakCardId(),
    streakCardLinked: false,
    currentStreak: 0,
    weeksActive: 0,
    streakRewardChoice: "bag",
    leaderboardOptIn: false,
    monthlyReferralCount: 0,
    ...seed,
  };

  await setDoc(ref, profile, { merge: true });
  return profile;
}

export function subscribeUserProfile(
  uid: string,
  onData: (profile: UserProfile | null) => void,
  onError?: (error: Error) => void
): Unsubscribe {
  const db = getFirestoreDb();
  if (!db) {
    onData(null);
    return () => {};
  }

  return onSnapshot(
    doc(db, "users", uid),
    (snap) => {
      if (!snap.exists()) {
        onData(null);
        return;
      }
      onData(parseUserProfile(snap.data()));
    },
    (error) => onError?.(error)
  );
}

export function subscribeReferrals(
  uid: string,
  onData: (referrals: ReferralRecord[]) => void,
  onError?: (error: Error) => void
): Unsubscribe {
  const db = getFirestoreDb();
  if (!db) {
    onData([]);
    return () => {};
  }

  const q = query(
    collection(db, "users", uid, "referrals"),
    orderBy("referredAt", "desc")
  );

  return onSnapshot(
    q,
    (snap) => {
      const referrals = snap.docs.map((docSnap) => {
        const data = docSnap.data() as FirestoreReferralDoc;
        return {
          id: docSnap.id,
          firstName: data.firstName,
          lastInitial: data.lastInitial,
          referredAt: data.referredAt.toDate(),
          status: data.status,
          credit: data.credit,
        } satisfies ReferralRecord;
      });
      onData(referrals);
    },
    (error) => onError?.(error)
  );
}

export function subscribeStamps(
  uid: string,
  onData: (stamps: StampRecord[]) => void,
  onError?: (error: Error) => void
): Unsubscribe {
  const db = getFirestoreDb();
  if (!db) {
    onData([]);
    return () => {};
  }

  const q = query(
    collection(db, "users", uid, "stamps"),
    orderBy("deliveredAt", "desc"),
    limit(5)
  );

  return onSnapshot(
    q,
    (snap) => {
      const stamps = snap.docs.map((docSnap) => {
        const data = docSnap.data() as FirestoreStampDoc;
        return {
          id: docSnap.id,
          orderId: data.orderId,
          deliveredAt: data.deliveredAt.toDate(),
          stampNumber: data.stampNumber,
        } satisfies StampRecord;
      });
      onData(stamps);
    },
    (error) => onError?.(error)
  );
}

export function subscribeLeaderboard(
  onData: (entries: LeaderboardEntry[]) => void,
  onError?: (error: Error) => void
): Unsubscribe {
  const db = getFirestoreDb();
  if (!db) {
    onData([]);
    return () => {};
  }

  const q = query(
    collection(db, "users"),
    where("leaderboardOptIn", "==", true),
    orderBy("monthlyReferralCount", "desc"),
    limit(3)
  );

  return onSnapshot(
    q,
    (snap) => {
      const medals = ["🥇", "🥈", "🥉"];
      const entries = snap.docs.map((docSnap, index) => {
        const data = docSnap.data();
        const firstName = String(data.firstName ?? "LOD");
        const lastInitial = String(data.lastInitial ?? data.lastName?.[0] ?? "U");
        return {
          rank: index + 1,
          name: formatReferralName(firstName, lastInitial),
          neighborhood: String(data.neighborhood ?? "Boston"),
          count: Number(data.monthlyReferralCount ?? 0),
          medal: medals[index],
        } satisfies LeaderboardEntry;
      });
      onData(entries);
    },
    (error) => onError?.(error)
  );
}

export async function updateStreakRewardChoice(
  uid: string,
  choice: StreakRewardChoice
): Promise<void> {
  const db = getFirestoreDb();
  if (!db) return;
  await updateDoc(doc(db, "users", uid), { streakRewardChoice: choice });
}

export function toReferralRow(referral: ReferralRecord) {
  return {
    id: referral.id,
    initials: `${referral.firstName.charAt(0)}${referral.lastInitial.charAt(0)}`.toUpperCase(),
    name: formatReferralName(referral.firstName, referral.lastInitial),
    date: `Referred ${referral.referredAt.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })}`,
    status: referral.status,
    credit: referral.credit,
  };
}

export function subscribeFoundingCount(
  onData: (remaining: number) => void,
  fallback = 247
): Unsubscribe {
  const db = getFirestoreDb();
  if (!db) {
    onData(fallback);
    return () => {};
  }
  return onSnapshot(
    doc(db, "config", "founding"),
    (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        if (typeof data.remaining === "number") {
          onData(data.remaining);
          return;
        }
      }
      onData(fallback);
    },
    () => {
      onData(fallback);
    }
  );
}
