import React from "react";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 md:py-32 bg-white text-surface-container-lowest"
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-[120px]">
        {/* Header */}
        <div className="mb-16 md:mb-24 max-w-xl text-left">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl leading-tight text-[#0e1513] mb-6">
            Precision <span className="text-primary-container">HANDLED.</span>
          </h2>
          <p className="font-sans text-base md:text-lg text-surface-bright/80 leading-relaxed">
            We handle it so you never have to think about laundry again.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="relative flex flex-col items-start p-8 md:p-10 rounded-[20px] bg-[#f7f9f8] border border-outline/10 transition-transform duration-300 hover:-translate-y-1">
            {/* Step Number */}
            <div className="w-12 h-12 rounded-full bg-outline-variant/10 text-surface-bright flex items-center justify-center font-heading font-bold text-base mb-8">
              01
            </div>
            {/* Content */}
            <h3 className="font-heading font-bold text-xl md:text-2xl text-[#0e1513] mb-4">
              Schedule
            </h3>
            <p className="font-sans text-sm md:text-base text-surface-bright/70 leading-relaxed">
              Select a pickup time in the app. Leave your bag at the door or
              hand it directly to our concierge.
            </p>
          </div>

          {/* Step 2 (Active/Highlighted Card) */}
          <div className="relative flex flex-col items-start p-8 md:p-10 rounded-[20px] bg-white border-2 border-primary shadow-xl shadow-primary/5 transition-transform duration-300 hover:-translate-y-1">
            {/* Active Badge at Top Right */}
            <div className="absolute top-8 right-8 inline-flex items-center px-3 py-1 rounded-full border border-primary text-[10px] font-bold tracking-widest text-primary uppercase">
              Handled.
            </div>

            {/* Step Number */}
            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary-container flex items-center justify-center font-heading font-bold text-base mb-8">
              02
            </div>
            {/* Content */}
            <h3 className="font-heading font-bold text-xl md:text-2xl text-[#0e1513] mb-4">
              We Handle Everything
            </h3>
            <p className="font-sans text-sm md:text-base text-surface-bright/70 leading-relaxed">
              Our facility inspects, treats, washes, and expertly folds every
              garment to your exact specifications.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col items-start p-8 md:p-10 rounded-[20px] bg-[#f7f9f8] border border-outline/10 transition-transform duration-300 hover:-translate-y-1">
            {/* Step Number */}
            <div className="w-12 h-12 rounded-full bg-outline-variant/10 text-surface-bright flex items-center justify-center font-heading font-bold text-base mb-8">
              03
            </div>
            {/* Content */}
            <h3 className="font-heading font-bold text-xl md:text-2xl text-[#0e1513] mb-4">
              Delivered Back
            </h3>
            <p className="font-sans text-sm md:text-base text-surface-bright/70 leading-relaxed">
              Receive a notification when your pristine, ready-to-wear laundry
              is dropped off. Zero friction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
