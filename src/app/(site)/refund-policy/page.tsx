import type { Metadata } from "next";
import PolicyPageLayout from "@/components/policy/PolicyPageLayout";
import RefundPolicyContent from "@/components/policy/content/RefundPolicyContent";

export const metadata: Metadata = {
  title: "Refund Policy | LOD",
  description: "LOD Refund Policy. Cancellation refunds, service credits, and claim procedures.",
};

export default function RefundPolicyPage() {
  return (
    <PolicyPageLayout title="Refund Policy" slug="refund-policy">
      <RefundPolicyContent />
    </PolicyPageLayout>
  );
}
