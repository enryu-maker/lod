import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ReferralPublicContent from "@/components/referral/ReferralPublicContent";

export const metadata: Metadata = {
  title: "LOD Referral Program — Give a Free Bag. Earn $5.",
  description:
    "Share LOD with a friend in Boston. They get their first bag completely free. You earn $5 LOD credit when they complete their first order.",
  alternates: {
    canonical: "https://lodvalet.com/referral",
  },
  openGraph: {
    title: "Give your friend a free LOD bag. Earn $5.",
    description:
      "Boston's premium laundry service rewards sharing. Your friend gets their first bag free. You earn $5. Everyone wins.",
    url: "https://lodvalet.com/referral",
    images: [
      {
        url: "/og-referral.png",
        width: 1200,
        height: 630,
        alt: "LOD Referral Program - Give a free bag. Earn $5.",
      },
    ],
  },
};

export default function ReferralPublicPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <ReferralPublicContent />
      </main>
    </>
  );
}
