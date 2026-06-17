"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import { pressableProps } from "@/lib/motion";

export default function FinalCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <Reveal
      as="section"
      className="py-24 md:py-32 bg-[#0A1628] border-t border-outline-variant/20 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-[120px] relative z-10 text-center">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-10 max-w-3xl mx-auto leading-tight">
          Ready to get your time back?
        </h2>
        <motion.a
          href="/order"
          className="inline-flex items-center gap-2.5 font-sans text-sm font-medium uppercase tracking-wider bg-primary text-on-primary hover:bg-primary-container px-10 py-5 rounded-lg shadow-lg shadow-primary/10"
          {...(reduceMotion ? {} : pressableProps)}
        >
          Schedule Your First Pickup
        </motion.a>
      </div>
    </Reveal>
  );
}
