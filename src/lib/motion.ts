import type { Transition, Variants } from "framer-motion";

/** Apple-style ease-out curve */
export const appleEase = [0.16, 1, 0.3, 1] as const;

export const appleEaseInOut = [0.65, 0, 0.35, 1] as const;

export const springSnappy = {
  type: "spring" as const,
  stiffness: 420,
  damping: 32,
  mass: 0.8,
};

export const springSmooth = {
  type: "spring" as const,
  stiffness: 260,
  damping: 28,
  mass: 1,
};

export const springGentle = {
  type: "spring" as const,
  stiffness: 140,
  damping: 22,
  mass: 1.1,
};

export const fadeUpTransition: Transition = {
  duration: 0.75,
  ease: appleEase,
};

export const pageTransition: Transition = {
  duration: 0.55,
  ease: appleEase,
};

export const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: fadeUpTransition,
  },
};

export const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.98,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: appleEase },
  },
};

export const slideFadeVariants: Variants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 32 : -32,
    filter: "blur(6px)",
  }),
  center: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: appleEase },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -24 : 24,
    filter: "blur(4px)",
    transition: { duration: 0.35, ease: appleEaseInOut },
  }),
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
};

export const viewportOnce = {
  once: true,
  margin: "-60px 0px -60px 0px" as const,
  amount: 0.15 as const,
};

export const pressableProps = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.97 },
  transition: springSnappy,
};
