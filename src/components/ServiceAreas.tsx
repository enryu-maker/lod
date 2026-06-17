import React from "react";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const activeAreas = [
  "Back Bay",
  "Prudential",
  "Fenway/Kenmore",
  "Mission Hill",
  "Fenway/Longwood",
  "Brookline",
];

const upcomingAreas = ["Allston", "Brighton", "Cambridge", "Somerville"];

export default function ServiceAreas() {
  return (
    <Reveal as="section" id="areas" className="py-24 md:py-32 bg-[#0A1628]">
      <div className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-[120px]">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-center text-white mb-16 md:mb-20">
          Service Areas
        </h2>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {activeAreas.map((name) => (
            <StaggerItem
              key={name}
              className="flex flex-col gap-3 px-5 py-5 rounded-xl bg-white border-l-[3px] border-l-[#00C2A8] shadow-sm max-w-md mx-auto sm:max-w-none w-full"
            >
              <span className="font-heading font-bold text-[18px] leading-snug text-[#0A1628]">
                {name}
              </span>
              <span className="inline-flex self-start items-center rounded-full bg-[rgba(0,194,168,0.12)] px-[10px] py-[3px] font-sans font-medium text-[11px] text-[#00C2A8]">
                Available
              </span>
            </StaggerItem>
          ))}

          {upcomingAreas.map((name) => (
            <StaggerItem
              key={name}
              className="flex flex-col gap-3 px-5 py-5 rounded-xl bg-white border-l-[3px] border-l-[#E8EAED] shadow-sm max-w-md mx-auto sm:max-w-none w-full"
            >
              <div className="flex flex-col gap-2">
                <span className="font-heading font-bold text-[18px] leading-snug text-[#6B7280]">
                  {name}
                </span>
                <span className="inline-flex self-start items-center rounded-full bg-[#F3F4F6] px-[10px] py-[3px] font-sans font-medium text-[11px] text-[#6B7280]">
                  Coming Soon
                </span>
              </div>
              <a
                href="#notify"
                className="font-sans font-medium text-[13px] text-[#00C2A8] hover:text-[#00C2A8]/80 transition-colors w-fit"
              >
                Notify me
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Reveal>
  );
}
