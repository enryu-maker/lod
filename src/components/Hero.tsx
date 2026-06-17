"use client";

import { CircleCheck, Globe } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { appleEase, pressableProps, springSmooth } from "@/lib/motion";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-[#0A1628]">
      <div className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-[120px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <Stagger className="lg:col-span-7 flex flex-col items-start text-left" stagger={0.1} animateOnMount>
          <StaggerItem>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6 md:mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-sans text-xs font-medium uppercase tracking-wider text-primary">
                Launching June 25, 2026 in Boston
              </span>
            </div>
          </StaggerItem>

          <StaggerItem>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-[1.1] tracking-tight text-white mb-6 max-w-xl">
              Your time is worth <span className="text-primary-container">more</span>.
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="font-heading font-normal text-base md:text-lg text-on-surface-variant leading-relaxed max-w-lg mb-8">
              LOD picks up your laundry, washes it, folds it, and delivers it back
              within 24 hours. The lifestyle platform for Boston professionals.
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="inline-flex items-center px-4 py-2.5 rounded-lg bg-surface-container-low border border-outline-variant/40 mb-8">
              <span className="font-sans text-sm font-medium text-primary">
                Starting at $41.99 per bag
              </span>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 w-full sm:w-auto mb-12">
              <motion.a
                href="/order"
                className="group font-sans text-sm font-medium uppercase tracking-wider text-center bg-primary text-on-primary hover:bg-primary-container px-8 py-4.5 rounded-lg flex items-center justify-center gap-2"
                {...(reduceMotion ? {} : pressableProps)}
              >
              Schedule Your First Pickup
              </motion.a>
              <a
                href="#how-it-works"
                className="font-sans text-sm font-medium text-center text-primary hover:text-white transition-colors duration-200 py-3 border-b border-primary hover:border-white w-fit mx-auto sm:mx-0"
              >
                See How It Works
              </a>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="w-full h-[1px] bg-outline-variant/20 mb-8" />
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              {[
                "24-hour turnaround on standard orders",
                "Free pickup and delivery included",
                "Photo documentation on every order",
              ].map((text) => (
                <div key={text} className="flex items-center gap-3">
                  <CircleCheck className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                  <span className="font-heading font-normal text-sm text-on-surface">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </StaggerItem>
        </Stagger>

        <motion.div
          className="lg:col-span-5 w-full flex justify-center lg:justify-end"
          initial={reduceMotion ? false : { opacity: 0, x: 40, scale: 0.96, filter: "blur(8px)" }}
          animate={reduceMotion ? undefined : { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.25, ease: appleEase }}
        >
          <motion.div
            className="relative w-full max-w-[450px] aspect-[4/5] rounded-[24px] bg-surface-container-lowest border border-outline-variant/30 flex flex-col items-center justify-center p-8 overflow-hidden group shadow-2xl"
            whileHover={reduceMotion ? undefined : { y: -4, scale: 1.01 }}
            transition={springSmooth}
          >
            <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-primary/10 blur-[60px] group-hover:bg-primary/20 transition-all duration-700" />
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-primary/5 blur-[60px] group-hover:bg-primary/10 transition-all duration-700" />

            <div className="relative z-10 w-24 h-24 rounded-full border border-primary/25 bg-surface-container flex items-center justify-center mb-6 animate-pulse shadow-inner">
              <Globe className="w-10 h-10 text-primary" aria-hidden="true" />
            </div>

            <p className="relative z-10 font-sans text-xs font-medium tracking-widest uppercase text-on-surface-variant mb-2">
              Your order, handled
            </p>
            <p className="relative z-10 font-heading font-normal text-xs text-outline text-center max-w-[200px]">
              Pickup, wash, fold, and delivery in one place.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
