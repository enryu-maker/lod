import type { Metadata } from "next";
import StreakProgramContent from "@/components/account/StreakProgramContent";

export const metadata: Metadata = {
  title: "My Streak | LOD",
  description: "Track your LOD streak, milestones, and rewards.",
};

export default function StreakPage() {
  return <StreakProgramContent />;
}
