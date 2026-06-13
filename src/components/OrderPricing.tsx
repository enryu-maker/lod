import React from "react";
import Link from "next/link";

interface PricingTier {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  unit: string;
  features: string[];
  isFeatured?: boolean;
  featuredBadge?: string;
  buttonText: string;
  buttonLink: string;
}

export default function OrderPricing() {
  const tiers: PricingTier[] = [
    {
      id: "essential",
      name: "Essential",
      subtitle: "For regular weekly needs.",
      price: "$41.99",
      unit: "/bag",
      features: [
        "48-hour turnaround",
        "Standard fold"
      ],
      buttonText: "Get Started",
      buttonLink: "#schedule-form",
    },
    {
      id: "express",
      name: "Express",
      subtitle: "The professional standard.",
      price: "$53.49",
      unit: "/bag",
      features: [
        "24-hour turnaround",
        "Premium fold & hang",
        "Priority support"
      ],
      isFeatured: true,
      featuredBadge: "MOST POPULAR",
      buttonText: "Get Started",
      buttonLink: "#schedule-form",
    },
    {
      id: "rush",
      name: "Rush",
      subtitle: "When time is critical.",
      price: "$64.99",
      unit: "/bag",
      features: [
        "Same-day turnaround",
        "White-glove delivery"
      ],
      buttonText: "Get Started",
      buttonLink: "#schedule-form",
    }
  ];

  return (
    <section className="bg-[#F4F6F8] py-24 md:py-32 relative overflow-hidden" id="order-pricing">
      <div className="max-w-360 mx-auto px-5 md:px-12 lg:px-[120px]">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-[40px] text-[#0A1628] mb-4 tracking-tight">
            Simple, transparent pricing.
          </h2>
          <p className="font-sans text-sm md:text-base lg:text-lg text-[#333b38]/80 max-w-2xl mx-auto leading-relaxed">
            No hidden fees. Choose the service tier that fits your timeline.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative bg-white rounded-xl p-8 md:p-10 border flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] ${
                tier.isFeatured
                  ? "border-[#00c2a8]/60 shadow-[0_12px_24px_rgba(0,194,168,0.08)] ring-1 ring-[#00c2a8]/40"
                  : "border-[#3c4a46]/10 shadow-sm"
              }`}
            >
              {/* Overlapping Badge */}
              {tier.isFeatured && tier.featuredBadge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#eec058] text-[#402d00] font-sans font-bold text-[10px] md:text-xs uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
                  {tier.featuredBadge}
                </div>
              )}

              {/* Card Header & Content */}
              <div>
                <h3 className="font-heading font-semibold text-2xl text-[#0A1628] mb-2 tracking-tight">
                  {tier.name}
                </h3>
                <p className="font-sans text-sm text-[#333b38]/75 mb-8">
                  {tier.subtitle}
                </p>

                {/* Price Display */}
                <div className="flex items-baseline mb-8">
                  <span className="font-heading font-bold text-4xl md:text-[48px] text-[#0A1628] tracking-tight">
                    {tier.price}
                  </span>
                  <span className="font-sans text-sm text-[#333b38]/70 ml-1">
                    {tier.unit}
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <svg
                        className="w-4 h-4 text-[#00c2a8] shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="font-sans text-sm md:text-base text-[#333b38]/85">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-8">
                {tier.isFeatured ? (
                  <Link
                    href={tier.buttonLink}
                    className="block text-center bg-[#005f52] hover:bg-[#007a6a] text-white font-sans text-sm font-bold tracking-wide uppercase py-4 rounded-lg transition-all duration-200"
                  >
                    {tier.buttonText}
                  </Link>
                ) : (
                  <Link
                    href={tier.buttonLink}
                    className="block text-center border border-[#0A1628]/20 hover:border-[#0A1628] text-[#0A1628] font-sans text-sm font-bold tracking-wide uppercase py-4 rounded-lg transition-all duration-200"
                  >
                    {tier.buttonText}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
