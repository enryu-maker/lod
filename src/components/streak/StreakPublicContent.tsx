"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Check, Sparkles } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import { appleEase } from "@/lib/motion";
import { useAuthUser } from "@/hooks/useAuthUser";

// Local inline SVG Icons to keep the component self-contained and clean
function CalendarIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function LightningIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function GiftIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect x="2" y="7" width="20" height="5" />
      <line x1="12" y1="22" x2="12" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  );
}

function StarIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function TrophyIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
      <path d="M12 2a6 6 0 0 1 6 6v5a6 6 0 0 1-6 6 6 6 0 0 1-6-6V8a6 6 0 0 1 6-6z" />
    </svg>
  );
}

function DeliveryBoxIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="21 8 21 21 3 21 3 8" />
      <rect x="1" y="3" width="22" height="5" />
      <line x1="10" y1="12" x2="14" y2="12" />
    </svg>
  );
}

function StampIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function QrCodeIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
      <line x1="17" y1="7" x2="17.01" y2="7" />
      <line x1="17" y1="17" x2="17.01" y2="17" />
      <line x1="7" y1="17" x2="7.01" y2="17" />
    </svg>
  );
}

// Local FAQ Item Accordion component
type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

function FAQAccordionItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  const reduceMotion = useReducedMotion();
  return (
    <div className="border-b border-[#F4F6F8] py-5">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left focus:outline-none group cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="font-heading font-semibold text-lg text-[#0A1628] group-hover:text-[#00C2A8] transition-colors pr-6">
          {question}
        </span>
        <motion.span
          className="text-[#00C2A8] shrink-0"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.35, ease: appleEase }}
        >
          <ChevronDown className="w-5 h-5" strokeWidth={2.5} aria-hidden="true" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={reduceMotion ? undefined : { height: "auto", opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: appleEase }}
            className="overflow-hidden"
          >
            <p className="font-heading font-normal text-base text-[#0A1628]/65 leading-relaxed pt-3">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function StreakPublicContent() {
  const { user, profile } = useAuthUser();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Authenticated state calculations
  const currentStreak = profile?.currentStreak ?? 6; // default demo value: 6
  const filledCount = user ? Math.min(currentStreak, 10) : 6;
  const emptyCount = 10 - filledCount;

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "Do I need to do anything to start my streak?",
      answer: "No. Your streak starts automatically when you place your first LOD order. Your streak card arrives with your first delivery. From that point every order adds a stamp.",
    },
    {
      question: "What if I miss a week?",
      answer: "Your streak does not reset if you miss a week. You simply pick up where you left off. The milestone timelines (4 weeks, 8 weeks, etc.) are based on consistent ordering but your 10-bag count never resets unless you claim a reward.",
    },
    {
      question: "Can I choose my reward before I reach 10 bags?",
      answer: "Yes. Log into your account and set your preference on the streak page any time. You can change it right up until the moment you claim.",
    },
    {
      question: "What if my driver forgets to stamp my card?",
      answer: "Contact us at (857) 280-0992 and we will manually add the stamp to your digital record. Your physical card and your digital account are both tracked. We will always give you the benefit of the doubt.",
    },
    {
      question: "Is there a limit to how many times I can earn a streak reward?",
      answer: "No limit. Every 10 bags resets and starts a fresh cycle. Customers who order weekly can earn a free wash every 10 weeks indefinitely.",
    },
  ];

  // FAQ Schema for Search Engines
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <div className="bg-[#0A1628] text-white overflow-hidden">
      {/* FAQ Schema Injector */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* SECTION 1 - HERO */}
      <section className="relative py-[72px] md:py-[120px] px-4 md:px-20 min-h-auto lg:min-h-[85vh] flex items-center max-w-[1440px] mx-auto">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Dynamic Status / Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 bg-[#00C2A8]/12 border border-[#00C2A8]/25 rounded-full px-4 py-1.5 mb-6">
              <span className="h-2 w-2 rounded-full bg-[#00C2A8] animate-pulse" />
              <span className="font-sans text-[11px] font-medium tracking-[0.12em] text-[#00C2A8]">
                LOD STREAK PROGRAM
              </span>
            </div>

            {/* Dynamic Welcome Heading */}
            {user && (
              <p className="font-sans text-sm font-semibold uppercase tracking-wider text-[#00C2A8] mb-2">
                Welcome back, {profile?.firstName || "Member"}! You&apos;re at {currentStreak} of 10 bags  keep going!
              </p>
            )}

            <h1 className="font-heading font-bold text-4xl md:text-[56px] text-white leading-[1.05] tracking-tight mb-5">
              Every bag brings you closer to a free wash.
            </h1>

            <p className="font-heading font-normal text-base md:text-xl text-white/65 leading-[1.65] max-w-[500px] mb-8">
              LOD rewards loyalty the way it should work. No points. No tiers. No expiry dates. Just wash, earn, and claim.
            </p>

            {/* Core Promise Callout */}
            <div className="flex items-center gap-4 bg-[#00C2A8]/8 border border-[#00C2A8]/25 rounded-xl p-5 md:p-6 w-full max-w-lg mb-10 text-left">
              <div className="font-heading font-bold text-5xl md:text-[64px] text-[#00C2A8] leading-none select-none">
                10
              </div>
              <div className="h-12 w-[1px] bg-white/10" />
              <div className="flex-grow">
                <p className="font-heading font-bold text-lg md:text-[22px] text-white leading-snug">
                  bags = $14.99 LOD credit
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              {user ? (
                <>
                  <Link
                    href="/account/streak"
                    className="font-heading font-bold text-base bg-[#00C2A8] text-[#0A1628] px-8 py-4 rounded-lg hover:brightness-95 hover:scale-[1.02] active:scale-[0.98] transition-all text-center"
                  >
                    View Your Streak →
                  </Link>
                  <Link
                    href="/account"
                    className="font-heading font-normal text-[15px] text-white/55 hover:text-white px-4 py-2 transition-colors text-center"
                  >
                    View Your Dashboard →
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/signup?redirect=/account/streak"
                    className="font-heading font-bold text-base bg-[#00C2A8] text-[#0A1628] px-8 py-4 rounded-lg hover:brightness-95 hover:scale-[1.02] active:scale-[0.98] transition-all text-center"
                  >
                    Start Your Streak →
                  </Link>
                  <Link
                    href="/login?redirect=/account/streak"
                    className="font-heading font-normal text-[15px] text-white/55 hover:text-white px-4 py-2 transition-colors text-center"
                  >
                    Already have an account? Sign in
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Right Column - Animated Card Illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <Reveal className="w-full max-w-[440px] bg-white/4 border border-white/10 rounded-[20px] p-6 md:p-8 flex flex-col gap-6 shadow-2xl">
              {/* Streak Card Inner Container */}
              <div className="bg-[#0A1628] border border-white/8 rounded-2xl p-5 md:p-6 shadow-inner relative overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00C2A8]/10 rounded-full blur-3xl pointer-events-none" />

                {/* Top Row */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-heading text-lg font-bold tracking-wider text-white">LOD</span>
                  <span className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-white/35">
                    STREAK CARD
                  </span>
                </div>

                {/* Circles Row */}
                <div className="grid grid-cols-5 gap-3 mb-8 justify-items-center">
                  {Array.from({ length: 10 }, (_, i) => {
                    const stepNumber = i + 1;
                    const isFilled = stepNumber <= filledCount;

                    return (
                      <div
                        key={stepNumber}
                        className={`relative h-[36px] w-[36px] rounded-full flex items-center justify-center border font-sans text-xs font-bold transition-all duration-300 ${
                          isFilled
                            ? "bg-[#00C2A8] border-[#00C2A8] text-[#0A1628]"
                            : "bg-[#0A1628] border-white/20 text-white/30"
                        }`}
                      >
                        {isFilled ? (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              delay: i * 0.1,
                              type: "spring",
                              stiffness: 260,
                              damping: 20,
                            }}
                          >
                            <Check className="h-4 w-4 text-white" strokeWidth={3} />
                          </motion.span>
                        ) : (
                          <span>{stepNumber}</span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Row */}
                <div className="flex items-end justify-between">
                  <span className="font-sans text-[11px] font-normal text-white/35">
                    10 bags = 1 free wash
                  </span>
                  {/* Styled QR Code Box */}
                  <div className="h-10 w-10 border border-white/10 rounded-md bg-white/5 flex items-center justify-center p-1.5 opacity-55 hover:opacity-85 transition-opacity">
                    <QrCodeIcon className="h-full w-full text-white" />
                  </div>
                </div>
              </div>

              {/* Progress Note */}
              <div className="text-left px-1">
                <p className="font-sans text-sm font-semibold text-[#00C2A8] flex items-center gap-1.5">
                  <Sparkles className="h-4 w-4" />
                  {filledCount} of 10 bags completed
                </p>
                <p className="font-sans text-xs text-white/45 mt-1">
                  {emptyCount} more bags to your free wash
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 2 - HOW THE STREAK WORKS */}
      <section className="bg-white text-[#0A1628] py-20 md:py-[100px] px-4 md:px-20 border-t border-b border-[#F4F6F8]">
        <div className="max-w-[1440px] mx-auto text-center">
          <Reveal>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-[#00C2A8] mb-3">
              HOW IT WORKS
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-[48px] text-[#0A1628] leading-tight mb-4">
              Simple. Consistent. Rewarding.
            </h2>
            <p className="font-heading font-normal text-base md:text-lg text-[#0A1628]/55 max-w-2xl mx-auto mb-16 leading-relaxed">
              No apps to open. No points to track. Your driver stamps your card. You claim your reward.
            </p>
          </Reveal>

          {/* 4 Steps Section */}
          <div className="relative max-w-5xl mx-auto mb-16">
            {/* Dashed connector line for Desktop */}
            <div className="absolute top-[28px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-[#00C2A8]/30 hidden lg:block z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
              {[
                {
                  step: 1,
                  title: "Place your LOD order",
                  body: "Schedule a pickup at lodvalet.com. Choose your time window. We handle everything from there.",
                },
                {
                  step: 2,
                  title: "Your bag gets delivered back",
                  body: "Washed, folded, and delivered to your door within 24 hours. Every order, without exception.",
                },
                {
                  step: 3,
                  title: "Driver stamps your card",
                  body: "Your physical streak card gets stamped on every delivery. Your first card arrives with your first LOD order.",
                },
                {
                  step: 4,
                  title: "Claim at 10 bags",
                  body: "Choose a free Essential wash ($41.99 value) or $14.99 LOD credit. Applied instantly.",
                },
              ].map((item) => (
                <div key={item.step} className="flex flex-col items-center text-center">
                  <div className="h-14 w-14 rounded-full bg-[#00C2A8] text-white flex items-center justify-center font-heading font-bold text-[22px] mb-5 shadow-lg shadow-[#00C2A8]/20 select-none">
                    {item.step}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#0A1628] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-sans font-normal text-[15px] text-[#0A1628]/60 leading-relaxed max-w-[240px]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Resets Alert Card */}
          <Reveal className="max-w-[600px] mx-auto bg-[#00C2A8]/6 border border-[#00C2A8]/15 rounded-lg p-5">
            <p className="font-sans font-normal text-sm text-[#0A1628]/65 leading-relaxed">
              Your streak resets after you claim your reward and starts fresh immediately. Every 10 bags is a new cycle. There is no limit to how many times you can earn.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SECTION 3 - THE MILESTONE TIMELINE */}
      <section className="bg-[#F4F6F8] text-[#0A1628] py-20 md:py-[100px] px-4 md:px-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-[#00C2A8] mb-3">
              MILESTONES
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-[48px] text-[#0A1628] leading-tight mb-4">
              The longer you stay, the more you earn.
            </h2>
            <p className="font-heading font-normal text-base md:text-lg text-[#0A1628]/55 max-w-2xl mx-auto leading-relaxed">
              Streak milestones stack on top of your 10-bag reward. Every consistent LOD customer unlocks these.
            </p>
          </div>

          {/* Milestones Stack */}
          <div className="max-w-4xl mx-auto flex flex-col gap-4">
            {[
              {
                id: 1,
                title: "4 Weeks Active",
                body: "Place at least one order every two weeks for four weeks straight.",
                reward: "$2.00 LOD Credit",
                color: "#00C2A8",
                bgColor: "rgba(0,194,168,0.1)",
                borderColor: "rgba(0,194,168,0.25)",
                badgeBg: "rgba(0,194,168,0.08)",
                icon: <CalendarIcon className="h-8 w-8 text-[#00C2A8]" />,
              },
              {
                id: 2,
                title: "8 Weeks Active",
                body: "Keep your routine going for two months. Laundry becomes the last thing you think about.",
                reward: "Free Add-On Bundle",
                color: "#3B82F6",
                bgColor: "rgba(59,130,246,0.1)",
                borderColor: "rgba(59,130,246,0.25)",
                badgeBg: "rgba(59,130,246,0.08)",
                icon: <LightningIcon className="h-8 w-8 text-[#3B82F6]" />,
              },
              {
                id: 3,
                title: "10 Bags Completed",
                body: "The milestone every LOD customer works toward. 10 delivered bags = $14.99 LOD credit",
                reward: "$14.99 LOD Credit",
                color: "#00C2A8",
                bgColor: "rgba(0,194,168,0.06)",
                borderColor: "rgba(0,194,168,0.2)",
                badgeBg: "rgba(0,194,168,0.08)",
                icon: <GiftIcon className="h-10 w-10 text-[#00C2A8]" />,
                isMain: true,
              },
              {
                id: 4,
                title: "12 Weeks Active",
                body: "Three months of effortless Sundays. LOD rewards the habit.",
                reward: "1 Free Essential Bag",
                color: "#8B5CF6",
                bgColor: "rgba(139,92,246,0.1)",
                borderColor: "rgba(139,92,246,0.25)",
                badgeBg: "rgba(139,92,246,0.08)",
                icon: <StarIcon className="h-8 w-8 text-[#8B5CF6]" />,
              },
              {
                id: 5,
                title: "26 Weeks Active  Streak Legend",
                body: "Six months of LOD. You're not just a customer at this point. You're part of the story. Mailed to your door. A personal note from Hem.",
                reward: "Streak Legend Badge + Premium Gift",
                color: "#D4A843",
                bgColor: "rgba(212,168,67,0.05)",
                borderColor: "rgba(212,168,67,0.25)",
                badgeBg: "rgba(212,168,67,0.08)",
                icon: <TrophyIcon className="h-10 w-10 text-[#D4A843]" />,
              },
            ].map((m) => (
              <Reveal
                key={m.id}
                className={`w-full bg-white rounded-2xl p-7 md:py-7 md:px-8 border-l-[4px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] flex flex-col md:flex-row items-start md:items-center gap-6 transition-all duration-300 hover:shadow-md ${
                  m.isMain ? "scale-[1.02] border-l-[#00C2A8] bg-[#00C2A8]/4 border border-[#00C2A8]/20" : ""
                }`}
                style={{ borderLeftColor: m.color }}
              >
                {/* Milestone Badge Icon */}
                <div
                  className="h-16 w-16 md:h-[72px] md:w-[72px] rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: m.bgColor }}
                >
                  {m.icon}
                </div>

                {/* Content */}
                <div className="flex-grow min-w-0">
                  <p
                    className="font-sans text-[10px] font-semibold tracking-[0.12em] uppercase mb-1"
                    style={{ color: m.color }}
                  >
                    MILESTONE {m.id}
                  </p>
                  <h3 className="font-heading font-bold text-xl text-[#0A1628] mb-1">
                    {m.title}
                  </h3>
                  <p className="font-sans font-normal text-sm text-[#0A1628]/60 leading-relaxed">
                    {m.body}
                  </p>
                </div>

                {/* Reward Badge */}
                <div
                  className="font-heading font-bold text-sm border rounded-full px-5 py-2 whitespace-nowrap self-stretch md:self-auto flex items-center justify-center md:ml-auto"
                  style={{
                    color: m.color,
                    borderColor: m.borderColor,
                    backgroundColor: m.badgeBg,
                  }}
                >
                  {m.reward}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - CHOOSE YOUR REWARD */}
      <section className="bg-[#0A1628] py-20 md:py-[100px] px-4 md:px-20 text-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-[#00C2A8] mb-3">
              YOUR CHOICE
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-[48px] text-white leading-tight mb-4">
              You pick the reward.
            </h2>
            <p className="font-heading font-normal text-base md:text-lg text-white/65 max-w-2xl mx-auto leading-relaxed">
              When you hit 10 bags, the choice is yours. Set your preference now. Change it any time.
            </p>
          </div>

          {/* Cards Layout */}
          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto mb-10">
            {/* Card B */}
            <div className="bg-white/6 border border-white/12 rounded-[20px] p-8 md:p-10 flex flex-col items-center text-center">
              <div className="h-20 w-20 bg-[#00C2A8]/15 rounded-2xl flex items-center justify-center text-[#00C2A8] mb-6 shadow-inner select-none">
                <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10 text-[#00C2A8]" aria-hidden>
                  <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M20 14V26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M16 18H22C23.657 18 25 19.343 25 21C25 22.657 23.657 24 22 24H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>

              <h3 className="font-heading font-bold text-2xl text-white mb-2">
                $14.99 LOD Credit
              </h3>
              <p className="font-sans font-semibold text-sm text-[#00C2A8] mb-4">
                Applied to any order
              </p>
              <p className="font-sans font-normal text-[15px] text-white/60 leading-relaxed mb-6 flex-grow">
                Use it on any future LOD order. Stack it with other credits. No expiry. Apply it to add-ons, upgrades, or your next bag your call.
              </p>
              <div className="w-full border-t border-white/8 pt-4">
                <span className="font-sans text-xs font-medium uppercase tracking-wider text-white/35">
                  Most flexible choice
                </span>
              </div>
            </div>
          </div>

          <p className="font-sans font-normal text-sm text-white/35 text-center mb-8">
            Set your preference when you create your account.
          </p>

          <div className="flex justify-center">
            {user ? (
              <Link
                href="/account/streak"
                className="font-heading font-bold text-base bg-[#00C2A8] text-[#0A1628] px-10 py-4 rounded-lg hover:scale-[1.02] hover:brightness-95 active:scale-[0.98] transition-all text-center block w-full sm:w-auto"
              >
                View Your Streak →
              </Link>
            ) : (
              <Link
                href="/signup?redirect=/account/streak"
                className="font-heading font-bold text-base bg-[#00C2A8] text-[#0A1628] px-10 py-4 rounded-lg hover:scale-[1.02] hover:brightness-95 active:scale-[0.98] transition-all text-center block w-full sm:w-auto"
              >
                Create Your Account →
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 5 - PHYSICAL STREAK CARD */}
      <section className="bg-white text-[#0A1628] py-20 md:py-[100px] px-4 md:px-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-[#00C2A8] mb-3">
              THE PHYSICAL CARD
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-[48px] text-[#0A1628] leading-tight mb-4">
              A real card. A real stamp. Every time.
            </h2>
            <p className="font-heading font-normal text-base md:text-lg text-[#0A1628]/55 max-w-2xl mx-auto leading-relaxed">
              Your streak card arrives with your first LOD order. Your driver stamps it on every delivery. It&apos;s yours to keep.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
            {/* Left Column - Card Illustration */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-[420px] aspect-[3.5/2.5] bg-[#0A1628] rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-[0_16px_48px_rgba(0,0,0,0.20)] select-none text-white relative">
                {/* STREAK CARD Label & Wordmark */}
                <div className="flex items-start justify-between">
                  <span className="font-heading text-lg font-bold tracking-wider">LOD</span>
                  <span className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-white/35">
                    STREAK CARD
                  </span>
                </div>

                {/* 10 Circles Row (First 3 filled, remaining 7 empty outline) */}
                <div className="grid grid-cols-5 gap-3 justify-items-center">
                  {Array.from({ length: 10 }, (_, i) => {
                    const stepNumber = i + 1;
                    const isFilled = stepNumber <= 3;

                    return (
                      <div
                        key={stepNumber}
                        className={`h-[32px] w-[32px] rounded-full flex items-center justify-center border font-sans text-xs font-bold ${
                          isFilled
                            ? "bg-[#00C2A8] border-[#00C2A8] text-[#0A1628]"
                            : "bg-[#0A1628] border-white/20 text-white/30"
                        }`}
                      >
                        {isFilled ? <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} /> : stepNumber}
                      </div>
                    );
                  })}
                </div>

                {/* Card footer */}
                <div className="flex items-end justify-between">
                  <span className="font-sans text-[10px] text-white/35">
                    10 bags = 1 free wash
                  </span>
                  <div className="h-9 w-9 border border-white/10 rounded bg-white/5 flex items-center justify-center p-1 opacity-50">
                    <QrCodeIcon className="h-full w-full text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Feature Points */}
            <div className="lg:col-span-6 flex flex-col gap-8">
              {[
                {
                  icon: <DeliveryBoxIcon />,
                  title: "Delivered with your first order",
                  body: "Your LOD Starter Kit includes your streak card. No need to download anything or register anywhere. It shows up at your door.",
                },
                {
                  icon: <StampIcon />,
                  title: "Your driver stamps it every time",
                  body: "On every delivery your driver physically stamps your card before handing it over. No scanning required. No app needed.",
                },
                {
                  icon: <QrCodeIcon />,
                  title: "Link it to your account",
                  body: "Scan the QR code on your card once to sync it to your LOD account. From that point your digital streak and physical card stay in sync.",
                },
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-4 text-left">
                  <div className="h-12 w-12 rounded-full bg-[#00C2A8]/10 text-[#00C2A8] flex items-center justify-center shrink-0">
                    {point.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-heading font-bold text-lg text-[#0A1628] mb-1">
                      {point.title}
                    </h3>
                    <p className="font-sans font-normal text-sm text-[#0A1628]/60 leading-relaxed">
                      {point.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 - COMPARISON: LOD VS OTHERS */}
      <section className="bg-[#F4F6F8] text-[#0A1628] py-20 md:py-[100px] px-4 md:px-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-[#00C2A8] mb-3">
              WHY IT&apos;S DIFFERENT
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-[48px] text-[#0A1628] leading-tight mb-4">
              Not points. Not tiers. Just free washes.
            </h2>
            <p className="font-heading font-normal text-base md:text-lg text-[#0A1628]/55 max-w-2xl mx-auto leading-relaxed">
              Most loyalty programs make you work for rewards you never actually use. LOD keeps it simple.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] bg-white border border-[#F4F6F8]">
            {/* Headers */}
            <div className="grid grid-cols-12 border-b border-[#F4F6F8] items-stretch text-left">
              <div className="col-span-5 p-5 md:p-6 bg-white font-heading font-bold text-[#0A1628]" />
              <div className="col-span-3 p-5 md:p-6 bg-[#F4F6F8]/50 flex items-center justify-center text-center">
                <span className="font-sans font-bold text-xs md:text-sm text-[#6B7280]">
                  Most Programs
                </span>
              </div>
              <div className="col-span-4 p-5 md:p-6 bg-[#0A1628] flex flex-col items-center justify-center text-center border-b-2 border-[#00C2A8]">
                <span className="font-sans font-bold text-xs md:text-sm text-white">
                  LOD Streak
                </span>
              </div>
            </div>

            {/* Rows */}
            {[
              {
                feature: "Points required",
                other: "✗ Complex point systems",
                lod: "✓ Just bags  count to 10",
              },
              {
                feature: "Reward expiry",
                other: "✗ Points expire in 30–90 days",
                lod: "✓ No expiry. Ever.",
              },
              {
                feature: "Minimum spend to earn",
                other: "✗ Spend thresholds required",
                lod: "✓ Every single order counts",
              },
              {
                feature: "Reward clarity",
                other: "✗ Unclear what your points are worth",
                lod: "✓ 10 bags = free wash. Always.",
              },
              {
                feature: "Physical reward",
                other: "✗ App-only, easily forgotten",
                lod: "✓ Physical card + digital sync",
              },
              {
                feature: "Choice of reward",
                other: "✗ Locked into one option",
                lod: "✓ Free wash or cash credit  you choose",
              },
            ].map((row, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="grid grid-cols-12 items-stretch border-b border-[#F4F6F8] last:border-0 text-left">
                  {/* Feature */}
                  <div className={`col-span-5 p-5 md:p-6 font-sans text-sm font-semibold text-[#0A1628] flex items-center ${
                    isEven ? "bg-[#F4F6F8]/20" : "bg-white"
                  }`}>
                    {row.feature}
                  </div>
                  {/* Other */}
                  <div className={`col-span-3 p-5 md:p-6 font-sans text-sm text-[#EF4444] text-center flex items-center justify-center ${
                    isEven ? "bg-[#F4F6F8]/40" : "bg-[#F4F6F8]/20"
                  }`}>
                    {row.other}
                  </div>
                  {/* LOD */}
                  <div className="col-span-4 p-5 md:p-6 font-sans text-sm text-[#10B981] text-center bg-[#0A1628] text-white flex items-center justify-center font-medium">
                    {row.lod}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 7 - FAQ */}
      <section className="bg-white text-[#0A1628] py-20 md:py-[100px] px-4 md:px-20 border-t border-b border-[#F4F6F8]">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#0A1628] mb-10 text-center">
              Common questions about the streak program
            </h2>

            <div className="flex flex-col border-t border-[#F4F6F8] mt-8">
              {faqs.map((faq, index) => (
                <FAQAccordionItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFAQ === index}
                  onToggle={() => toggleFAQ(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 - FINAL CTA */}
      <section className="bg-[#0A1628] py-20 md:py-[120px] px-4 md:px-20 text-center text-white relative">
        {/* Glow Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00C2A8]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="font-heading font-bold text-4xl md:text-[52px] text-white leading-tight mb-4">
            Your first stamp is one order away.
          </h2>
          <p className="font-heading font-normal text-lg md:text-xl text-white/65 mb-10">
            Every LOD order counts. Start today.
          </p>

          {/* 10-Bag Visual (Simplified empty outlines) */}
          <div className="flex flex-col items-center gap-3 mb-10">
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-md">
              {Array.from({ length: 10 }, (_, i) => (
                <div
                  key={i}
                  className="h-9 w-9 rounded-full border border-white/25 flex items-center justify-center font-sans text-xs font-bold text-white/30 bg-white/5 select-none"
                >
                  {i + 1}
                </div>
              ))}
            </div>
            <span className="font-sans text-xs text-white/35">
              10 bags to your first free wash
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col items-center gap-4">
            {user ? (
              <>
                <Link
                  href="/account/streak"
                  className="font-heading font-bold text-base bg-[#00C2A8] text-[#0A1628] px-12 py-4 rounded-lg hover:scale-[1.02] hover:brightness-95 active:scale-[0.98] transition-all text-center block w-full sm:w-auto"
                >
                  View Your Streak →
                </Link>
                <Link
                  href="/account"
                  className="font-heading font-normal text-sm text-white/45 hover:text-white transition-colors mt-2"
                >
                  Already have an account? View your dashboard →
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/signup?redirect=/account/streak"
                  className="font-heading font-bold text-base bg-[#00C2A8] text-[#0A1628] px-12 py-4 rounded-lg hover:scale-[1.02] hover:brightness-95 active:scale-[0.98] transition-all text-center block w-full sm:w-auto"
                >
                  Start Your Streak Today →
                </Link>
                <Link
                  href="/login?redirect=/account/streak"
                  className="font-heading font-normal text-sm text-white/45 hover:text-white transition-colors mt-2"
                >
                  Already have an account? View your streak →
                </Link>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
