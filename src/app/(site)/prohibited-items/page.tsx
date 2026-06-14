import type { Metadata } from "next";
import PolicyPageLayout from "@/components/policy/PolicyPageLayout";
import ProhibitedItemsContent from "@/components/policy/content/ProhibitedItemsContent";

export const metadata: Metadata = {
  title: "Prohibited Items Policy | LOD",
  description: "Items that cannot be included in LOD laundry orders.",
};

export default function ProhibitedItemsPage() {
  return (
    <PolicyPageLayout title="Prohibited Items Policy" slug="prohibited-items">
      <ProhibitedItemsContent />
    </PolicyPageLayout>
  );
}
