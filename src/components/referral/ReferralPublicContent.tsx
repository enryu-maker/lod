"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Copy, Check, Users, Gift, DollarSign, Heart, Briefcase, GraduationCap, Home, MessageSquare } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import { appleEase } from "@/lib/motion";
import { useAuthUser } from "@/hooks/useAuthUser";

// Local inline SVG Icons
function ShareIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}

function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.885.522 3.654 1.436 5.178L2.05 21.95l4.908-1.288A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 1.5c4.687 0 8.5 3.813 8.5 8.5S16.687 20.5 12 20.5c-1.636 0-3.172-.464-4.488-1.27l-.322-.198-2.906.763.777-2.836-.217-.346C4.05 15.253 3.5 13.69 3.5 12c0-4.687 3.813-8.5 8.5-8.5zm-3.81 4.296c-.15 0-.308.016-.447.067-.14.05-.291.133-.42.278-.233.26-.51.642-.51 1.258s.45 1.21.51 1.292c.067.083.868 1.373 2.11 1.91.295.127.526.202.705.26.297.094.567.08.78.048.238-.035.733-.3.834-.59.1-.292.1-.54.07-.59-.033-.05-.116-.083-.25-.15l-1.183-.583c-.14-.067-.24-.033-.324.083l-.5.626c-.083.1-.183.116-.316.05-.133-.067-.56-.206-1.066-.658-.393-.35-.658-.784-.735-.917-.077-.133-.008-.205.059-.272.06-.06.133-.15.2-.225.066-.083.09-.14.133-.24.043-.1.022-.183-.01-.25L7.8 7.996c-.098-.242-.206-.2-.303-.2a3.86 3.86 0 0 0-.107-.001z"/>
    </svg>
  );
}

function EmailIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function FAQAccordionItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
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

export default function ReferralPublicContent() {
  const { user, profile } = useAuthUser();
  
  // Interactive Math Calculator states
  const [friendsCount, setFriendsCount] = useState<number>(10);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const referralCode = profile?.referralCode || "YOURCODE";
  const publicReferralLink = `lodvalet.com/r/${referralCode}`;

  // Math variables
  const creditEarned = friendsCount * 5;
  const bagsCoveredVal = creditEarned / 41.99;
  const bagsCoveredStr = bagsCoveredVal >= 1 
    ? `${Math.floor(bagsCoveredVal)} full Essential bag${Math.floor(bagsCoveredVal) > 1 ? "s" : ""} on us` 
    : `${(bagsCoveredVal * 100).toFixed(0)}% of an Essential bag covered`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`https://${publicReferralLink}`);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch {
      // fallback
    }
  };

  const handleShare = (type: "text" | "whatsapp" | "email") => {
    const textMsg = `Hey! I've been using LOD for laundry pickup in Boston. They pick up, wash, fold, and deliver back. Your first bag is completely free. Check it out: https://${publicReferralLink}`;
    if (type === "whatsapp") {
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(textMsg)}`, "_blank");
    } else if (type === "email") {
      window.open(`mailto:?subject=${encodeURIComponent("Free Laundry Bag from LOD")}&body=${encodeURIComponent(textMsg)}`, "_blank");
    } else {
      // Text SMS
      window.open(`sms:?&body=${encodeURIComponent(textMsg)}`, "_blank");
    }
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "Does my friend need to use a credit card to get their free bag?",
      answer: "No. LOD requires a payment method on file for future orders, but their first order is completely free. They will not be charged for it. They pay nothing for their first bag.",
    },
    {
      question: "When does my $5 credit arrive?",
      answer: "Automatically within 24 hours of your friend's first order being delivered. You do not need to do anything. It appears in your LOD account and is ready to use immediately.",
    },
    {
      question: "Is there a limit to how many people I can refer?",
      answer: "No limit. Refer 1 person or 100 people. Each successful referral earns you $5 in credit. Credits stack in your account indefinitely and never expire.",
    },
    {
      question: "What if my friend already has a LOD account?",
      answer: "The referral credit applies only to new LOD customers who have never placed an order before. If your friend already has an account, the referral will not count toward your credit.",
    },
    {
      question: "Does my referral link expire?",
      answer: "Your unique referral link never expires as long as your LOD account is active. Share it once or share it every week. It always works.",
    },
  ];

  // FAQ Schema
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
          <div className="lg:col-span-7 flex flex-col items-start text-left relative z-10">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center bg-[#00C2A8]/12 border border-[#00C2A8]/25 rounded-full px-4 py-1.5 mb-6">
              <span className="font-sans text-[11px] font-semibold tracking-[0.12em] text-[#00C2A8]">
                REFERRAL PROGRAM
              </span>
            </div>

            <h1 className="font-heading font-bold text-4xl md:text-[64px] text-white leading-[1.0] tracking-tight mb-5">
              Give a free bag. Earn $5.
            </h1>

            <p className="font-heading font-normal text-base md:text-xl text-white/65 leading-[1.65] max-w-[500px] mb-10">
              Share LOD with a friend. They get their first bag completely free  no credit card needed. You earn $5 the moment their first order is delivered.
            </p>

            {/* Two Side-by-Side Reward Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl mb-10">
              {/* Card A */}
              <div className="bg-white/6 border border-white/12 rounded-2xl p-5 md:p-6 text-left flex flex-col gap-2">
                <Gift className="h-8 w-8 text-[#00C2A8]" />
                <span className="font-sans text-[11px] font-semibold tracking-[0.1em] text-white/35 uppercase mt-1">
                  YOUR FRIEND GETS
                </span>
                <p className="font-heading font-bold text-xl text-white">
                  First bag free
                </p>
                <p className="font-sans text-[13px] text-white/45">
                  No credit card needed
                </p>
              </div>

              {/* Card B */}
              <div className="bg-[#00C2A8]/12 border border-[#00C2A8]/30 rounded-2xl p-5 md:p-6 text-left flex flex-col gap-2">
                <DollarSign className="h-8 w-8 text-[#00C2A8]" />
                <span className="font-sans text-[11px] font-semibold tracking-[0.1em] text-white/35 uppercase mt-1">
                  YOU GET
                </span>
                <p className="font-heading font-bold text-xl text-white">
                  $5 LOD credit
                </p>
                <p className="font-sans text-[13px] text-white/45">
                  When they complete first order
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              {user ? (
                <>
                  <Link
                    href="/account/referrals"
                    className="font-heading font-bold text-base bg-[#00C2A8] text-[#0A1628] px-8 py-4 rounded-lg hover:scale-[1.02] hover:brightness-95 active:scale-[0.98] transition-all text-center"
                  >
                    View Your Referrals →
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
                    href="/signup?redirect=/account/referrals"
                    className="font-heading font-bold text-base bg-[#00C2A8] text-[#0A1628] px-8 py-4 rounded-lg hover:scale-[1.02] hover:brightness-95 active:scale-[0.98] transition-all text-center"
                  >
                    Create Account to Start Referring →
                  </Link>
                  <Link
                    href="/login?redirect=/account/referrals"
                    className="font-heading font-normal text-[15px] text-white/55 hover:text-white px-4 py-2 transition-colors text-center"
                  >
                    Already have an account? Get your link →
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Right Column - Watermark and Preview Card */}
          <div className="lg:col-span-5 flex justify-center relative min-h-[300px]">
            {/* Stylized "$5" Watermark */}
            <span className="absolute -right-4 top-1/2 -translate-y-1/2 font-heading font-extrabold text-[200px] leading-none text-[#00C2A8]/10 select-none pointer-events-none hidden lg:block">
              $5
            </span>

            {/* Referral Link Preview Card */}
            <div className="w-full max-w-[360px] bg-white/6 border border-white/12 rounded-[20px] p-6 md:p-7 flex flex-col gap-6 shadow-2xl relative z-10 self-center">
              <div className="text-left">
                <span className="font-sans text-[11px] font-semibold tracking-wider text-white/35 uppercase">
                  YOUR REFERRAL LINK
                </span>
                {/* Link Box */}
                <div className="mt-3 bg-[#00C2A8]/6 border border-[#00C2A8]/20 rounded-lg p-3.5 flex items-center justify-between gap-3">
                  <span className="font-sans text-sm font-normal text-[#00C2A8] truncate monospace select-all">
                    {publicReferralLink}
                  </span>
                  <button
                    onClick={copyToClipboard}
                    className="bg-[#00C2A8] hover:bg-[#00C2A8]/90 text-[#0A1628] font-sans font-bold text-xs rounded-md px-3.5 py-2 flex items-center gap-1.5 transition-all select-none cursor-pointer shrink-0"
                  >
                    {copiedLink ? (
                      <>
                        <Check className="h-3.5 w-3.5" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Share Row */}
              <div className="text-left">
                <span className="font-sans text-[11px] font-semibold tracking-wider text-white/35 uppercase block mb-3">
                  SHARE QUICK LINKS
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => handleShare("text")}
                    className="flex items-center gap-1.5 border border-white/20 rounded-md px-3.5 py-2 font-sans font-medium text-xs text-white hover:bg-white/5 transition-all cursor-pointer"
                  >
                    <PhoneIcon className="h-3.5 w-3.5 text-white/60" />
                    <span>Text</span>
                  </button>
                  <button
                    onClick={() => handleShare("whatsapp")}
                    className="flex items-center gap-1.5 border border-white/20 rounded-md px-3.5 py-2 font-sans font-medium text-xs text-white hover:bg-white/5 transition-all cursor-pointer"
                  >
                    <WhatsAppIcon className="h-3.5 w-3.5 text-white/60" />
                    <span>WhatsApp</span>
                  </button>
                  <button
                    onClick={() => handleShare("email")}
                    className="flex items-center gap-1.5 border border-white/20 rounded-md px-3.5 py-2 font-sans font-medium text-xs text-white hover:bg-white/5 transition-all cursor-pointer"
                  >
                    <EmailIcon className="h-3.5 w-3.5 text-white/60" />
                    <span>Email</span>
                  </button>
                </div>
              </div>

              {/* Note Below Card */}
              {!user && (
                <div className="border-t border-white/8 pt-4">
                  <p className="font-sans text-[11.5px] font-normal text-white/30 text-center">
                    Sign in or create an account to get your real link
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - HOW IT WORKS */}
      <section className="bg-white text-[#0A1628] py-20 md:py-[100px] px-4 md:px-20 border-t border-b border-[#F4F6F8]">
        <div className="max-w-[1440px] mx-auto text-center">
          <Reveal>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-[#00C2A8] mb-3">
              HOW IT WORKS
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-[48px] text-[#0A1628] leading-tight mb-4">
              Three steps. Two people win.
            </h2>
            <p className="font-heading font-normal text-base md:text-lg text-[#0A1628]/55 max-w-2xl mx-auto mb-16 leading-relaxed">
              Sharing LOD takes 10 seconds. The payoff is automatic.
            </p>
          </Reveal>

          {/* Three Steps Grid */}
          <div className="relative max-w-5xl mx-auto mb-16">
            {/* Connector Line */}
            <div className="absolute top-[160px] left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-[#00C2A8]/30 hidden lg:block z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10 items-stretch">
              {/* Step 1 */}
              <div className="bg-[#F4F6F8] rounded-[20px] p-8 md:p-10 flex flex-col items-center text-center shadow-[0_4px_12px_rgba(0,0,0,0.02)] max-w-md mx-auto lg:max-w-none w-full">
                <span className="font-heading font-bold text-4xl md:text-[48px] text-[#00C2A8]/20 leading-none mb-4">
                  01
                </span>
                <div className="h-16 w-16 rounded-2xl bg-white shadow-[0_4px_16px_rgba(0,0,0,0.06)] flex items-center justify-center text-[#00C2A8] mb-6 select-none shrink-0">
                  <ShareIcon className="h-7 w-7" />
                </div>
                <h3 className="font-heading font-bold text-[22px] text-[#0A1628] mb-3 leading-snug">
                  Share your unique link
                </h3>
                <p className="font-sans font-normal text-base text-[#0A1628]/60 leading-relaxed">
                  Every LOD account gets a unique referral link. Share it by text, WhatsApp, email, or post it anywhere. It takes 10 seconds.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-[#F4F6F8] rounded-[20px] p-8 md:p-10 flex flex-col items-center text-center shadow-[0_4px_12px_rgba(0,0,0,0.02)] max-w-md mx-auto lg:max-w-none w-full">
                <span className="font-heading font-bold text-4xl md:text-[48px] text-[#00C2A8]/20 leading-none mb-4">
                  02
                </span>
                <div className="h-16 w-16 rounded-2xl bg-white shadow-[0_4px_16px_rgba(0,0,0,0.06)] flex items-center justify-center text-[#00C2A8] mb-6 select-none shrink-0">
                  <Gift className="h-7 w-7" />
                </div>
                <h3 className="font-heading font-bold text-[22px] text-[#0A1628] mb-3 leading-snug">
                  Friend gets free bag
                </h3>
                <p className="font-sans font-normal text-base text-[#0A1628]/60 leading-relaxed">
                  When your friend signs up using your link, their first LOD order is completely free. No credit card needed to claim it. Your link handles everything.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-[#F4F6F8] rounded-[20px] p-8 md:p-10 flex flex-col items-center text-center shadow-[0_4px_12px_rgba(0,0,0,0.02)] max-w-md mx-auto lg:max-w-none w-full">
                <span className="font-heading font-bold text-4xl md:text-[48px] text-[#00C2A8]/20 leading-none mb-4">
                  03
                </span>
                <div className="h-16 w-16 rounded-2xl bg-white shadow-[0_4px_16px_rgba(0,0,0,0.06)] flex items-center justify-center text-[#00C2A8] mb-6 select-none shrink-0">
                  <DollarSign className="h-7 w-7" />
                </div>
                <h3 className="font-heading font-bold text-[22px] text-[#0A1628] mb-3 leading-snug">
                  You earn $5
                </h3>
                <p className="font-sans font-normal text-base text-[#0A1628]/60 leading-relaxed">
                  The moment their first paid order is delivered, $5 LOD credit lands in your account. No forms. No follow-up. Just automatic credit.
                </p>
              </div>
            </div>
          </div>

          {/* Terms Note */}
          <div className="max-w-[600px] mx-auto mt-12 px-4">
            <p className="font-sans font-normal text-[13px] text-[#6B7280] leading-relaxed text-center">
              * $5 credit applies when your referred friend completes their first paid order. Credit added within 24 hours of delivery confirmation. No limit on how many friends you can refer.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 - THE MATH (INTERACTIVE CALCULATOR) */}
      <section className="bg-[#F4F6F8] text-[#0A1628] py-20 md:py-[100px] px-4 md:px-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-[#00C2A8] mb-3">
              THE MATH
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-[48px] text-[#0A1628] leading-tight mb-4">
              Think about what this actually means.
            </h2>
            <p className="font-heading font-normal text-base md:text-lg text-[#0A1628]/55 max-w-2xl mx-auto leading-relaxed">
              If you have friends who need laundry done  and almost everyone does  this adds up fast.
            </p>
          </div>

          {/* Calculator Box */}
          <div className="max-w-xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-[#F4F6F8]">
            <div className="flex flex-col gap-6">
              {/* Slider Input */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <span className="font-sans font-semibold text-sm text-[#0A1628]/60 uppercase">
                    Friends you refer
                  </span>
                  <span className="font-heading font-bold text-2xl text-[#0A1628]">
                    {friendsCount} friends
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={friendsCount}
                  onChange={(e) => setFriendsCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-[#F4F6F8] rounded-lg appearance-none cursor-pointer accent-[#00C2A8]"
                />
              </div>

              <div className="h-[1px] w-full bg-[#F4F6F8]" />

              {/* Rows */}
              <div className="flex flex-col gap-4 text-left">
                <div className="flex justify-between items-center">
                  <span className="font-sans text-base text-[#0A1628]/70">Credit you earn</span>
                  <span className="font-heading font-bold text-xl text-[#00C2A8]">
                    ${creditEarned}.00
                  </span>
                </div>
                <div className="flex justify-between items-start gap-4">
                  <span className="font-sans text-base text-[#0A1628]/70">That&apos;s LOD orders covered</span>
                  <div className="text-right">
                    <span className="font-heading font-bold text-base text-[#0A1628] block">
                      {bagsCoveredStr}
                    </span>
                    <span className="font-sans text-xs text-[#6B7280]">
                      After your referral credits
                    </span>
                  </div>
                </div>
              </div>

              <div className="h-[1px] w-full bg-[#F4F6F8]" />

              {/* Totals */}
              <div className="flex justify-between items-center text-left">
                <span className="font-heading font-bold text-lg text-[#0A1628]">
                  Total value you&apos;ve created
                </span>
                <span className="font-heading font-bold text-[28px] text-[#0A1628]">
                  ${creditEarned}
                </span>
              </div>

              {/* Dynamic SVGs visual bar */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 bg-[#F4F6F8]/60 rounded-xl p-4 mt-2 max-h-[120px] overflow-y-auto">
                {Array.from({ length: Math.min(friendsCount, 25) }, (_, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="flex flex-col items-center gap-0.5 shrink-0"
                  >
                    <Users className="h-6 w-6 text-[#00C2A8]" />
                    <span className="font-sans text-[9px] font-bold text-[#00C2A8] leading-none">$5</span>
                  </motion.div>
                ))}
                {friendsCount > 25 && (
                  <span className="font-sans text-xs font-bold text-[#00C2A8] ml-2 shrink-0">
                    +{friendsCount - 25} more!
                  </span>
                )}
              </div>
            </div>
          </div>

          <p className="font-sans font-normal text-sm text-[#6B7280] text-center mt-8 max-w-lg mx-auto">
            No limit. Refer as many people as you want. Credits stack in your account indefinitely.
          </p>
        </div>
      </section>

      {/* SECTION 4 - WHO CAN YOU REFER? */}
      <section className="bg-white text-[#0A1628] py-20 md:py-[100px] px-4 md:px-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-[#00C2A8] mb-3">
              WHO TO REFER
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-[48px] text-[#0A1628] leading-tight mb-4">
              Anyone in Boston who does laundry.
            </h2>
            <p className="font-heading font-normal text-base md:text-lg text-[#0A1628]/55 max-w-2xl mx-auto leading-relaxed">
              Which is everyone. Think about the people in your life.
            </p>
          </div>

          {/* Grid of Persona Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: <Briefcase className="h-8 w-8 text-[#00C2A8]" />,
                title: "Your coworkers",
                body: "Boston professionals who lose their Sundays to laundry. They'll thank you for this one.",
              },
              {
                icon: <GraduationCap className="h-8 w-8 text-[#00C2A8]" />,
                title: "Students in your life",
                body: "BU, Northeastern, Harvard, MIT  college students with no time and shared laundry machines.",
              },
              {
                icon: <Home className="h-8 w-8 text-[#00C2A8]" />,
                title: "Your neighbors",
                body: "Anyone in Back Bay, Brookline, Fenway, Mission Hill, or Longwood will thank you.",
              },
              {
                icon: <Heart className="h-8 w-8 text-[#00C2A8]" />,
                title: "Your partner",
                body: "Convince the person you live with. Laundry arguments disappear when LOD handles it.",
              },
              {
                icon: <Users className="h-8 w-8 text-[#00C2A8]" />,
                title: "Family nearby",
                body: "Parents, siblings, or anyone else in Boston who could use their time back.",
              },
              {
                icon: <MessageSquare className="h-8 w-8 text-[#00C2A8]" />,
                title: "Anyone you've texted today",
                body: "Your link works for anyone in our service zones. If they're in Boston, they qualify.",
              },
            ].map((persona, index) => (
              <div
                key={index}
                className="bg-[#F4F6F8] rounded-2xl p-7 md:p-8 flex flex-col items-center text-center shadow-[0_2px_10px_rgba(0,0,0,0.01)] transition-all hover:scale-[1.01] max-w-md mx-auto md:max-w-none w-full"
              >
                <div className="h-16 w-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-5 shrink-0">
                  {persona.icon}
                </div>
                <h3 className="font-heading font-bold text-lg text-[#0A1628] mb-2 leading-snug">
                  {persona.title}
                </h3>
                <p className="font-sans font-normal text-sm text-[#0A1628]/60 leading-relaxed">
                  {persona.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 - LEADERBOARD PREVIEW */}
      <section className="bg-[#0A1628] py-20 md:py-[100px] px-4 md:px-20 text-white">
        <div className="max-w-[1440px] mx-auto text-center">
          <Reveal>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-[#D4A843] mb-3">
              BOSTON LEADERBOARD
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-[48px] text-white leading-tight mb-4">
              Boston&apos;s top referrers win big.
            </h2>
            <p className="font-heading font-normal text-base md:text-lg text-white/65 max-w-2xl mx-auto mb-16 leading-relaxed">
              Every month, the LOD customer who refers the most people wins LOD Insider for a full year.
            </p>
          </Reveal>

          {/* LOD Insider Value Box */}
          <Reveal className="max-w-xl mx-auto bg-[#D4A843]/10 border border-[#D4A843]/25 rounded-2xl p-6 md:p-10 mb-16 text-left">
            <span className="font-sans text-[11px] font-semibold tracking-[0.1em] text-[#D4A843] uppercase block mb-4">
              LOD INSIDER  $24.99/YEAR VALUE
            </span>
            <div className="flex flex-col gap-4">
              {[
                "12% off every single bag order",
                "Free Express upgrade once per month",
                "Priority scheduling always",
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full bg-[#D4A843] text-[#0A1628] flex items-center justify-center shrink-0">
                    <Check className="h-3 w-3 text-[#0A1628]" strokeWidth={4} />
                  </div>
                  <span className="font-sans text-sm md:text-base font-normal text-white">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Leaderboard Preview Rows */}
          <div className="max-w-xl mx-auto text-left mb-10">
            <span className="font-sans text-[11px] font-semibold tracking-wider text-white/35 uppercase block mb-4 text-center">
              THIS MONTH&apos;S LEADERS
            </span>

            <div className="flex flex-col gap-2.5">
              {[
                { rank: 1, medal: "🥇", name: "Sarah M.", neighborhood: "Back Bay", count: 14, leading: true },
                { rank: 2, medal: "🥈", name: "Marcus T.", neighborhood: "Brookline", count: 11 },
                { rank: 3, medal: "🥉", name: "Priya K.", neighborhood: "Fenway", count: 9 },
              ].map((row) => (
                <div
                  key={row.rank}
                  className="bg-white/4 border border-white/6 rounded-xl p-4 md:px-5 flex items-center gap-4 transition-all hover:bg-white/6"
                >
                  <span className="font-sans text-xl select-none shrink-0">{row.medal}</span>
                  <div className="flex-grow min-w-0">
                    <h4 className="font-heading font-bold text-sm md:text-base text-white truncate">
                      {row.name}
                    </h4>
                    <p className="font-sans text-xs text-white/45">
                      {row.neighborhood}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    {row.leading && (
                      <span className="bg-[#D4A843] text-[#0A1628] font-sans font-bold text-[9px] uppercase tracking-wider rounded px-2 py-0.5 select-none">
                        LEADING
                      </span>
                    )}
                    <span className="font-sans text-xs md:text-sm font-semibold text-[#00C2A8]">
                      {row.count} referrals
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="font-sans text-[11px] font-normal text-white/25 text-center mt-4 italic">
              * Illustrative examples. Real leaderboard visible to members who opt in. First Wednesday of each month.
            </p>

            {/* Announcement Note */}
            <div className="max-w-[400px] mx-auto bg-[#00C2A8]/8 border border-[#00C2A8]/20 rounded-lg p-3 mt-8 text-center">
              <p className="font-sans text-sm font-normal text-[#00C2A8]">
                Winner announced every first Wednesday of the month.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <Link
              href="/signup?redirect=/account/referrals"
              className="font-heading font-bold text-base bg-[#D4A843] text-[#0A1628] px-10 py-4 rounded-lg hover:scale-[1.02] hover:brightness-95 active:scale-[0.98] transition-all text-center block w-full sm:w-auto shadow-lg shadow-[#D4A843]/10"
            >
              Join LOD to Start Competing →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6 - FAQ */}
      <section className="bg-white text-[#0A1628] py-20 md:py-[100px] px-4 md:px-20 border-t border-b border-[#F4F6F8]">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#0A1628] mb-10 text-center">
              Referral program questions
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

      {/* SECTION 7 - FINAL CTA */}
      <section className="bg-[#0A1628] py-20 md:py-[120px] px-4 md:px-20 text-center text-white relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00C2A8]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="font-heading font-bold text-4xl md:text-[52px] text-white leading-tight mb-4">
            Your friend is waiting for this.
          </h2>
          <p className="font-heading font-normal text-lg md:text-xl text-white/65 mb-10 max-w-xl mx-auto leading-relaxed">
            Create a free account. Get your link. Send it. Done in under 60 seconds.
          </p>

          {/* Referral Link Preview (Disabled/Placeholder style) */}
          <div className="w-full max-w-[400px] mx-auto bg-white/4 border border-white/8 rounded-2xl p-6 flex flex-col gap-4 text-left mb-10 shadow-lg">
            <span className="font-sans text-[11px] font-semibold tracking-wider text-white/35 uppercase select-none">
              REFERRAL LINK PREVIEW
            </span>
            <div className="bg-[#00C2A8]/6 border border-[#00C2A8]/10 rounded-lg p-3.5 flex items-center justify-between gap-3 select-none">
              <span className="font-sans text-sm font-normal text-[#00C2A8]/60 truncate monospace">
                {publicReferralLink}
              </span>
              <button
                disabled
                className="bg-[#00C2A8]/20 text-[#0A1628]/40 font-sans font-bold text-xs rounded-md px-3.5 py-2 cursor-not-allowed shrink-0 select-none"
              >
                Copy
              </button>
            </div>
            <p className="font-sans text-xs text-white/30 text-center mt-1">
              Create your account to get your real link
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col items-center gap-4">
            {user ? (
              <>
                <Link
                  href="/account/referrals"
                  className="font-heading font-bold text-base bg-[#00C2A8] text-[#0A1628] px-12 py-4 rounded-lg hover:scale-[1.02] hover:brightness-95 active:scale-[0.98] transition-all text-center block w-full sm:w-auto"
                >
                  View Your Referrals →
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
                  href="/signup?redirect=/account/referrals"
                  className="font-heading font-bold text-base bg-[#00C2A8] text-[#0A1628] px-12 py-4 rounded-lg hover:scale-[1.02] hover:brightness-95 active:scale-[0.98] transition-all text-center block w-full sm:w-auto"
                >
                  Create Your Account  It&apos;s Free →
                </Link>
                <Link
                  href="/login?redirect=/account/referrals"
                  className="font-heading font-normal text-sm text-white/45 hover:text-white transition-colors mt-2"
                >
                  Already have an account? View your referrals →
                </Link>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
