"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { appleEase } from "@/lib/motion";

export default function OrderHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative pt-36 pb-20 md:pt-64 md:pb-28 overflow-hidden bg-[#0A1628]">
      <div className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-[120px] relative z-10 text-center">
        <Stagger className="max-w-3xl mx-auto" animateOnMount stagger={0.12}>
          <StaggerItem>
            <motion.h1
              className="font-heading font-bold text-4xl md:text-5xl lg:text-[64px] text-white tracking-tight leading-[1.1] mb-6"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: appleEase }}
            >
              This is how we handle it.
            </motion.h1>
          </StaggerItem>
          <StaggerItem>
            <p className="font-heading font-normal text-base md:text-lg lg:text-xl text-white/65 leading-relaxed">
              Zero effort. Every time. A simple process so you never have to think about laundry again.
            </p>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
