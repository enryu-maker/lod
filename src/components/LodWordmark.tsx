import React from "react";

type LodWordmarkProps = {
  className?: string;
  variant?: "white" | "navy";
};

export default function LodWordmark({
  className = "h-7 w-auto",
  variant = "white",
}: LodWordmarkProps) {
  return (
    <svg
      viewBox="0 0 92 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="LOD"
      role="img"
    >
      <image
        href="/logo.png"
        width="92"
        height="40"
        preserveAspectRatio="xMidYMid meet"
        style={
          variant === "white"
            ? { filter: "brightness(0) invert(1)" }
            : undefined
        }
      />
    </svg>
  );
}
