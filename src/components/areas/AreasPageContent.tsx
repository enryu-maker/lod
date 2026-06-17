"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Bell, CheckCircle, Clock, Info } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const activeAreas = [
  {
    name: "Back Bay",
    desc: "From Commonwealth Ave to Beacon St, we serve historic Back Bay brownstones. No laundry room? Narrow stairs? We've got you covered with contactless doorstep pickup.",
  },
  {
    name: "Brookline",
    desc: "Hassle-free next-day laundry delivery for Brookline families and professionals. Spend your weekends in Coolidge Corner, not in the laundry room.",
  },
  {
    name: "Fenway/Kenmore",
    desc: "Convenient and dependable laundry service for Fenway residents and students. Ideal for busy weeks near Lansdowne and Kenmore Square.",
  },
  {
    name: "Mission Hill",
    desc: "Providing scheduled pickups and perfect folds for Mission Hill's residential streets, student housing, and local staff.",
  },
  {
    name: "Fenway/Longwood",
    desc: "Tailored for healthcare professionals, residents, and researchers in the Longwood Medical Area. Convenient, fast, and 24-hour turnaround.",
  },
  {
    name: "Prudential",
    desc: "Premium laundry solutions matching the luxury standards of Prudential Center high-rises and neighboring towers.",
  },
];

const upcomingAreas = ["Allston", "Brighton", "Cambridge", "Somerville"];

export default function AreasPageContent() {
  return (
    <div className="bg-[#0A1628] text-white min-h-screen">
      {/* Hero */}
      <section className="bg-[#0A1628] pt-[72px] pb-[48px] border-b border-white/8 relative overflow-hidden text-center">
        {/* Glow Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00C2A8]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-4 md:px-12 lg:px-20 relative z-10">
          <p className="font-sans font-semibold text-[11px] uppercase tracking-[0.15em] text-[#00C2A8] mb-3">
            COVERAGE MAP
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-[56px] text-white tracking-tight leading-none mb-6">
            LOD Service Areas
          </h1>
          <p className="font-heading font-normal text-base md:text-lg text-white/65 max-w-xl mx-auto mb-10">
            We currently pick up, clean, and deliver laundry in Boston&apos;s primary residential and professional centers.
          </p>
        </div>
      </section>

      {/* Neighborhood List & Cards */}
      <section className="py-16 md:py-24 px-4 md:px-12 lg:px-20 max-w-[1280px] mx-auto relative z-10">
        <div className="text-left mb-12">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-2 flex items-center gap-2">
            <CheckCircle className="h-6 w-6 text-[#00C2A8]" />
            <span>Active Neighborhoods</span>
          </h2>
          <p className="font-sans text-sm text-white/45">
            Next-day pickup and delivery is fully available in these locations:
          </p>
        </div>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {activeAreas.map((area) => (
            <StaggerItem
              key={area.name}
              className="bg-white/4 border border-white/8 rounded-2xl p-6 text-left flex flex-col justify-between hover:border-[#00C2A8]/30 transition-all duration-300 hover:scale-[1.01]"
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5 text-[#00C2A8]" />
                  <h3 className="font-heading font-bold text-xl text-white">
                    {area.name}
                  </h3>
                </div>
                <p className="font-sans font-normal text-sm text-white/65 leading-relaxed mb-6">
                  {area.desc}
                </p>
              </div>
              <span className="inline-flex self-start items-center rounded-full bg-[#00C2A8]/12 px-[12px] py-[4px] font-sans font-medium text-[11px] text-[#00C2A8] uppercase tracking-wider">
                Service Available
              </span>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Upcoming Areas */}
        <div className="border-t border-white/8 pt-16">
          <div className="text-left mb-12">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-2 flex items-center gap-2">
              <Clock className="h-6 w-6 text-[#D4A843]" />
              <span>Expanding Soon</span>
            </h2>
            <p className="font-sans text-sm text-white/45">
              We are actively preparing launches in the following Boston areas:
            </p>
          </div>

          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {upcomingAreas.map((name) => (
              <StaggerItem
                key={name}
                className="bg-white/3 border border-white/6 rounded-2xl p-6 text-left flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-heading font-bold text-lg text-white/45 mb-1">
                    {name}
                  </h3>
                  <span className="inline-flex items-center rounded-full bg-white/5 px-[10px] py-[3px] font-sans font-medium text-[11px] text-white/35 uppercase tracking-wider mb-6">
                    Coming Soon
                  </span>
                </div>
                <a
                  href="mailto:support@lodvalet.com?subject=Notify%20me%20when%20available%20in%20LOD"
                  className="font-sans font-medium text-xs text-[#00C2A8] hover:text-[#00C2A8]/80 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Bell className="h-3.5 w-3.5" />
                  <span>Notify me</span>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* Notify Banner */}
        <Reveal className="bg-white/4 border border-white/8 rounded-2xl p-6 md:p-8 flex items-start gap-4 text-left max-w-3xl mx-auto">
          <Info className="h-6 w-6 text-[#00C2A8] shrink-0 mt-0.5" />
          <div>
            <h4 className="font-heading font-bold text-base text-white mb-1">
              Don&apos;t see your neighborhood?
            </h4>
            <p className="font-sans text-sm text-white/60 leading-relaxed mb-4">
              We expand based on demand. If you and your neighbors are interested in service, email us to get added to the priority waitlist.
            </p>
            <a
              href="mailto:support@lodvalet.com?subject=Expansion%20Request"
              className="font-sans font-semibold text-xs text-[#00C2A8] hover:underline"
            >
              Submit Expansion Request →
            </a>
          </div>
        </Reveal>
      </section>

      {/* CTA Section */}
      <section className="bg-white text-[#0A1628] py-20 text-center relative border-t border-[#F4F6F8]">
        <div className="max-w-[1280px] mx-auto px-4 relative z-10">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#0A1628] leading-tight mb-4">
            Ready to get your time back?
          </h2>
          <p className="font-heading font-normal text-base md:text-lg text-[#0A1628]/65 mb-8 max-w-lg mx-auto">
            Schedule a pickup in 60 seconds and stopped losing your weekends.
          </p>
          <Link
            href="/order"
            className="inline-flex font-heading font-bold text-base bg-[#00C2A8] text-[#0A1628] px-10 py-4 rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-all text-center cursor-pointer shadow-md shadow-[#00C2A8]/10"
          >
            Schedule Your Pickup
          </Link>
        </div>
      </section>
    </div>
  );
}
