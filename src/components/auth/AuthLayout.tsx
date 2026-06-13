import type { ReactNode } from "react";
import Link from "next/link";
import { CircleCheck } from "lucide-react";
import LodWordmark from "@/components/LodWordmark";

const benefits = [
  "Schedule pickups in under 60 seconds",
  "Track every order with photo documentation",
  "Earn streak rewards and referral credits",
];

type AuthLayoutProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
  footerText: string;
  footerLinkHref: string;
  footerLinkLabel: string;
};

export default function AuthLayout({
  title,
  subtitle,
  children,
  footerText,
  footerLinkHref,
  footerLinkLabel,
}: AuthLayoutProps) {
  return (
    <section className="min-h-[calc(100vh-80px)] bg-[#0A1628] pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl lg:max-w-none mx-auto">
          {/* Brand panel */}
          <div className="flex flex-col items-start text-left lg:pr-8">
            <Link href="/" className="mb-8 block">
              <LodWordmark className="h-8 w-auto" />
            </Link>

            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-sans text-xs font-medium uppercase tracking-wider text-primary">
                Boston · Launching June 25
              </span>
            </div>

            <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl leading-tight text-white mb-4">
              {title}
            </h1>
            <p className="font-heading font-normal text-base md:text-lg text-white/65 leading-relaxed mb-10 max-w-md">
              {subtitle}
            </p>

            <ul className="hidden lg:flex flex-col gap-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <CircleCheck
                    className="w-5 h-5 text-primary shrink-0"
                    aria-hidden="true"
                  />
                  <span className="font-heading font-normal text-sm text-white/80">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form card */}
          <div className="w-full max-w-md lg:max-w-lg mx-auto lg:ml-auto">
            <div className="bg-white rounded-[20px] p-8 md:p-10 shadow-xl shadow-black/10 border border-white/10">
              {children}

              <p className="mt-8 pt-6 border-t border-[#E8EAED] text-center font-heading font-normal text-sm text-[#6B7280]">
                {footerText}{" "}
                <Link
                  href={footerLinkHref}
                  className="font-sans font-medium text-[#00C2A8] hover:text-[#00C2A8]/80 transition-colors"
                >
                  {footerLinkLabel}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
