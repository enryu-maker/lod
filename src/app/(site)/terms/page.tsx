import type { Metadata } from "next";
import PolicyPageLayout from "@/components/policy/PolicyPageLayout";
import TermsContent from "@/components/policy/content/TermsContent";

export const metadata: Metadata = {
  title: "Terms of Service | LOD",
  description: "LOD Terms of Service. The terms and conditions governing the use of LOD laundry pickup, processing, and delivery services in Boston. Founding Member rules.",
};

export default function TermsPage() {
  return (
    <PolicyPageLayout title="Terms of Service" slug="terms">
      <TermsContent />
    </PolicyPageLayout>
  );
}
