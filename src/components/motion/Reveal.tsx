"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";
import { appleEase, fadeUpTransition, viewportOnce } from "@/lib/motion";

type RevealProps = HTMLMotionProps<"div"> & {
  as?: "div" | "section" | "footer" | "article";
  delay?: number;
};

export default function Reveal({
  as = "div",
  delay = 0,
  children,
  ...props
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      initial={
        reduceMotion ? false : { opacity: 0, y: 32, filter: "blur(8px)" }
      }
      whileInView={
        reduceMotion
          ? undefined
          : { opacity: 1, y: 0, filter: "blur(0px)" }
      }
      viewport={viewportOnce}
      transition={{ ...fadeUpTransition, delay }}
      {...props}
    >
      {children}
    </Component>
  );
}

export function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        reduceMotion ? false : { opacity: 0, y: 16, filter: "blur(6px)" }
      }
      animate={
        reduceMotion
          ? undefined
          : { opacity: 1, y: 0, filter: "blur(0px)" }
      }
      transition={{ duration: 0.65, delay, ease: appleEase }}
    >
      {children}
    </motion.div>
  );
}
