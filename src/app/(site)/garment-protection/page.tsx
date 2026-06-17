import type { Metadata } from "next";
import PolicyPageLayout from "@/components/policy/PolicyPageLayout";
import GarmentProtectionContent from "@/components/policy/content/GarmentProtectionContent";

export const metadata: Metadata = {
  title: "Garment Protection Terms | LOD",
  description: "LOD Garment Protection covers up to $150 in account credit for verified garment damage or loss during LOD processing. $6.99 per order. Full terms and claim procedures.",
};

export default function GarmentProtectionPage() {
  return (
    <PolicyPageLayout title="Garment Protection Terms" slug="garment-protection">
      <GarmentProtectionContent />
    </PolicyPageLayout>
  );
}
