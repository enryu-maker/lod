import React from "react";
import Navbar from "@/components/Navbar";
import OrderHero from "@/components/OrderHero";
import HowItWorks from "@/components/HowItWorks";
import DetailedMatrix from "@/components/DetailedMatrix";
import Pricing from "@/components/Pricing";
import PhotoPromise from "@/components/PhotoPromise";
import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: "How It Works | LOD",
  description:
    "Learn how LOD works: from scheduling your pickup in 60 seconds, to photo documentation, to quality check and contactless return delivery.",
};

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <OrderHero />
        <HowItWorks />
        <DetailedMatrix />
        <Pricing />
        <PhotoPromise />
        <FinalCTA />
      </main>
    </>
  );
}
