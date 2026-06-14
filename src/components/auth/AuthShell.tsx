"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { CircleCheck } from "lucide-react";
import LodWordmark from "@/components/LodWordmark";
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

function BrandPanelContent({
  panelKey,
  panel,
}: {
  panelKey: string;
  panel: ReturnType<typeof getAuthPanelContent>;
}) {
  const reduceMotion = useReducedMotion();

  if (panel.layout === "logo-focused") {
    return (
      <motion.div
        key={panelKey}
        className="flex flex-col flex-1 justify-center py-10"
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: appleEase }}
      >
        <Link href="/" aria-label="LOD home" className="w-fit">
          <LodWordmark variant="white" className="h-14 xl:h-16 w-auto mb-8" />
        </Link>
        {panel.tagline && (
          <p className="font-heading font-normal text-lg xl:text-xl text-white/70 leading-relaxed max-w-sm">
            {panel.tagline}
          </p>
        )}
      </motion.div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={panelKey}
        className="flex flex-col flex-1 justify-center py-6"
        initial={
          reduceMotion ? false : { opacity: 0, y: 16, filter: "blur(4px)" }
        }
        animate={
          reduceMotion
            ? undefined
            : { opacity: 1, y: 0, filter: "blur(0px)" }
        }
        exit={
          reduceMotion ? undefined : { opacity: 0, y: -8, filter: "blur(4px)" }
        }
        transition={{ duration: 0.5, ease: appleEase }}
      >
        {panel.headline && (
          <h1 className="font-heading font-bold text-3xl xl:text-[38px] leading-[1.15] text-white mb-3 max-w-md">
            {panel.headline}
          </h1>
        )}
        {panel.subhead && (
          <p className="font-heading font-normal text-base text-white/60 leading-relaxed max-w-sm">
            {panel.subhead}
          </p>
        )}
      </motion.div>
    </AnimatePresence>
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
  const panelKey =
    variant === "forgot-password" ? "forgot-password" : "auth-brand";

  return (
    <section className="flex h-full min-h-0 flex-1 flex-col lg:flex-row overflow-hidden">
      <div className="relative hidden lg:flex lg:w-[44%] xl:w-[42%] h-full min-h-0 overflow-hidden bg-[#0A1628] shrink-0">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.06]"
          style={{
            backgroundImage: "url('/Order-step/Image (4).png')",
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0A1628] to-[#00C2A8]/20"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#00C2A8]/10 to-transparent"
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col h-full w-full px-10 xl:px-12 py-10 xl:py-12">
          <BrandPanelContent panelKey={panelKey} panel={panel} />

          <motion.ul
            className="flex flex-col gap-3.5 shrink-0 pt-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.08, delayChildren: 0.15 },
              },
            }}
          >
            {authBenefits.map((benefit) => (
              <motion.li
                key={benefit}
                className="flex items-center gap-3"
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.45, ease: appleEase },
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
