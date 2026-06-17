import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import StreakPublicContent from "@/components/streak/StreakPublicContent";

export const metadata: Metadata = {
  title: "LOD Streak Program  Earn Free Laundry in Boston",
  description:
    "Every LOD order earns you a streak stamp. 10 bags earns you a free Essential wash or $14.99 credit. Boston's laundry loyalty program that actually rewards you.",
  alternates: {
    canonical: "https://lodvalet.com/streak",
  },
  openGraph: {
    title: "Earn free laundry with LOD. Every bag counts.",
    description:
      "Boston's premium laundry service rewards loyalty. 10 bags = 1 free wash. Start your streak today.",
    url: "https://lodvalet.com/streak",
    images: [
      {
        url: "/og-streak.png",
        width: 1200,
        height: 630,
        alt: "LOD Streak Program - 10 bags = 1 free wash",
      },
    ],
  },
};

export default function StreakPublicPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <StreakPublicContent />
      </main>
    </>
  );
}
