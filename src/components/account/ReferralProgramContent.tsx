"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { useReferralPageData } from "@/hooks/useReferralPageData";
import { shareMessage } from "@/lib/referral-content";
import type { ReferralStatus } from "@/lib/firestore/types";

const pageX = "max-w-[1280px] mx-auto px-4 md:px-20";
const cardX = "mx-4 md:mx-20";

type ReferralRow = {
  id: string;
  initials: string;
  name: string;
  date: string;
  status: ReferralStatus;
  credit?: number;
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans font-medium text-[11px] uppercase tracking-[0.15em] text-[#00C2A8] mb-3">
      {children}
    </p>
  );
}

function StatCard({
  value,
  label,
  color = "#0A1628",
}: {
  value: string | number;
  label: string;
  color?: string;
}) {
  return (
    <div className="rounded-xl bg-white p-5 text-center shadow-sm">
      <p className="font-heading text-[40px] font-bold leading-none" style={{ color }}>
        {value}
      </p>
      <p className="mt-2 font-sans text-[13px] text-[#6B7280]">{label}</p>
    </div>
  );
}

function ReferralRowItem({ row }: { row: ReferralRow }) {
  return (
    <div className="flex items-center gap-4 border-b border-[#F4F6F8] py-4 last:border-0">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#00C2A8] font-sans text-sm font-bold text-white">
        {row.initials}
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-heading text-[15px] font-semibold text-[#0A1628]">{row.name}</p>
        <p className="font-sans text-[13px] text-[#6B7280]">{row.date}</p>
      </div>
      <div className="text-right">
        {row.status === "pending" ? (
          <span className="inline-block rounded-full bg-amber-100 px-3 py-1 font-sans text-xs font-medium text-[#F59E0B]">
            Pending
          </span>
        ) : (
          <>
            <span className="mb-1 inline-block rounded-full bg-emerald-100 px-3 py-1 font-sans text-xs font-medium text-[#10B981]">
              Credit Earned ✓
            </span>
            <p className="font-sans text-[15px] font-bold text-[#10B981]">
              ${(row.credit ?? 5).toFixed(2)}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default function ReferralProgramContent() {
  const linkRef = useRef<HTMLDivElement>(null);
  const {
    loading,
    referralCode,
    stats,
    rows,
    topReferrers,
    userRank,
    daysUntilAnnouncement,
  } = useReferralPageData();
  const [copied, setCopied] = useState(false);

  const referralUrl = referralCode ? `lodvalet.com/r/${referralCode}` : "";

  const copyLink = async () => {
    if (!referralUrl) return;
    try {
      await navigator.clipboard.writeText(`https://${referralUrl}`);
    } catch {
      /* fallback */
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  const scrollToLink = () => {
    linkRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const encodedMessage = encodeURIComponent(shareMessage(referralCode || ""));

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center bg-[#F4F6F8]">
        <p className="font-sans text-sm text-[#6B7280]">Loading your referral program...</p>
      </div>
    );
  }

  return (
    <div className="bg-[#F4F6F8] pb-16">
      <section className="relative overflow-hidden bg-[#0A1628] py-8 md:py-12">
        <div className={`${pageX} relative z-10`}>
          <Reveal>
            <Eyebrow>Referral Program</Eyebrow>
            <h1 className="font-heading text-[32px] font-bold text-white md:text-[48px]">
              Give a free bag. Earn $5.
            </h1>
            <p className="mt-3 max-w-xl font-heading text-lg text-white/65">
              Share LOD with a friend. They get their first bag free. You earn $5 when they
              complete their first order.
            </p>
          </Reveal>
          <p
            className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 font-heading text-[96px] font-bold leading-none text-[#00C2A8] opacity-[0.08] md:right-20 md:block"
            aria-hidden
          >
            $5
          </p>
        </div>
      </section>

      <div ref={linkRef} className={`${cardX} relative z-20 -mt-6 space-y-6`}>
        <Reveal>
          <div className="rounded-[20px] bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)] md:p-10">
            <h2 className="font-heading text-[22px] font-bold text-[#0A1628]">
              Your referral link
            </h2>
            <p className="mt-1 font-heading text-sm text-[#6B7280]">
              Share this link. Your friend gets their first bag free.
            </p>

            <div className="mt-6 flex flex-col gap-3 rounded-xl border border-[#00C2A8]/20 bg-[#00C2A8]/6 p-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="break-all font-mono text-[15px] text-[#00C2A8]">
                {referralUrl || "Generating your link..."}
              </p>
              <button
                type="button"
                onClick={copyLink}
                disabled={!referralUrl}
                className={`shrink-0 rounded-lg px-4 py-2 font-sans text-[13px] font-bold transition-colors disabled:opacity-50 ${
                  copied ? "bg-[#10B981] text-white" : "bg-[#00C2A8] text-[#0A1628]"
                }`}
              >
                {copied ? "Copied! ✓" : "Copy Link"}
              </button>
            </div>

            <p className="mt-6 font-sans text-[13px] text-[#6B7280]">Share directly:</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <a
                href={`sms:?body=${encodedMessage}`}
                className="inline-flex items-center gap-2 rounded-lg border border-[#E8EAED] bg-white px-5 py-2.5 font-sans text-sm font-medium text-[#0A1628] hover:border-[#00C2A8]/40"
              >
                Text Message
              </a>
              <a
                href={`https://wa.me/?text=${encodedMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[#E8EAED] bg-white px-5 py-2.5 font-sans text-sm font-medium text-[#0A1628] hover:border-[#00C2A8]/40"
              >
                WhatsApp
              </a>
              <a
                href={`mailto:?subject=${encodeURIComponent("Try LOD laundry")}&body=${encodedMessage}`}
                className="inline-flex items-center gap-2 rounded-lg border border-[#E8EAED] bg-white px-5 py-2.5 font-sans text-sm font-medium text-[#0A1628] hover:border-[#00C2A8]/40"
              >
                Email
              </a>
            </div>

            <div className="mt-6 rounded-2xl bg-[#F4F6F8] p-8">
              <h2 className="font-heading text-[22px] font-bold text-[#0A1628]">
                How it works
              </h2>
              <div className="mt-8 grid gap-8 md:grid-cols-3 md:gap-4">
                {[
                  {
                    step: "1",
                    title: "Share your link",
                    body: "Send your unique link to anyone in Boston.",
                  },
                  {
                    step: "2",
                    title: "Friend gets a free bag",
                    body: "They sign up and get their first LOD bag completely free. No credit card needed.",
                  },
                  {
                    step: "3",
                    title: "You earn $5",
                    body: "When their first order is delivered, $5 LOD credit lands in your account automatically.",
                  },
                ].map((item) => (
                  <div key={item.step} className="text-center md:text-left">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#00C2A8] font-heading text-xl font-bold text-white md:mx-0">
                      {item.step}
                    </div>
                    <h3 className="font-heading text-base font-bold text-[#0A1628]">
                      {item.title}
                    </h3>
                    <p className="mt-1 font-heading text-sm text-[#6B7280]">{item.body}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-center font-sans text-xs text-[#6B7280]">
                $5 credit applies when referee completes their first paid order. Credit added
                within 24 hours of delivery confirmation.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-2xl bg-[#F4F6F8] p-6 md:p-8">
            <h2 className="font-heading text-[22px] font-bold text-[#0A1628]">
              Your referrals
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
              <StatCard value={stats.totalReferred} label="Total Referred" />
              <StatCard value={stats.pending} label="Pending" color="#F59E0B" />
              <StatCard value={stats.completed} label="Completed" color="#10B981" />
              <StatCard
                value={`$${stats.totalEarned.toFixed(2)}`}
                label="Total Earned"
                color="#00C2A8"
              />
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
            <h2 className="font-heading text-[22px] font-bold text-[#0A1628]">
              Your referral history
            </h2>
            {rows.length === 0 ? (
              <div className="py-12 text-center">
                <p className="font-heading text-base text-[#6B7280]">
                  No referrals yet. Share your link above to get started.
                </p>
                <button
                  type="button"
                  onClick={scrollToLink}
                  className="mt-6 rounded-lg bg-[#00C2A8] px-6 py-2.5 font-sans text-sm font-bold text-[#0A1628]"
                >
                  Copy your link
                </button>
              </div>
            ) : (
              <div className="mt-4">
                {rows.map((row) => (
                  <ReferralRowItem key={row.id} row={row} />
                ))}
              </div>
            )}
          </div>
        </Reveal>
      </div>

      <div className={`${cardX} mt-6`}>
        <Reveal>
          <div className="rounded-2xl bg-[#0A1628] p-8 md:p-10">
            <h2 className="font-heading text-[28px] font-bold text-white">
              Boston&apos;s Top Referrers
            </h2>
            <p className="mt-2 font-heading text-base text-white/65">
              This month&apos;s leaders. Top referrer wins LOD Insider for one year.
            </p>
            <div className="mt-4 inline-block rounded-lg border border-[#00C2A8]/20 bg-[#00C2A8]/12 px-4 py-2 font-sans text-[13px] font-medium text-[#00C2A8]">
              Next announcement in {daysUntilAnnouncement} days
            </div>

            {topReferrers.length === 0 ? (
              <p className="mt-8 font-heading text-sm text-white/50">
                No opted-in referrers yet this month.
              </p>
            ) : (
              <Stagger className="mt-8 space-y-3">
                {topReferrers.map((entry) => {
                  const bgClass =
                    entry.rank === 1
                      ? "border-[#D4A843]/20 bg-[#D4A843]/12"
                      : entry.rank === 2
                        ? "border-white/10 bg-white/4"
                        : "border-amber-700/20 bg-amber-900/10";

                  return (
                    <StaggerItem key={entry.rank}>
                      <div
                        className={`flex flex-wrap items-center justify-between gap-3 rounded-xl border px-5 py-4 ${bgClass}`}
                      >
                        <div className="flex items-center gap-3">
                          {entry.medal && (
                            <span className="text-2xl" aria-hidden>
                              {entry.medal}
                            </span>
                          )}
                          <div>
                            <p className="font-heading text-lg font-bold text-white">
                              {entry.name}
                            </p>
                            <p className="font-heading text-sm text-white/50">
                              {entry.neighborhood}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p
                            className={`font-heading text-lg font-bold ${
                              entry.rank === 1 ? "text-[#D4A843]" : "text-white"
                            }`}
                          >
                            {entry.count} referrals
                          </p>
                          {entry.rank === 1 && (
                            <span className="mt-1 inline-block rounded-full bg-[#D4A843]/20 px-2 py-0.5 font-sans text-[11px] text-[#D4A843]">
                              LOD Insider Prize
                            </span>
                          )}
                        </div>
                      </div>
                    </StaggerItem>
                  );
                })}
              </Stagger>
            )}

            {userRank && (
              <div className="mt-6 rounded-lg border border-[#00C2A8]/20 bg-[#00C2A8]/8 px-5 py-4">
                <p className="font-sans text-sm font-medium text-[#00C2A8]">
                  You have {userRank.count} referrals this month
                </p>
              </div>
            )}

            <p className="mt-6 text-center font-sans text-xs text-white/35">
              Only users who have opted in appear here. Update in{" "}
              <Link href="/account" className="underline hover:text-white/50">
                Settings
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
