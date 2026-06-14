import Navbar from "@/components/Navbar";
import PolicyShell from "@/components/policy/PolicyShell";
import type { PolicySlug } from "@/lib/policy-nav";
import type { ReactNode } from "react";

type PolicyPageLayoutProps = {
  title: string;
  slug: PolicySlug;
  children: ReactNode;
};

export default function PolicyPageLayout({ title, slug, children }: PolicyPageLayoutProps) {
  return (
    <>
      <Navbar />
      <main>
        <PolicyShell title={title} slug={slug}>
          {children}
        </PolicyShell>
      </main>
    </>
  );
}
