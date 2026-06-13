"use client";

import React, { useState } from "react";
import { CircleCheck } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import { pressableProps } from "@/lib/motion";

const LAUNCH_DATE = new Date("2026-06-25T00:00:00-04:00");

function isPreLaunch() {
  return new Date() < LAUNCH_DATE;
}

export default function PromoBanner() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const preLaunch = isPreLaunch();
  const reduceMotion = useReducedMotion();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setSubmitted(true);
  };

  return (
    <Reveal as="section" className="py-20 bg-primary text-on-primary relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 rounded-full border border-on-primary/10 pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full border border-on-primary/5 pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 rounded-full border border-on-primary/10 pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-[120px] relative z-10">
        {preLaunch ? (
          /* Pre-launch state (before June 25, 2026) */
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-on-primary/30 bg-on-primary/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-on-primary animate-pulse"></span>
              <span className="font-sans text-xs font-medium uppercase tracking-widest text-on-primary">
                Launching June 25
              </span>
            </div>

            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl leading-tight text-on-primary mb-4">
              First 100 Customers Get Their First Bag Free
            </h2>

            <p className="font-heading font-normal text-base md:text-lg text-on-primary/80 mb-8">
              Join the waitlist now. No credit card needed. Your LOD Starter Kit
              is included at launch.
            </p>

            {submitted ? (
              <div className="bg-surface/10 border border-on-primary/20 rounded-xl p-6 max-w-md mx-auto backdrop-blur-sm">
                <p className="font-sans font-medium text-base text-on-primary flex items-center justify-center gap-2">
                  <CircleCheck className="w-6 h-6 shrink-0" aria-hidden="true" />
                  You&apos;re on the list! We&apos;ll be in touch before launch.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-stretch justify-center gap-4 max-w-xl mx-auto"
              >
                <div className="flex-1 flex flex-col items-start">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                    placeholder="Enter your email"
                    className="w-full px-5 py-4 rounded-lg bg-white text-surface-container-lowest font-sans font-normal placeholder-surface-bright/50 focus:outline-none focus:ring-2 focus:ring-[#00c2a8] border-none shadow-inner"
                  />
                  {error && (
                    <span className="font-sans font-normal text-xs text-red-900 mt-2 ml-2">
                      {error}
                    </span>
                  )}
                </div>
                <motion.button
                  type="submit"
                  className="px-8 py-4 bg-surface text-white hover:bg-surface-bright font-sans text-sm font-medium uppercase tracking-wider rounded-lg shadow-md shrink-0"
                  {...(reduceMotion ? {} : pressableProps)}
                >
                  Join Waitlist
                </motion.button>
              </form>
            )}
          </div>
        ) : (
          /* Post-launch state (June 25, 2026+) */
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl leading-tight text-on-primary mb-4">
              First 100 Customers Get Their First Bag Free
            </h2>

            <p className="font-heading font-normal text-base md:text-lg text-on-primary/80 mb-8">
              No credit card needed. Your LOD Starter Kit is included.
            </p>

            {submitted ? (
              <div className="bg-surface/10 border border-on-primary/20 rounded-xl p-6 max-w-md mx-auto backdrop-blur-sm">
                <p className="font-sans font-medium text-base text-on-primary flex items-center justify-center gap-2">
                  <CircleCheck className="w-6 h-6 shrink-0" aria-hidden="true" />
                  Offer Claimed! Check your inbox soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-stretch justify-center gap-4 max-w-xl mx-auto"
              >
                <div className="flex-1 flex flex-col items-start">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                    placeholder="Enter your email"
                    className="w-full px-5 py-4 rounded-lg bg-white text-surface-container-lowest font-sans font-normal placeholder-surface-bright/50 focus:outline-none focus:ring-2 focus:ring-[#00c2a8] border-none shadow-inner"
                  />
                  {error && (
                    <span className="font-sans font-normal text-xs text-red-900 mt-2 ml-2">
                      {error}
                    </span>
                  )}
                </div>
                <motion.button
                  type="submit"
                  className="px-8 py-4 bg-surface text-white hover:bg-surface-bright font-sans text-sm font-medium uppercase tracking-wider rounded-lg shadow-md shrink-0"
                  {...(reduceMotion ? {} : pressableProps)}
                >
                  Claim Your Free Bag
                </motion.button>
              </form>
            )}
          </div>
        )}
      </div>
    </Reveal>
  );
}
