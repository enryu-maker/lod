import React from "react";

export default function ServiceAreas() {
  const activeAreas = [
    "Back Bay",
    "Prudential",
    "Fenway/Kenmore",
    "Mission Hill",
    "Fenway/Longwood",
    "Brookline",
  ];

  const upcomingAreas = ["Allston", "Brighton", "Cambridge", "Somerville"];

  return (
    <section id="areas" className="py-24 md:py-32 bg-[#0E1513]">
      <div className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-[120px]">
        {/* Title */}
        <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-center text-white mb-16 md:mb-20">
          Service Areas
        </h2>

        {/* Neighborhood Chips Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {/* Active Chips */}
          {activeAreas.map((area, idx) => (
            <div
              key={`active-${idx}`}
              className="flex items-center justify-between px-6 py-5 rounded-xl bg-surface-container border border-primary/30 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/5 group"
            >
              <span className="font-sans text-base font-semibold text-white group-hover:text-primary transition-colors">
                {area}
              </span>
              <span className="w-2 h-2 rounded-full bg-primary shrink-0"></span>
            </div>
          ))}

          {/* Upcoming Chips */}
          {upcomingAreas.map((area, idx) => (
            <div
              key={`upcoming-${idx}`}
              className="flex items-center justify-between px-6 py-5 rounded-xl bg-surface-container-low border border-outline-variant/30 opacity-70"
            >
              <span className="font-sans text-base font-medium text-on-surface-variant">
                {area}
              </span>
              <span className="font-sans text-[10px] font-bold tracking-widest text-outline uppercase shrink-0">
                Soon
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
