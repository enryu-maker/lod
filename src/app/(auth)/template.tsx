"use client";

import PageTransition from "@/components/motion/PageTransition";

export default function AuthTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageTransition className="h-full min-h-0 flex flex-col flex-1">
      {children}
    </PageTransition>
  );
}
