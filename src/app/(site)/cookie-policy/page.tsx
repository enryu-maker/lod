import type { Metadata } from "next";
import PolicyPageLayout from "@/components/policy/PolicyPageLayout";
import CookiePolicyContent from "@/components/policy/content/CookiePolicyContent";

export const metadata: Metadata = {
  title: "Cookie Policy | LOD",
  description: "How LOD uses essential, analytics, preference, and marketing cookies. Manage your preferences and learn about our third-party tracking partners.",
};

export default function CookiePolicyPage() {
  return (
    <PolicyPageLayout title="Cookie Policy" slug="cookie-policy">
      <CookiePolicyContent />
    </PolicyPageLayout>
  );
}
