import React from "react";
import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

interface PromiseCard {
  title: string;
  imageSrc: string;
  alt: string;
}

export default function PhotoPromise() {
  const cards: PromiseCard[] = [
    {
      title: "Pickup Verified",
      imageSrc: "/Order-step/Image (1).png",
      alt: "Driver verifying pickup at door",
    },
    {
      title: "Intake Sorted",
      imageSrc: "/Order-step/Image (2).png",
      alt: "Laundry sorted in facility",
    },
    {
      title: "Pre-existing damage documented",
      imageSrc: "/Order-step/Image (3).png",
      alt: "Detailed inspection of garment under light",
    },
    {
      title: "Packaged & Sealed",
      imageSrc: "/Order-step/Image (4).png",
      alt: "Neatly folded and sealed laundry bundle",
    },
  ];

  return (
    <Reveal as="section" className="bg-[#0A1628] py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-[120px]">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-[40px] text-white mb-3 tracking-tight">
            Total Accountability.
          </h2>
          <p className="font-heading font-semibold text-primary text-sm md:text-base lg:text-lg tracking-wide uppercase">
            Every single step. Photographed. Timestamped. Stored.
          </p>
        </div>

        {/* Accountability Cards Grid */}
        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {cards.map((card, idx) => (
            <StaggerItem
              key={idx}
              className="group relative aspect-[3/4] w-full rounded-xl overflow-hidden shadow-sm border border-outline-variant/10 bg-surface-container-low"
            >
              {/* Image Container */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={card.imageSrc}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  priority={idx === 0}
                />
              </div>

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/85 via-[#0A1628]/30 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90" />

              {/* Overlaid Bottom Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="font-heading font-semibold text-lg md:text-xl text-white tracking-tight leading-snug">
                  {card.title}
                </h3>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Reveal>
  );
}
