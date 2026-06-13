import React from "react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#0A1628]">
      <div className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-[120px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Launching Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6 md:mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-sans text-xs font-semibold uppercase tracking-wider text-primary">
              Launching June 25, 2026 in Boston
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-[1.1] tracking-tight text-white mb-6 max-w-xl">
            Your time is worth <span className="text-primary-container">more</span>.
          </h1>

          {/* Description */}
          <p className="font-sans text-base md:text-lg text-on-surface-variant leading-relaxed max-w-lg mb-8">
            LOD picks up your laundry, washes it, folds it, and delivers it back
            within 24 hours. The lifestyle platform for Boston professionals.
          </p>

          {/* Starting Price Pill */}
          <div className="inline-flex items-center px-4 py-2.5 rounded-lg bg-surface-container-low border border-outline-variant/40 mb-8">
            <span className="font-sans text-sm font-semibold text-primary">
              Starting at $41.99 per bag
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 w-full sm:w-auto mb-12">
            <a
              href="#schedule"
              className="group font-sans text-sm font-bold uppercase tracking-wider text-center bg-primary text-on-primary hover:bg-primary-container px-8 py-4.5 rounded-lg transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              Schedule Your First Pickup
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#how-it-works"
              className="font-sans text-sm font-semibold text-center text-primary hover:text-white transition-colors duration-200 py-3 border-b border-primary hover:border-white w-fit mx-auto sm:mx-0"
            >
              See How It Works
            </a>
          </div>

          {/* Features Checklist */}
          <div className="w-full h-[1px] bg-outline-variant/20 mb-8"></div>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-3">
              <svg
                className="w-5 h-5 text-primary"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="9" className="stroke-primary/30" strokeWidth="1.5" />
                <path
                  d="M6 10L9 13L14 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-sans text-sm font-medium text-on-surface">
                24hr Turnaround
              </span>
            </div>
            <div className="flex items-center gap-3">
              <svg
                className="w-5 h-5 text-primary"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="9" className="stroke-primary/30" strokeWidth="1.5" />
                <path
                  d="M6 10L9 13L14 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-sans text-sm font-medium text-on-surface">
                Premium Care
              </span>
            </div>
            <div className="flex items-center gap-3">
              <svg
                className="w-5 h-5 text-primary"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="9" className="stroke-primary/30" strokeWidth="1.5" />
                <path
                  d="M6 10L9 13L14 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-sans text-sm font-medium text-on-surface">
                Track Every Step
              </span>
            </div>
          </div>
        </div>

        {/* Right Media Column */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[450px] aspect-[4/5] rounded-[24px] bg-surface-container-lowest border border-outline-variant/30 flex flex-col items-center justify-center p-8 overflow-hidden group shadow-2xl">
            {/* Ambient background glow inside the placeholder */}
            <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-primary/10 blur-[60px] group-hover:bg-primary/20 transition-all duration-700"></div>
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-secondary/5 blur-[60px] group-hover:bg-secondary/10 transition-all duration-700"></div>

            {/* Inner frame/graphic representation */}
            <div className="relative z-10 w-24 h-24 rounded-full border border-primary/25 bg-surface-container flex items-center justify-center mb-6 animate-pulse shadow-inner">
              <svg
                className="w-10 h-10 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                <path d="M2 12h20" />
              </svg>
            </div>

            <p className="relative z-10 font-sans text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2">
              Lottie Animation
            </p>
            <p className="relative z-10 font-sans text-xs text-outline text-center max-w-[200px]">
              Interactive scanning motion runs during active user states.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
