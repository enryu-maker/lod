import React from "react";

export default function StatMatrix() {
  return (
    <section className="bg-[#1A211F] py-20 border-y border-outline-variant/30">
      <div className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-outline-variant/30 text-center">
          {/* Stat 1 */}
          <div className="py-8 md:py-4 px-6 flex flex-col items-center">
            <span className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-primary mb-3 tracking-tight">
              100
            </span>
            <span className="font-sans text-sm md:text-base text-on-surface-variant font-medium tracking-wide">
              First Bags Free at Launch
            </span>
          </div>

          {/* Stat 2 */}
          <div className="py-8 md:py-4 px-6 flex flex-col items-center">
            <span className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-primary mb-3 tracking-tight">
              24hr
            </span>
            <span className="font-sans text-sm md:text-base text-on-surface-variant font-medium tracking-wide">
              Turnaround
            </span>
          </div>

          {/* Stat 3 */}
          <div className="py-8 md:py-4 px-6 flex flex-col items-center">
            <span className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-primary mb-3 tracking-tight">
              $0
            </span>
            <span className="font-sans text-sm md:text-base text-on-surface-variant font-medium tracking-wide">
              Hidden fees. Ever.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
