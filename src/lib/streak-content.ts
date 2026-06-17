export type StreakRewardChoice = "bag" | "credit";

export const streakDemo = {
  currentStreak: 6,
  goal: 10,
  rewardChoice: "bag" as StreakRewardChoice,
  cardLinked: false,
  weeksActive: 5,
};

export const milestones = [
  {
    id: "4-weeks",
    bags: null,
    label: "4 Weeks Active",
    reward: "$2.00 LOD Credit",
    note: "Keep the routine going.",
    reached: true,
    isGoal: false,
    isLegend: false,
  },
  {
    id: "8-weeks",
    bags: null,
    label: "8 Weeks Active",
    reward: "Free Add-On Bundle",
    note: "LOD Fresh, Sensitive, or Premium  your choice.",
    reached: false,
    isGoal: false,
    isLegend: false,
  },
  {
    id: "10-bags",
    bags: 10,
    label: "10 Bags  Streak Reward",
    reward: "Free Essential Bag OR $14.99 Credit",
    note: null,
    reached: false,
    isGoal: true,
    isLegend: false,
  },
  {
    id: "12-weeks",
    bags: null,
    label: "12 Weeks Active",
    reward: "1 Free Essential Bag",
    note: null,
    reached: false,
    isGoal: false,
    isLegend: false,
  },
  {
    id: "26-weeks",
    bags: null,
    label: "26 Weeks  Streak Legend 🏆",
    reward: "Streak Legend Badge + Premium Gift",
    note: "Mailed to your door. A thank you from Hem.",
    reached: false,
    isGoal: false,
    isLegend: true,
  },
] as const;

export const recentStamps = [
  { orderId: "LOD-10482", date: "June 25, 2026", stamp: 6 },
  { orderId: "LOD-10391", date: "June 18, 2026", stamp: 5 },
  { orderId: "LOD-10244", date: "June 11, 2026", stamp: 4 },
  { orderId: "LOD-10102", date: "June 4, 2026", stamp: 3 },
  { orderId: "LOD-09987", date: "May 28, 2026", stamp: 2 },
];
