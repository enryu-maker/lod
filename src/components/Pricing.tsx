import React from "react";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 md:py-32 bg-[#F4F6F8] text-surface-container-lowest"
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-[120px]">
        {/* Header */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl leading-tight text-[#0e1513] mb-6">
            Simple, transparent pricing.
          </h2>
          <p className="font-sans text-base md:text-lg text-surface-bright/70 leading-relaxed">
            No hidden fees. Choose the service tier that fits your timeline.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Card 1: Essential */}
          <div className="relative flex flex-col justify-between p-8 md:p-10 rounded-xl bg-white border border-outline/5 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div>
              <h3 className="font-heading font-bold text-2xl text-[#0e1513] mb-2">
                Essential
              </h3>
              <p className="font-sans text-sm text-surface-bright/60 mb-8">
                For regular weekly needs.
              </p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="font-heading font-bold text-5xl md:text-6xl text-[#0e1513] tracking-tight">
                  $41.99
                </span>
                <span className="font-sans text-sm text-surface-bright/60">
                  /bag
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-primary-container shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                  <span className="font-sans text-sm md:text-base text-surface-bright/80 font-medium">
                    48-hour turnaround
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-primary-container shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                  <span className="font-sans text-sm md:text-base text-surface-bright/80 font-medium">
                    Standard fold
                  </span>
                </li>
              </ul>
            </div>

            <a
              href="#schedule"
              className="w-full py-4 text-center font-sans text-sm font-bold border-2 border-[#0e1513] text-[#0e1513] rounded-lg hover:bg-[#0e1513] hover:text-white transition-all duration-200"
            >
              Get Started
            </a>
          </div>

          {/* Card 2: Express (Highlighted) */}
          <div className="relative flex flex-col justify-between p-8 md:p-10 rounded-xl bg-white border-2 border-primary shadow-xl shadow-primary/5 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 lg:scale-[1.03] z-10">
            {/* Gold Highlight Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-secondary text-[#402d00] font-sans text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-md">
              Most Popular
            </div>

            <div>
              <h3 className="font-heading font-bold text-2xl text-[#0e1513] mb-2 mt-2">
                Express
              </h3>
              <p className="font-sans text-sm text-surface-bright/60 mb-8">
                The professional standard.
              </p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="font-heading font-bold text-5xl md:text-6xl text-[#0e1513] tracking-tight">
                  $53.49
                </span>
                <span className="font-sans text-sm text-surface-bright/60">
                  /bag
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-primary-container shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                  <span className="font-sans text-sm md:text-base text-surface-bright/80 font-medium">
                    24-hour turnaround
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-primary-container shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                  <span className="font-sans text-sm md:text-base text-surface-bright/80 font-medium">
                    Premium fold & hang
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-primary-container shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                  <span className="font-sans text-sm md:text-base text-surface-bright/80 font-medium">
                    Priority support
                  </span>
                </li>
              </ul>
            </div>

            <a
              href="#schedule"
              className="w-full py-4 text-center font-sans text-sm font-bold bg-[#006052] text-white hover:bg-[#00493e] rounded-lg shadow-md transition-all duration-200"
            >
              Get Started
            </a>
          </div>

          {/* Card 3: Rush */}
          <div className="relative flex flex-col justify-between p-8 md:p-10 rounded-xl bg-white border border-outline/5 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div>
              <h3 className="font-heading font-bold text-2xl text-[#0e1513] mb-2">
                Rush
              </h3>
              <p className="font-sans text-sm text-surface-bright/60 mb-8">
                When time is critical.
              </p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="font-heading font-bold text-5xl md:text-6xl text-[#0e1513] tracking-tight">
                  $64.99
                </span>
                <span className="font-sans text-sm text-surface-bright/60">
                  /bag
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-primary-container shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                  <span className="font-sans text-sm md:text-base text-surface-bright/80 font-medium">
                    Same-day turnaround
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-primary-container shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                  <span className="font-sans text-sm md:text-base text-surface-bright/80 font-medium">
                    White-glove delivery
                  </span>
                </li>
              </ul>
            </div>

            <a
              href="#schedule"
              className="w-full py-4 text-center font-sans text-sm font-bold border-2 border-[#0e1513] text-[#0e1513] rounded-lg hover:bg-[#0e1513] hover:text-white transition-all duration-200"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
