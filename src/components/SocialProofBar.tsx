"use client";

import { motion, useReducedMotion } from "framer-motion";
import { appleEase } from "@/lib/motion";

export default function SocialProofBar() {
  const reduceMotion = useReducedMotion();
  const items = [
    { text: "LAUNCHING JUNE 25, 2026", highlight: true },
    { text: "FIRST 100 CUSTOMERS GET THEIR FIRST BAG FREE", highlight: false },
    { text: "SERVING BACK BAY, BROOKLINE, FENWAY...", highlight: false },
  ];

  const tickerItems = [...items, ...items, ...items];

  return (
    <motion.div
      className="w-full bg-surface-variant/80 border-y border-outline-variant/30 py-4 overflow-hidden relative"
      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4, ease: appleEase }}
    >
      <div className="animate-marquee whitespace-nowrap">
        {tickerItems.map((item, idx) => (
          <span
            key={idx}
            className={`inline-flex items-center mx-8 font-sans text-xs font-medium tracking-widest uppercase ${
              item.highlight ? "text-primary" : "text-on-surface-variant"
            }`}
          >
            {item.text}
            <span className="mx-8 text-outline-variant">•</span>
          </span>
        ))}
      </div>
    </motion.div>
  );
}
