import type { Metadata } from "next";
import PolicyPageLayout from "@/components/policy/PolicyPageLayout";
import DmcaContent from "@/components/policy/content/DmcaContent";

export const metadata: Metadata = {
  title: "DMCA & Intellectual Property | LOD",
  description: "LOD DMCA and intellectual property policy. Report copyright infringement or trademark violations. LOD™ and HANDLED.™ are trademarks of LOD LLC.",
};

export default function DmcaPage() {
  return (
    <PolicyPageLayout title="DMCA & Intellectual Property Policy" slug="dmca">
      <DmcaContent />
    </PolicyPageLayout>
  );
}
