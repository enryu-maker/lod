import type { Metadata } from "next";
import PolicyPageLayout from "@/components/policy/PolicyPageLayout";
import AccessibilityContent from "@/components/policy/content/AccessibilityContent";

export const metadata: Metadata = {
  title: "Accessibility Statement | LOD",
  description: "LOD's commitment to WCAG 2.1 Level AA accessibility. Contact us with feedback at support@lodvalet.com.",
};

export default function AccessibilityPage() {
  return (
    <PolicyPageLayout title="Accessibility Statement" slug="accessibility">
      <AccessibilityContent />
    </PolicyPageLayout>
  );
}
