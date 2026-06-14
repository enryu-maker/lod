export const DEMO_REFERRAL_CODE = "KIRA4821";

export const shareMessage = (code: string) =>
  `Hey! I've been using LOD for laundry pickup in Boston. They pick up, wash, fold, and deliver back. Your first bag is completely free. Check it out: lodvalet.com/r/${code}`;

export const referralStats = {
  totalReferred: 4,
  pending: 1,
  completed: 3,
  totalEarned: 15.0,
};

export type ReferralStatus = "pending" | "completed";

export type ReferralRow = {
  id: string;
  initials: string;
  name: string;
  date: string;
  status: ReferralStatus;
  credit?: number;
};

export const referralHistory: ReferralRow[] = [
  {
    id: "1",
    initials: "JM",
    name: "James M.",
    date: "Referred June 12, 2026",
    status: "completed",
    credit: 5,
  },
  {
    id: "2",
    initials: "SL",
    name: "Sarah L.",
    date: "Referred June 18, 2026",
    status: "completed",
    credit: 5,
  },
  {
    id: "3",
    initials: "RP",
    name: "Ryan P.",
    date: "Referred June 22, 2026",
    status: "pending",
  },
  {
    id: "4",
    initials: "AK",
    name: "Alex K.",
    date: "Referred June 25, 2026",
    status: "completed",
    credit: 5,
  },
];

export const leaderboard = [
  { rank: 1, name: "Michael T.", neighborhood: "Back Bay", count: 12, medal: "🥇" },
  { rank: 2, name: "Priya S.", neighborhood: "Brookline", count: 9, medal: "🥈" },
  { rank: 3, name: "David R.", neighborhood: "Fenway", count: 7, medal: "🥉" },
  { rank: 4, name: "Emma W.", neighborhood: "South End", count: 5 },
  { rank: 5, name: "Chris H.", neighborhood: "Mission Hill", count: 4 },
];

export const userLeaderboardRank = { rank: 8, count: 3 };

export const daysUntilLeaderboardAnnouncement = 18;
