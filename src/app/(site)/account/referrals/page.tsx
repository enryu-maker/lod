import type { Metadata } from "next";
import ReferralProgramContent from "@/components/account/ReferralProgramContent";

export const metadata: Metadata = {
  title: "Referral Program | LOD",
  description: "Give a free bag. Earn $5 when friends complete their first order.",
};

export default function ReferralsPage() {
  return <ReferralProgramContent />;
}
