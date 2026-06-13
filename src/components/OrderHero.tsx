import React from "react";

export default function OrderHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-surface">
      {/* Subtle background gradient to match the design's soft cyan glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(66,222,195,0.08),transparent_50%)]" />
      
      <div className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-[120px] relative z-10 text-center">
        <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-[64px] text-white tracking-tight leading-[1.1] mb-6">
          This is how we handle it.
        </h1>
        <p className="font-sans text-base md:text-lg lg:text-xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
          Premium laundry. Zero effort. Every time. We&apos;ve engineered a seamless 
          process so you never have to think about laundry again.
        </p>
      </div>
    </section>
  );
}
