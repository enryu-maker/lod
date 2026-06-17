import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AreasPageContent from "@/components/areas/AreasPageContent";

export const metadata: Metadata = {
  title: "Service Areas | Boston Premium Laundry Delivery | LOD",
  description:
    "LOD provides premium next-day laundry pickup and delivery in Boston neighborhoods: Back Bay, Brookline, Fenway, Mission Hill, and Longwood. Schedule in 60 seconds.",
};

export default function AreasPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <AreasPageContent />
      </main>
    </>
  );
}
