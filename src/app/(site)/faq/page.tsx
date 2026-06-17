import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FaqPageContent from "@/components/faq/FaqPageContent";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | LOD",
  description:
    "Find answers to common questions about LOD's premium laundry pickup and delivery service, cleaning process, pricing, streak rewards, and referrals.",
};

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <FaqPageContent />
      </main>
    </>
  );
}
