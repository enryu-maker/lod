import type { Metadata } from "next";
import PolicyPageLayout from "@/components/policy/PolicyPageLayout";
import GarmentProtectionContent from "@/components/policy/content/GarmentProtectionContent";

export const metadata: Metadata = {
  title: "Garment Protection Terms | LOD",
  description: "LOD Garment Protection terms, coverage, and claim procedures.",
};

export default function GarmentProtectionPage() {
  return (
    <PolicyPageLayout title="Garment Protection Terms" slug="garment-protection">
      <GarmentProtectionContent />
    </PolicyPageLayout>
  );
}
