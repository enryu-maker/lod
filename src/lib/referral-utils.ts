import type { ReferralStats, ReferralStatus } from "@/lib/firestore/types";

const REFERRAL_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

export function generateReferralCode(length = 8): string {
  let code = "";
  for (let i = 0; i < length; i++) {
    code += REFERRAL_CHARS[Math.floor(Math.random() * REFERRAL_CHARS.length)];
  }
  return code;
}

export function generateStreakCardId(): string {
  const suffix = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `LOD-${suffix}`;
}

export function formatReferralDate(date: Date): string {
  return `Referred ${date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })}`;
}

export function formatStampDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function formatReferralName(firstName: string, lastInitial: string): string {
  return `${firstName} ${lastInitial}.`;
}

export function getInitials(firstName: string, lastInitial: string): string {
  return `${firstName.charAt(0)}${lastInitial.charAt(0)}`.toUpperCase();
}

/** Days until the first Wednesday of the next calendar month. */
export function daysUntilFirstWednesdayOfNextMonth(from = new Date()): number {
  const year = from.getMonth() === 11 ? from.getFullYear() + 1 : from.getFullYear();
  const month = (from.getMonth() + 1) % 12;
  const firstOfMonth = new Date(year, month, 1);

  const firstWednesday = new Date(firstOfMonth);
  const day = firstOfMonth.getDay();
  const daysUntilWednesday = (3 - day + 7) % 7;
  firstWednesday.setDate(1 + daysUntilWednesday);

  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.max(0, Math.ceil((firstWednesday.getTime() - from.getTime()) / msPerDay));
}

export function computeReferralStats(
  referrals: { status: ReferralStatus; credit?: number }[]
): ReferralStats {
  const pending = referrals.filter((r) => r.status === "pending").length;
  const completed = referrals.filter((r) => r.status === "completed").length;
  const totalEarned = referrals.reduce((sum, r) => sum + (r.credit ?? 0), 0);

  return {
    totalReferred: referrals.length,
    pending,
    completed,
    totalEarned,
  };
}
