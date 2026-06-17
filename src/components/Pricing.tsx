import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const CheckIcon = () => (
  <Check className="w-5 h-5 text-primary-container shrink-0" strokeWidth={2.5} aria-hidden="true" />
);

const essentialFeatures = [
  "Wash, dry and fold",
  "Standard LOD detergent included",
  "Free pickup and delivery",
  "Full photo documentation",
  "Next day, within 24 hours",
];

const expressFeatures = [
  "Same day delivery",
  "Same day collection",
  "Priority processing",
  "Priority delivery",
  "Everything in Essential",
];

const rushFeatures = [
  "6-hour turnaround from pickup",
  "Emergency priority placement",
  "Top of the queue always",
  "Everything in Express",
];

export default function Pricing() {
  return (
    <Reveal
      as="section"
      id="pricing"
      className="py-24 md:py-32 bg-[#F4F6F8] text-surface-container-lowest"
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-[120px]">
        {/* Header */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl leading-tight text-[#0e1513] mb-6">
            Simple. Flat. No surprises.
          </h2>
          <p className="font-heading font-normal text-base md:text-lg text-surface-bright/70 leading-relaxed">
            No hidden fees. Choose the service tier that fits your timeline.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <Stagger className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Essential Card - slight grey background */}
          <StaggerItem className="relative flex flex-col justify-between p-8 md:p-10 rounded-xl bg-[#f7f9f8] border border-outline/5 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 max-w-md mx-auto lg:max-w-none w-full">
            <div>
              <h3 className="font-heading font-semibold text-2xl text-[#0e1513] mb-2">
                Essential
              </h3>
              <p className="font-heading font-normal text-sm text-surface-bright/60 mb-8">
                [ Next Day - 24hrs ]
              </p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="font-sans font-medium text-5xl md:text-6xl text-[#0e1513] tracking-tight">
                  $41.99
                </span>
                <span className="font-sans font-normal text-sm text-surface-bright/60">
                  /bag
                </span>
              </div>

              <ul className="space-y-4 mb-10">
                {essentialFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckIcon />
                    <span className="font-heading font-normal text-sm md:text-base text-surface-bright/80">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/order"
              className="w-full py-4 text-center font-sans text-sm font-medium border-2 border-[#0e1513] text-[#0e1513] rounded-lg hover:bg-[#0e1513] hover:text-white transition-all duration-200"
            >
              Get Started
            </Link>
          </StaggerItem>

          {/* Express Card - standard premium white */}
          <StaggerItem className="relative flex flex-col justify-between p-8 md:p-10 rounded-xl bg-white border-2 border-primary shadow-xl shadow-primary/5 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 lg:scale-[1.03] z-10 max-w-md mx-auto lg:max-w-none w-full">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#00C2A8] text-[#00382f] font-sans text-[10px] font-medium tracking-widest uppercase px-4 py-1.5 rounded-full shadow-md">
              Most Popular
            </div>

            <div>
              <h3 className="font-heading font-semibold text-2xl text-[#0e1513] mb-2 mt-2">
                Express
              </h3>
              <p className="font-heading font-normal text-sm text-surface-bright/60 mb-8">
                Same day. Priority everything.
              </p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="font-sans font-medium text-5xl md:text-6xl text-[#0e1513] tracking-tight">
                  $53.49
                </span>
                <span className="font-sans font-normal text-sm text-surface-bright/60">
                  /bag
                </span>
              </div>

              <ul className="space-y-4 mb-10">
                {expressFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckIcon />
                    <span className="font-heading font-normal text-sm md:text-base text-surface-bright/80">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/order"
              className="w-full py-4 text-center font-sans text-sm font-medium bg-[#006052] text-white hover:bg-[#00493e] rounded-lg shadow-md transition-all duration-200"
            >
              Get Started
            </Link>
          </StaggerItem>

          {/* Rush Card - LOD Navy background, high-contrast white details */}
          <StaggerItem className="relative flex flex-col justify-between p-8 md:p-10 rounded-xl bg-[#0A1628] border border-white/10 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-white max-w-md mx-auto lg:max-w-none w-full">
            <div>
              <h3 className="font-heading font-semibold text-2xl text-white mb-2">
                Rush
              </h3>
              <p className="font-heading font-normal text-sm text-white/60 mb-8">
                When time is critical.
              </p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="font-sans font-medium text-5xl md:text-6xl text-white tracking-tight">
                  $64.99
                </span>
                <span className="font-sans font-normal text-sm text-white/60">
                  /bag
                </span>
              </div>

              <ul className="space-y-4 mb-10">
                {rushFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#00C2A8] shrink-0" strokeWidth={2.5} aria-hidden="true" />
                    <span className="font-heading font-normal text-sm md:text-base text-white/80">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/order"
              className="w-full py-4 text-center font-sans text-sm font-medium border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#0A1628] transition-all duration-200"
            >
              Get Started
            </Link>
          </StaggerItem>
        </Stagger>
      </div>
    </Reveal>
  );
}
