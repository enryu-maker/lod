import type { Metadata } from "next";
import PolicyPageLayout from "@/components/policy/PolicyPageLayout";
import TermsContent from "@/components/policy/content/TermsContent";

export const metadata: Metadata = {
  title: "Terms of Service | LOD",
  description: "LOD Terms of Service. Read the terms governing use of LOD laundry services.",
};

export default function TermsPage() {
  return (
    <PolicyPageLayout title="Terms of Service" slug="terms">
      <TermsContent />
    </PolicyPageLayout>
  );
}
