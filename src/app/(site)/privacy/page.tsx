import type { Metadata } from "next";
import PolicyPageLayout from "@/components/policy/PolicyPageLayout";
import PrivacyContent from "@/components/policy/content/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | LOD",
  description: "LOD Privacy Policy. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <PolicyPageLayout title="Privacy Policy" slug="privacy">
      <PrivacyContent />
    </PolicyPageLayout>
  );
}
