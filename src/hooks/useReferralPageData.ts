"use client";

import { useEffect, useMemo, useState } from "react";
import {
  subscribeLeaderboard,
  subscribeReferrals,
  subscribeUserProfile,
  toReferralRow,
} from "@/lib/firestore/user-data";
import type { LeaderboardEntry, ReferralRecord, UserProfile } from "@/lib/firestore/types";
import { computeReferralStats, daysUntilFirstWednesdayOfNextMonth } from "@/lib/referral-utils";
import { useRequireAuth } from "@/hooks/useAuthUser";
import {
  DEMO_REFERRAL_CODE,
  referralHistory as demoReferralHistory,
  referralStats as demoReferralStats,
  leaderboard as demoLeaderboard,
} from "@/lib/referral-content";
import { isFirebaseConfigured } from "@/lib/firebase";

export function useReferralPageData() {
  const { user, profile: initialProfile, loading: authLoading } = useRequireAuth("/account/referrals");
  const [profile, setProfile] = useState<UserProfile | null>(initialProfile);
  const [referrals, setReferrals] = useState<ReferralRecord[]>([]);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [dataLoading, setDataLoading] = useState(isFirebaseConfigured());

  useEffect(() => {
    setProfile(initialProfile);
  }, [initialProfile]);

  useEffect(() => {
    if (!user || !isFirebaseConfigured()) {
      setDataLoading(false);
      return;
    }

    const unsubProfile = subscribeUserProfile(user.uid, setProfile);
    const unsubReferrals = subscribeReferrals(user.uid, setReferrals);
    const unsubLeaderboard = subscribeLeaderboard(setLeaderboard);

    setDataLoading(false);

    return () => {
      unsubProfile();
      unsubReferrals();
      unsubLeaderboard();
    };
  }, [user]);

  const useDemo = !isFirebaseConfigured() || !user;

  const referralCode = useDemo ? DEMO_REFERRAL_CODE : profile?.referralCode ?? "";
  const rows = useMemo(() => {
    if (useDemo) return demoReferralHistory;
    return referrals.map(toReferralRow);
  }, [useDemo, referrals]);

  const stats = useMemo(() => {
    if (useDemo) return demoReferralStats;
    return computeReferralStats(referrals);
  }, [useDemo, referrals]);

  const topReferrers = useDemo ? demoLeaderboard.slice(0, 3) : leaderboard;

  const userRank =
    profile?.leaderboardOptIn && profile.monthlyReferralCount
      ? { rank: null as number | null, count: profile.monthlyReferralCount }
      : null;

  return {
    loading: authLoading || dataLoading,
    referralCode,
    stats,
    rows,
    topReferrers,
    userRank,
    daysUntilAnnouncement: daysUntilFirstWednesdayOfNextMonth(),
  };
}
