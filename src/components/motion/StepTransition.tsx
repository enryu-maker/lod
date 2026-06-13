"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { slideFadeVariants } from "@/lib/motion";

type StepTransitionProps = {
  stepKey: string | number;
  children: React.ReactNode;
  direction?: number;
};

export default function StepTransition({
  stepKey,
  children,
  direction = 1,
}: StepTransitionProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div key={stepKey}>{children}</div>;
  }

  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={stepKey}
        custom={direction}
        variants={slideFadeVariants}
        initial="enter"
        animate="center"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
