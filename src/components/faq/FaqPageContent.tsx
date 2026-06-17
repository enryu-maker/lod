"use client";

import React, { useState, useMemo } from "react";
import { Search, ChevronDown, HelpCircle } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { appleEase } from "@/lib/motion";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQCategory = {
  id: string;
  name: string;
  items: FAQItem[];
};

function FAQRow({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  const reduceMotion = useReducedMotion();
  return (
    <div className="border-b border-outline/10 py-5 text-left">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left focus:outline-none group cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="font-heading font-semibold text-lg text-white group-hover:text-[#00C2A8] transition-colors pr-6">
          {item.question}
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
            <p className="font-heading font-normal text-base text-white/65 leading-relaxed pt-3">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqPageContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const categories: FAQCategory[] = useMemo(() => [
    {
      id: "service",
      name: "Service & Delivery",
      items: [
        {
          question: "What happens if I'm not home?",
          answer:
            "If you're not home, just leave your LOD bag at your door. Your driver will pick it up and we'll text you the moment it's collected. Most of our customers never have to be there it just handles itself.",
        },
        {
          question: "Do you mix my clothes with others?",
          answer:"Never. Every LOD order is processed separately at our partner facility. Your clothes are always in your own bag. Zero tolerance for mixing.",
        },

        {
          question: "What detergents do you use?",
          answer:
            "Every order includes LOD Fresh standard detergent. You can upgrade to premium pods (Tide or Persil), hypoallergenic formula, or choose from our add-on bundles at checkout.",
        },
        {
          question: "Is there a delivery fee?",
          answer:
            "No. Free pickup and free delivery is included in every single order. The price you see is the price you pay.",
        },
      ],
    },
    {
      id: "cleaning",
      name: "Cleaning & Care",
      items: [
        {
          question: "Do you mix my clothes with others?",
          answer:
            "Never. Every customer order is washed, dried, and folded separately in its own dedicated state-of-the-art machine. We guarantee 100% individual processing for hygiene and care.",
        },
        {
          question: "What detergents do you use?",
          answer:
            "We use premium, hypoallergenic, and eco-friendly detergents by default. If you have special requests or prefer scented/unscented, you can configure your preferences directly in your profile.",
        },
        {
          question: "What items are prohibited?",
          answer:
            "We do not accept items requiring special dry-cleaning solvents, hazardous materials (saturated in oils, chemicals, or biohazards), or specialty materials like heavy leather and furs. Review our Prohibited Items policy page for a comprehensive list.",
        },
      ],
    },
    {
      id: "pricing",
      name: "Pricing & Payments",
      items: [
        {
          question: "How much does it cost?",
          answer:
            "We charge flat rates per bag: Essential (Next-day) is $41.99, Express (Same-day) is $53.49, and Rush (6-hour) is $64.99. No weight-guessing or hidden fees.",
        },
        {
          question: "Are there any hidden fees or surcharges?",
          answer:
            "Absolutely not. There are no fuel charges, service surcharges, or delivery fees. Tax is included where applicable. The flat-rate bag price covers everything.",
        },
      ],
    },
    {
      id: "streak",
      name: "Streak Program",
      items: [
        {
          question: "Do I need to do anything to start my streak?",
          answer:
            "No. Your streak starts automatically when you place your first LOD order. Your streak card arrives with your first delivery. From that point every order adds a stamp.",
        },
        {
          question: "What if I miss a week?",
          answer:
            "Your streak does not reset if you miss a week. You simply pick up where you left off. The milestone timelines (4 weeks, 8 weeks, etc.) are based on consistent ordering but your 10-bag count never resets unless you claim a reward.",
        },
        {
          question: "Can I choose my reward before I reach 10 bags?",
          answer:
            "Yes. Log into your account and set your preference on the streak page any time. You can change it right up until the moment you claim.",
        },
        {
          question: "What if my driver forgets to stamp my card?",
          answer:
            "Contact us at (857) 280-0992 and we will manually add the stamp to your digital record. Your physical card and your digital account are both tracked. We will always give you the benefit of the doubt.",
        },
        {
          question: "Is there a limit to how many times I can earn a streak reward?",
          answer:
            "No limit. Every 10 bags resets and starts a fresh cycle. Customers who order weekly can earn a free wash every 10 weeks indefinitely.",
        },
      ],
    },
    {
      id: "referrals",
      name: "Referrals & Account",
      items: [
        {
          question: "Does my friend need to use a credit card to get their free bag?",
          answer:
            "No. LOD requires a payment method on file for future orders, but their first order is completely free. They will not be charged for it. They pay nothing for their first bag.",
        },
        {
          question: "When does my $5 credit arrive?",
          answer:
            "Automatically within 24 hours of your friend's first order being delivered. You do not need to do anything. It appears in your LOD account and is ready to use immediately.",
        },
        {
          question: "Is there a limit to how many people I can refer?",
          answer:
            "No limit. Refer 1 person or 100 people. Each successful referral earns you $5 in credit. Credits stack in your account indefinitely and never expire.",
        },
        {
          question: "What if my friend already has a LOD account?",
          answer:
            "The referral credit applies only to new LOD customers who have never placed an order before. If your friend already has an account, the referral will not count toward your credit.",
        },
        {
          question: "Does my referral link expire?",
          answer:
            "Your unique referral link never expires as long as your LOD account is active. Share it once or share it every week. It always works.",
        },
      ],
    },
  ], []);

  // Filter items based on search query
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return categories;
    const query = searchQuery.toLowerCase();

    return categories.map((cat) => {
      const items = cat.items.filter(
        (item) =>
          item.question.toLowerCase().includes(query) ||
          item.answer.toLowerCase().includes(query)
      );
      return { ...cat, items };
    }).filter((cat) => cat.items.length > 0);
  }, [searchQuery, categories]);

  const handleToggle = (key: string) => {
    setOpenFAQ(openFAQ === key ? null : key);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-[#0A1628] text-white min-h-screen">
      {/* Hero Header */}
      <section className="bg-[#0A1628] pt-[72px] pb-[48px] border-b border-white/8 relative overflow-hidden">
        {/* Glow Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00C2A8]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-4 md:px-12 lg:px-20 text-center relative z-10">
          <p className="font-sans font-semibold text-[11px] uppercase tracking-[0.15em] text-[#00C2A8] mb-3">
            HELP CENTER
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-[56px] text-white tracking-tight leading-none mb-6">
            Frequently Asked Questions
          </h1>
          <p className="font-heading font-normal text-base md:text-lg text-white/65 max-w-xl mx-auto mb-10">
            Have questions? Search our topics below or select a category to get started.
          </p>

          {/* Search bar */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/35" />
            <input
              type="text"
              placeholder="Search questions, keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 font-sans text-base text-white placeholder-white/30 focus:outline-none focus:border-[#00C2A8]/50 focus:bg-white/8 transition-all"
            />
          </div>
        </div>
      </section>

      {/* Main content grid */}
      <section className="py-16 md:py-24 px-4 md:px-12 lg:px-20 max-w-[1280px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Navigation: Categories (Sticky, hidden on mobile/tablet) */}
          <div className="hidden lg:block lg:col-span-3 sticky top-28">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-white/35 mb-4">
              Categories
            </h3>
            <ul className="space-y-1 text-left">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => scrollToSection(cat.id)}
                    className="w-full text-left py-2.5 px-4 rounded-lg font-heading text-sm font-semibold text-white/65 hover:text-white hover:bg-white/5 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <HelpCircle className="h-4 w-4 text-[#00C2A8]/80" />
                    <span>{cat.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-9 flex flex-col gap-16">
            {filteredCategories.length === 0 ? (
              <div className="text-center py-20 bg-white/4 border border-white/8 rounded-2xl p-8">
                <HelpCircle className="h-12 w-12 text-[#00C2A8]/60 mx-auto mb-4" />
                <h3 className="font-heading font-bold text-xl text-white mb-2">No matching questions found</h3>
                <p className="font-sans text-sm text-white/45 max-w-sm mx-auto">
                  Try typing different keywords or clear your search to view all categories.
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="mt-6 font-heading font-semibold text-sm bg-[#00C2A8] text-[#0A1628] px-6 py-2.5 rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  Clear Search
                </button>
              </div>
            ) : (
              filteredCategories.map((cat) => (
                <div key={cat.id} id={cat.id} className="scroll-mt-32 text-left">
                  <h2 className="font-heading font-bold text-2xl text-[#00C2A8] border-b border-white/10 pb-3 mb-6 flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-[#00C2A8]" />
                    <span>{cat.name}</span>
                  </h2>
                  <div className="flex flex-col">
                    {cat.items.map((item, idx) => {
                      const itemKey = `${cat.id}-${idx}`;
                      return (
                        <FAQRow
                          key={idx}
                          item={item}
                          isOpen={openFAQ === itemKey}
                          onToggle={() => handleToggle(itemKey)}
                        />
                      );
                    })}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
