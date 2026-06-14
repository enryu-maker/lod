import type { Timestamp } from "firebase/firestore";
import type { StreakRewardChoice } from "@/lib/streak-content";

export type ReferralStatus = "pending" | "completed";

export type UserProfile = {
  referralCode: string;
  firstName?: string;
  lastName?: string;
  neighborhood?: string;
  leaderboardOptIn?: boolean;
  monthlyReferralCount?: number;
  streakCardId?: string;
  streakCardLinked?: boolean;
  currentStreak?: number;
  weeksActive?: number;
  streakRewardChoice?: StreakRewardChoice;
};

export type ReferralRecord = {
  id: string;
  firstName: string;
  lastInitial: string;
  referredAt: Date;
  status: ReferralStatus;
  credit?: number;
};

export type StampRecord = {
  id: string;
  orderId: string;
  deliveredAt: Date;
  stampNumber: number;
};

export type LeaderboardEntry = {
  rank: number;
  name: string;
  neighborhood: string;
  count: number;
  medal?: string;
};

export type ReferralStats = {
  totalReferred: number;
  pending: number;
  completed: number;
  totalEarned: number;
};

export type FirestoreReferralDoc = {
  firstName: string;
  lastInitial: string;
  referredAt: Timestamp;
  status: ReferralStatus;
  credit?: number;
};

export type FirestoreStampDoc = {
  orderId: string;
  deliveredAt: Timestamp;
  stampNumber: number;
};
