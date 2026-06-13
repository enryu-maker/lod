"use client";

import { motion, useReducedMotion } from "framer-motion";
import { pageTransition } from "@/lib/motion";

export default function PageTransition({
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
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
}
