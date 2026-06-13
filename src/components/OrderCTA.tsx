import React from "react";
import Link from "next/link";

export default function OrderCTA() {
  return (
    <section className="bg-[#0E1513] py-24 md:py-32 relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(66,222,195,0.04),transparent_60%)]" />
      
      <div className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-[120px] relative z-10">
        <h2 className="font-heading font-bold text-3xl md:text-5xl lg:text-[64px] text-white tracking-tight leading-[1.1] mb-6">
          Ready to get your time back?
        </h2>
        <p className="font-sans text-sm md:text-base lg:text-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
          Join Boston professionals who&apos;ve stopped doing laundry.
        </p>
        
        <Link
          href="#schedule-form"
          className="inline-flex items-center gap-2 bg-primary text-on-primary hover:bg-primary-container px-8 py-4 rounded-lg font-sans text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-200 hover:scale-[1.02] shadow-md shadow-primary/10"
        >
          <span>Schedule Your First Pickup</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
