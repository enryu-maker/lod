"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  fadeUpVariants,
  staggerContainerVariants,
  viewportOnce,
} from "@/lib/motion";

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  /** Use for above-the-fold content (hero) instead of scroll reveal */
  animateOnMount?: boolean;
};

export function Stagger({
  children,
  className,
  stagger = 0.09,
  delayChildren = 0.05,
  animateOnMount = false,
}: StaggerProps) {
  const reduceMotion = useReducedMotion();

  const variants = reduceMotion
    ? undefined
    : {
        ...staggerContainerVariants,
        visible: {
          transition: { staggerChildren: stagger, delayChildren },
        },
      };

  return (
    <motion.div
      className={className}
      initial="hidden"
      {...(animateOnMount
        ? { animate: "visible" }
        : { whileInView: "visible", viewport: viewportOnce })}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={fadeUpVariants}>
      {children}
    </motion.div>
  );
}
