import type { Metadata } from "next";
import PolicyPageLayout from "@/components/policy/PolicyPageLayout";
import PrivacyContent from "@/components/policy/content/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | LOD",
  description: "LOD Privacy Policy. Learn how we collect, use, store, and protect your personal information, contact info, and transaction history. Read our third-party data rules.",
};

export default function PrivacyPage() {
  return (
    <PolicyPageLayout title="Privacy Policy" slug="privacy">
      <PrivacyContent />
    </PolicyPageLayout>
  );
}
