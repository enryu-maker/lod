import React from "react";
import Navbar from "@/components/Navbar";
import OrderHero from "@/components/OrderHero";
import DetailedMatrix from "@/components/DetailedMatrix";
import PhotoPromise from "@/components/PhotoPromise";
import OrderPricing from "@/components/OrderPricing";
import OrderCTA from "@/components/OrderCTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Order Process | LOD Premium Laundry On-Demand",
  description: "Learn how LOD works: from scheduling your pickup in 60 seconds, to photo documentation, to quality check and contactless return delivery.",
};

export default function OrderStepPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow bg-surface">
        <OrderHero />
        <DetailedMatrix />
        <OrderPricing />
        <PhotoPromise />
        <OrderCTA />
      </main>
      <Footer />
    </>
  );
}
