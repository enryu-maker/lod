import React from "react";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export default function StatMatrix() {
  return (
    <Reveal as="section" className="bg-[#1A211F] py-20 border-y border-outline-variant/30">
      <div className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-[120px]">
        <Stagger className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-outline-variant/30 text-center">
          <StaggerItem className="py-8 md:py-4 px-6 flex flex-col items-center">
            <span className="font-sans font-medium text-5xl md:text-6xl lg:text-7xl text-primary mb-3 tracking-tight">
              100
            </span>
            <span className="font-sans font-medium text-sm md:text-base text-on-surface-variant tracking-wide">
              First Bags Free at Launch
            </span>
          </StaggerItem>
          <StaggerItem className="py-8 md:py-4 px-6 flex flex-col items-center">
            <span className="font-sans font-medium text-5xl md:text-6xl lg:text-7xl text-primary mb-3 tracking-tight">
              24hr
            </span>
            <span className="font-sans font-medium text-sm md:text-base text-on-surface-variant tracking-wide">
              Turnaround
            </span>
          </StaggerItem>
          <StaggerItem className="py-8 md:py-4 px-6 flex flex-col items-center">
            <span className="font-sans font-medium text-5xl md:text-6xl lg:text-7xl text-primary mb-3 tracking-tight">
              $0
            </span>
            <span className="font-sans font-medium text-sm md:text-base text-on-surface-variant tracking-wide">
              Hidden fees. Ever.
            </span>
          </StaggerItem>
        </Stagger>
      </div>
    </Reveal>
  );
}
