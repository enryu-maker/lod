import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FoundingMemberPageContent from "@/components/founding-member/FoundingMemberPageContent";

export const metadata: Metadata = {
  title: "Founding Member | LOD",
  description:
    "Join the first 500 LOD Founding Members. $14.99 once for lifetime benefits.",
};

export default function FoundingMemberPage() {
  return (
    <>
      <Navbar />
      <main>
        <FoundingMemberPageContent />
      </main>
    </>
  );
}
