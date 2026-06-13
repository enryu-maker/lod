"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { appleEase } from "@/lib/motion";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  const faqs: FAQItem[] = [
    {
      question: "What happens if I'm not home?",
      answer:
        "No problem! You can leave your bag with your building's concierge, on your porch, or specify a secure drop-off/pickup location in the app. Just update your delivery instructions before our driver arrives.",
    },
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
      question: "Is there a delivery fee?",
      answer:
        "Delivery is completely free for all standard bag tiers. There are no hidden service fees, delivery surcharges, or fuel fees. The price you see is the price you pay.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Reveal as="section" id="faq" className="py-24 md:py-32 bg-[#161D1B]">
      <div className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-[120px]">
        {/* Title */}
        <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-center text-white mb-16 md:mb-20">
          Frequently Asked Questions
        </h2>

        {/* FAQ Accordion List */}
        <Stagger className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <StaggerItem
                key={idx}
                className={`rounded-xl bg-surface-container border overflow-hidden ${
                  isOpen
                    ? "border-primary/50 shadow-lg shadow-primary/5"
                    : "border-outline-variant/30 hover:border-outline-variant/60"
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between text-left p-6 md:p-8 focus:outline-none group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-semibold text-base md:text-lg text-white group-hover:text-primary transition-colors pr-6">
                    {faq.question}
                  </span>
                  <motion.span
                    className="text-primary shrink-0"
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
                      animate={
                        reduceMotion
                          ? undefined
                          : { height: "auto", opacity: 1 }
                      }
                      exit={
                        reduceMotion
                          ? undefined
                          : { height: 0, opacity: 0 }
                      }
                      transition={{ duration: 0.4, ease: appleEase }}
                      className="overflow-hidden border-t border-outline-variant/20"
                    >
                      <p className="font-heading font-normal text-sm md:text-base text-on-surface-variant leading-relaxed p-6 md:p-8 bg-surface-container-low/50">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </Reveal>
  );
}
