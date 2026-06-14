import type { Metadata } from "next";
import PolicyPageLayout from "@/components/policy/PolicyPageLayout";
import AccessibilityContent from "@/components/policy/content/AccessibilityContent";

export const metadata: Metadata = {
  title: "Accessibility Statement | LOD",
  description: "LOD accessibility commitment and feedback contact.",
};

export default function AccessibilityPage() {
  return (
    <PolicyPageLayout title="Accessibility Statement" slug="accessibility">
      <AccessibilityContent />
    </PolicyPageLayout>
  );
}
