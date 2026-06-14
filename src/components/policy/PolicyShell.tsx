import Link from "next/link";
import type { ReactNode } from "react";
import {
  POLICY_EFFECTIVE_DATE,
  POLICY_LAST_UPDATED,
  POLICY_NAV,
  type PolicySlug,
} from "@/lib/policy-nav";

type PolicyShellProps = {
  title: string;
  slug: PolicySlug;
  children: ReactNode;
};

export default function PolicyShell({ title, slug, children }: PolicyShellProps) {
  return (
    <div className="bg-white">
      <section className="bg-[#0A1628] px-4 py-12 md:px-20 md:py-20">
        <div className="mx-auto max-w-[800px]">
          <p className="mb-3 font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-[#00C2A8]">
            Legal
          </p>
          <h1 className="mb-4 font-heading text-[32px] font-bold leading-[1.1] text-white md:text-[52px]">
            {title}
          </h1>
          <p className="font-sans text-sm text-white/45">
            Effective Date: {POLICY_EFFECTIVE_DATE} | Last Updated: {POLICY_LAST_UPDATED}
          </p>
        </div>
      </section>

      <nav
        aria-label="Policy navigation"
        className="sticky top-0 z-40 border-b border-[#E8EAED] bg-white"
      >
        <div className="mx-auto w-full max-w-[1280px] overflow-x-auto px-4 md:overflow-visible md:px-12 lg:px-20 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex h-12 min-w-max md:min-w-full md:justify-between">
            {POLICY_NAV.map((item) => {
              const active = item.slug === slug;
              return (
                <Link
                  key={item.slug}
                  href={item.href}
                  className={`shrink-0 whitespace-nowrap px-3 font-sans text-[13px] leading-[48px] transition-colors hover:text-[#0A1628] md:px-2 lg:px-3 ${
                    active
                      ? "border-b-2 border-[#00C2A8] font-medium text-[#0A1628]"
                      : "text-[#6B7280]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      <p className="mx-auto max-w-[800px] px-4 pt-6 font-sans text-[13px] text-[#6B7280] md:px-20">
        {title} | Last Updated: {POLICY_LAST_UPDATED}
      </p>

      <article className="mx-auto max-w-[800px] px-4 py-10 md:px-20 md:py-[60px]">
        {children}
      </article>

      <section className="bg-[#F4F6F8] px-4 py-10 text-center md:px-20 md:py-[60px]">
        <div className="mx-auto max-w-[800px]">
          <h3 className="mb-2 font-heading text-2xl font-bold text-[#0A1628]">
            Questions about this policy?
          </h3>
          <p className="mb-6 font-heading text-base text-[#6B7280]">
            We&apos;re here. Real answers from real people.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:support@lodvalet.com"
              className="rounded-lg bg-[#00C2A8] px-7 py-3 font-heading text-[15px] font-bold text-[#0A1628]"
            >
              Email Us
            </a>
            <Link
              href="/"
              className="rounded-lg border border-[#E8EAED] px-7 py-3 font-heading text-[15px] text-[#0A1628]"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
