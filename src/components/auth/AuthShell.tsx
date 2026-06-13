"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { CircleCheck } from "lucide-react";
import {
  authBenefits,
  getAuthPanelContent,
  signupStepLabels,
  type AuthVariant,
  type SignupStep,
} from "./auth-shell-content";
import { appleEase } from "@/lib/motion";
import { FadeIn } from "@/components/motion/Reveal";
import type { ReactNode } from "react";

type AuthShellProps = {
  children: ReactNode;
  footer?: ReactNode;
  variant?: AuthVariant;
  signupStep?: SignupStep;
};

function SignupProgress({ step }: { step: SignupStep }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="mb-4 shrink-0">
      <div className="flex items-center justify-between mb-2">
        <span className="font-sans font-medium text-xs uppercase tracking-wider text-[#6B7280]">
          Step {step} of 3
        </span>
        <span className="font-sans font-normal text-xs text-[#6B7280]">
          {signupStepLabels[step - 1]}
        </span>
      </div>
      <div className="flex gap-2">
        {([1, 2, 3] as const).map((s) => (
          <div
            key={s}
            className="h-1 flex-1 rounded-full bg-[#E8EAED] overflow-hidden"
          >
            <motion.div
              className="h-full rounded-full bg-[#00C2A8]"
              initial={false}
              animate={{ width: s <= step ? "100%" : "0%" }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { duration: 0.5, ease: appleEase }
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AuthShell({
  children,
  footer,
  variant = "login",
  signupStep = 1,
}: AuthShellProps) {
  const panel = getAuthPanelContent(variant, signupStep);
  const reduceMotion = useReducedMotion();
  const panelKey = `${variant}-${signupStep}`;

  return (
    <section className="flex h-full min-h-0 flex-1 flex-col lg:flex-row overflow-hidden">
      <div className="relative hidden lg:flex lg:w-[44%] xl:w-[42%] h-full min-h-0 overflow-hidden bg-[#0A1628] shrink-0">
        <div
          className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#00C2A8]/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#00C2A8]/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col justify-between h-full w-full px-10 xl:px-12 py-8 xl:py-10 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={panelKey}
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 20, filter: "blur(6px)" }
              }
              animate={
                reduceMotion
                  ? undefined
                  : { opacity: 1, y: 0, filter: "blur(0px)" }
              }
              exit={
                reduceMotion
                  ? undefined
                  : { opacity: 0, y: -12, filter: "blur(4px)" }
              }
              transition={{ duration: 0.55, ease: appleEase }}
            >
              <h1 className="font-heading font-bold text-3xl xl:text-[40px] leading-[1.12] text-white mb-3 max-w-md">
                {panel.headline}
              </h1>
              <p className="font-heading font-normal text-base text-white/60 leading-relaxed max-w-sm">
                {panel.subhead}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.ul
            className="flex flex-col gap-3.5"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.08, delayChildren: 0.2 },
              },
            }}
          >
            {authBenefits.map((benefit) => (
              <motion.li
                key={benefit}
                className="flex items-center gap-3"
                variants={{
                  hidden: { opacity: 0, x: -12 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, ease: appleEase },
                  },
                }}
              >
                <CircleCheck
                  className="w-5 h-5 text-[#00C2A8] shrink-0"
                  aria-hidden="true"
                />
                <span className="font-heading font-normal text-sm text-white/75">
                  {benefit}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>

      <div className="relative flex flex-1 min-h-0 h-full flex-col bg-white lg:bg-[#FAFBFC] overflow-y-auto">
        <div className="flex flex-col justify-center flex-1 min-h-0 px-5 py-6 md:px-10 lg:px-12 xl:px-16">
          <div className="w-full max-w-[440px] mx-auto my-auto py-2">
            {variant === "signup" && <SignupProgress step={signupStep} />}

            <motion.div
              className="lg:rounded-2xl lg:bg-white lg:p-7 xl:p-8 lg:shadow-[0_8px_40px_rgba(10,22,40,0.06)] lg:border lg:border-[#E8EAED]/80"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: appleEase }}
            >
              {children}
            </motion.div>

            {footer && (
              <FadeIn className="mt-4 shrink-0" delay={0.15}>
                {footer}
              </FadeIn>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
