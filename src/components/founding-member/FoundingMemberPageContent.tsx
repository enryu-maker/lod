"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { pressableProps } from "@/lib/motion";
import { FOUNDING_MEMBER_REMAINING } from "@/components/auth/signup/signup-utils";
import {
  clarityCards,
  foundingBenefits,
  foundingFinePrint,
} from "@/lib/founding-member-content";

const sectionX = "max-w-[800px] mx-auto px-4 md:px-20";
const wideX = "max-w-[1280px] mx-auto px-4 md:px-20";

function PortalAnimationSlot() {
  return (
    <div
      className="mx-auto mb-6 flex h-16 w-16 items-center justify-center"
      data-tag="portal-o-animation"
    >
      <span className="font-sans text-xs uppercase tracking-[0.15em] text-white/25">
        animation
      </span>
    </div>
  );
}

function LiveCounter({ remaining, large }: { remaining: number; large?: boolean }) {
  if (large) {
    return (
      <div className="mb-2">
        <p className="font-heading font-bold text-[80px] leading-none text-[#D4A843]">
          {remaining}
        </p>
        <p className="font-sans text-lg text-white/45">spots remaining of 500</p>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A843]/20 bg-[#D4A843]/10 px-6 py-2">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D4A843] opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D4A843]" />
      </span>
      <span className="font-sans font-medium text-sm text-[#D4A843]">
        {remaining} of 500 founding spots remaining
      </span>
    </div>
  );
}

function FoundingDisclosure() {
  const lines = [
    { label: "Price:", value: "$14.99 one-time, non-refundable once activated" },
    {
      label: "Benefit:",
      value: "10% off eligible single bag orders for the life of your account in good standing",
    },
    {
      label: "Not applicable to:",
      value: "subscriptions, the LOD Starter Kit, or orders already discounted at a higher rate",
    },
    { label: "Limited to:", value: "first 500 members only" },
    { label: "Discount:", value: "honored per LOD Terms of Service Section 7.7" },
  ];

  return (
    <div className="mb-4 rounded-lg border border-white/12 bg-white/6 p-5 text-left md:p-6">
      {lines.map((line) => (
        <p key={line.label} className="font-sans text-[13px] leading-[1.8] text-white/65">
          <span className="font-bold text-white">{line.label}</span> {line.value}
        </p>
      ))}
    </div>
  );
}

function FoundingCTA({
  isMember,
  onJoin,
  processing,
}: {
  isMember: boolean;
  onJoin: () => void;
  processing: boolean;
}) {
  if (isMember) {
    return (
      <div className="rounded-2xl border border-[#D4A843]/20 bg-[#D4A843]/10 p-8 text-center">
        <p className="text-5xl mb-4" aria-hidden>
          ⭐
        </p>
        <h3 className="font-heading font-bold text-[28px] text-[#D4A843] mb-2">
          You&apos;re a LOD Founding Member.
        </h3>
        <p className="text-white/65 mb-6">
          Your 10% discount and all benefits are active on your account.
        </p>
        <Link
          href="/account"
          className="inline-flex font-heading font-bold text-base text-[#D4A843] underline underline-offset-4 hover:text-[#D4A843]/80"
        >
          Go to My Account
        </Link>
      </div>
    );
  }

  return (
    <div>
      <FoundingDisclosure />
      <motion.button
        type="button"
        onClick={onJoin}
        disabled={processing}
        className="inline-flex items-center justify-center rounded-lg bg-[#D4A843] px-16 py-5 font-heading font-bold text-lg text-[#0A1628] disabled:opacity-70"
        {...pressableProps}
      >
        {processing ? (
          <span className="flex items-center gap-2">
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-[#0A1628]/30 border-t-[#0A1628]" />
            Processing...
          </span>
        ) : (
          "Become a Founding Member"
        )}
      </motion.button>
      <p className="mt-4 font-sans text-xs text-white/25">{foundingFinePrint}</p>
    </div>
  );
}

export default function FoundingMemberPageContent() {
  const reduceMotion = useReducedMotion();
  const remaining = FOUNDING_MEMBER_REMAINING;
  const showUrgency = remaining < 50;
  const [processing, setProcessing] = useState(false);
  const isMember = false;

  const handleJoin = () => {
    setProcessing(true);
    window.setTimeout(() => {
      window.location.href = "/signup?redirect=founding-member";
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#0A1628] text-white">
      {/* Hero */}
      <section className="pt-12 pb-[60px] md:pt-20 md:pb-[60px]">
        <div className={`${sectionX} text-center`}>
          <Reveal>
            <PortalAnimationSlot />
            <span className="mb-6 inline-block rounded-full bg-[#D4A843] px-5 py-1.5 font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-[#0A1628]">
              First 500 Only
            </span>
            <h1 className="mb-4 font-heading text-[40px] font-bold leading-[1.05] text-[#D4A843] md:text-[64px]">
              Become a LOD Founding Member.
            </h1>
            <p className="mb-8 font-heading text-lg text-white/65 md:text-[22px]">
              500 people get this forever. $14.99 once. That&apos;s it.
            </p>
            <LiveCounter remaining={remaining} />
            {showUrgency && (
              <motion.div
                className="mt-4 inline-flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/12 px-5 py-3"
                animate={reduceMotion ? {} : { scale: [1, 1.02, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <span className="text-sm">⚠</span>
                <span className="font-sans text-sm font-bold text-[#EF4444]">
                  Almost gone — only {remaining} spots left
                </span>
              </motion.div>
            )}
          </Reveal>
        </div>
      </section>

      {/* Price + CTA */}
      <section className="pb-[60px]">
        <div className={`${sectionX} text-center`}>
          <Reveal delay={0.05}>
            {!isMember && (
              <>
                <p className="font-heading text-[64px] font-bold leading-none text-white md:text-[96px]">
                  $14.99
                </p>
                <p className="mt-2 font-sans text-base lowercase text-white/45">
                  one-time payment. never charged again.
                </p>
              </>
            )}
            <div className="mt-8">
              <FoundingCTA
                isMember={isMember}
                onJoin={handleJoin}
                processing={processing}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-y border-white/6 py-[60px]">
        <div className={wideX}>
          <Reveal>
            <h2 className="mb-12 text-center font-heading text-[28px] font-bold text-white md:text-[40px]">
              Everything you get. Forever.
            </h2>
          </Reveal>
          <Stagger className="grid gap-6 md:grid-cols-2">
            {foundingBenefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <div className="flex gap-4 rounded-2xl border border-white/8 bg-white/4 p-7 md:p-8">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#D4A843]/40 bg-[#D4A843]/20 font-sans text-sm font-bold text-[#D4A843]">
                    ✓
                  </span>
                  <div>
                    <h3 className="font-heading text-[17px] font-bold text-white">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 font-heading text-sm text-white/60">
                      {benefit.body}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Clarity */}
      <section className="py-[60px]">
        <div className={wideX}>
          <Reveal>
            <h2 className="mb-10 text-center font-heading text-[32px] font-bold text-white">
              Let&apos;s be clear about what this is.
            </h2>
          </Reveal>
          <Stagger className="grid gap-6 md:grid-cols-3">
            {clarityCards.map((card) => (
              <StaggerItem key={card.title}>
                <div className="rounded-xl border border-white/6 bg-white/3 p-6 text-left">
                  <p
                    className={`mb-2 font-heading text-base font-bold ${
                      card.type === "yes" ? "text-[#00C2A8]" : "text-red-400/80"
                    }`}
                  >
                    {card.type === "yes" ? "✓" : "✕"} {card.title}
                  </p>
                  <p className="font-heading text-sm text-white/60">{card.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Secondary CTA */}
      <section className="border-t border-white/6 py-[60px]">
        <div className={`${sectionX} text-center`}>
          <Reveal>
            {isMember ? (
              <FoundingCTA isMember processing={false} onJoin={() => {}} />
            ) : (
              <>
                <LiveCounter remaining={remaining} large />
                <h2 className="my-6 font-heading text-[36px] font-bold text-white">
                  Don&apos;t miss the founding 500.
                </h2>
                <p className="mb-8 font-heading text-lg text-white/65">
                  Once they&apos;re gone, they&apos;re gone. This offer never returns.
                </p>
                <FoundingCTA
                  isMember={false}
                  onJoin={handleJoin}
                  processing={processing}
                />
              </>
            )}
          </Reveal>
        </div>
      </section>
    </div>
  );
}
