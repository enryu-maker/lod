"use client";

import { useEffect, useState } from "react";
import {
  subscribeStamps,
  subscribeUserProfile,
  updateStreakRewardChoice,
} from "@/lib/firestore/user-data";
import type { StampRecord, UserProfile } from "@/lib/firestore/types";
import { useRequireAuth } from "@/hooks/useAuthUser";
import { isFirebaseConfigured } from "@/lib/firebase";
import {
  recentStamps as demoStamps,
  streakDemo,
  type StreakRewardChoice,
} from "@/lib/streak-content";
import { formatStampDate, generateStreakCardId } from "@/lib/referral-utils";

const STREAK_GOAL = 10;

export function useStreakPageData() {
  const { user, profile: initialProfile, loading: authLoading } = useRequireAuth("/account/streak");
  const [profile, setProfile] = useState<UserProfile | null>(initialProfile);
  const [stamps, setStamps] = useState<StampRecord[]>([]);
  const [dataLoading, setDataLoading] = useState(isFirebaseConfigured());

  useEffect(() => {
    const timer = setTimeout(() => {
      setProfile(initialProfile);
    }, 0);
    return () => clearTimeout(timer);
  }, [initialProfile]);

  useEffect(() => {
    if (!user || !isFirebaseConfigured()) {
      const timer = setTimeout(() => {
        setDataLoading(false);
      }, 0);
      return () => clearTimeout(timer);
    }

    const unsubProfile = subscribeUserProfile(user.uid, setProfile);
    const unsubStamps = subscribeStamps(user.uid, setStamps);
    const timer = setTimeout(() => {
      setDataLoading(false);
    }, 0);

    return () => {
      clearTimeout(timer);
      unsubProfile();
      unsubStamps();
    };
  }, [user]);

  const useDemo = !isFirebaseConfigured() || !user;

  const currentStreak = useDemo ? streakDemo.currentStreak : profile?.currentStreak ?? 0;
  const weeksActive = useDemo ? streakDemo.weeksActive : profile?.weeksActive ?? 0;
  const rewardChoice: StreakRewardChoice = useDemo
    ? streakDemo.rewardChoice
    : profile?.streakRewardChoice ?? "bag";
  const cardLinked = useDemo ? streakDemo.cardLinked : Boolean(profile?.streakCardLinked);
  const cardId = useDemo
    ? "LOD-DEMO01"
    : profile?.streakCardId ?? generateStreakCardId();

  const recentStampRows = useDemo
    ? demoStamps
    : stamps.map((stamp) => ({
        orderId: stamp.orderId,
        date: formatStampDate(stamp.deliveredAt),
        stamp: stamp.stampNumber,
      }));

  const saveRewardChoice = async (choice: StreakRewardChoice) => {
    if (!user || !isFirebaseConfigured()) return;
    await updateStreakRewardChoice(user.uid, choice);
  };

  return {
    loading: authLoading || dataLoading,
    currentStreak,
    goal: STREAK_GOAL,
    weeksActive,
    rewardChoice,
    cardLinked,
    cardId,
    recentStampRows,
    saveRewardChoice,
  };
}
