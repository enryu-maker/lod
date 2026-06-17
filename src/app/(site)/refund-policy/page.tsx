import type { Metadata } from "next";
import PolicyPageLayout from "@/components/policy/PolicyPageLayout";
import RefundPolicyContent from "@/components/policy/content/RefundPolicyContent";

export const metadata: Metadata = {
  title: "Refund Policy | LOD",
  description: "LOD Refund Policy. Details on cancellation refunds, delivery change credits, and customer service claims. Standard processing times and options.",
};

export default function RefundPolicyPage() {
  return (
    <PolicyPageLayout title="Refund Policy" slug="refund-policy">
      <RefundPolicyContent />
    </PolicyPageLayout>
  );
}
