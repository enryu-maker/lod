import React from "react";

export default function SocialProofBar() {
  const items = [
    { text: "LAUNCHING JUNE 25, 2026", highlight: true },
    { text: "FIRST 100 CUSTOMERS GET THEIR FIRST BAG FREE", highlight: false },
    { text: "SERVING BACK BAY, BROOKLINE, FENWAY...", highlight: false },
  ];

  // Duplicate items 3 times for a seamless loop
  const tickerItems = [...items, ...items, ...items];

  return (
    <div className="w-full bg-surface-variant/80 border-y border-outline-variant/30 py-4 overflow-hidden relative">
      <div className="animate-marquee whitespace-nowrap">
        {tickerItems.map((item, idx) => (
          <div key={idx} className="inline-flex items-center mx-8 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-primary mr-6"></span>
            <span
              className={`font-sans text-xs md:text-sm font-bold uppercase tracking-widest ${
                item.highlight ? "text-primary" : "text-on-surface"
              }`}
            >
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
