import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";

export const metadata: Metadata = {
  title: "Pricing | LOD",
  description: "Simple. Flat. No surprises. Choose the service tier that fits your timeline.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Pricing />
      </main>
    </>
  );
}
