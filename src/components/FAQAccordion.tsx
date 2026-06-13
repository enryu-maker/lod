"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
    <section id="faq" className="py-24 md:py-32 bg-[#161D1B]">
      <div className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-[120px]">
        {/* Title */}
        <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-center text-white mb-16 md:mb-20">
          Frequently Asked Questions
        </h2>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl bg-surface-container border transition-all duration-300 ${
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
                  <span
                    className={`text-primary shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      ></path>
                    </svg>
                  </span>
                </button>

                {/* Accordion Content */}
                <div
                  className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 border-t border-outline-variant/20"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed p-6 md:p-8 bg-surface-container-low/50">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
