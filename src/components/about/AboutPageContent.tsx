"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { pressableProps } from "@/lib/motion";
import {
  aboutValues,
  companyDetails,
  founderParagraphs,
} from "@/lib/about-content";

const sectionX = "max-w-[1280px] mx-auto px-4 md:px-12 lg:px-20";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans font-medium text-[11px] uppercase tracking-[0.15em] text-[#00C2A8] mb-4">
      {children}
    </p>
  );
}

export default function AboutPageContent() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#0A1628] py-[72px] md:py-[120px]">
        <div className={sectionX}>
          <Eyebrow>Our Story</Eyebrow>
          <h1 className="font-heading font-bold text-[44px] md:text-[72px] leading-[1.05] text-white mb-6">
            We are LOD.
          </h1>
          <p className="font-heading font-normal text-lg md:text-[22px] text-white/65 max-w-[600px] leading-relaxed">
            We&apos;re not a laundry company.
            <br />
            We&apos;re a time company.
          </p>
        </div>
      </section>

      {/* Mission quote */}
      <Reveal as="section" className="py-[60px] md:py-[100px]">
        <div className={`${sectionX} text-center`}>
          <div
            className="font-heading font-bold text-[80px] leading-none text-[rgba(0,194,168,0.15)] mb-2 select-none"
            aria-hidden="true"
          >
            &ldquo;
          </div>
          <blockquote className="font-heading font-bold text-[22px] md:text-[32px] leading-[1.4] text-[#0A1628] max-w-[800px] mx-auto">
            Every hour LOD saves is an hour someone spends with their family,
            their passion, their career, their health.
          </blockquote>
          <p className="font-sans font-normal text-sm text-[#6B7280] tracking-wide mt-8">
            The LOD Standard
          </p>
        </div>
      </Reveal>

      {/* Founder */}
      <Reveal as="section" className="bg-[#F4F6F8] py-[60px] md:py-[100px]">
        <div className={`${sectionX} grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start`}>
          <div className="lg:col-span-2">
            <div className="aspect-[4/5] max-w-[400px] mx-auto lg:mx-0 rounded-2xl bg-[#0A1628] overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] to-[#00C2A8]/30" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white/40">
                <span className="font-heading font-bold text-6xl mb-2">HS</span>
                <span className="font-sans text-xs uppercase tracking-widest">
                  Founder Photo
                </span>
              </div>
            </div>
            <div className="mt-6 max-w-[400px] mx-auto lg:mx-0">
              <p className="font-heading font-bold text-lg text-[#0A1628]">
                Hem Shah
              </p>
              <p className="font-sans font-normal text-sm text-[#6B7280] mt-1">
                Founder, LOD LLC
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <Eyebrow>The Founder</Eyebrow>
            <h2 className="font-heading font-bold text-[26px] md:text-[36px] text-[#0A1628] mb-6 leading-tight">
              Built by someone who got tired of lost weekends.
            </h2>
            <div className="space-y-5">
              {founderParagraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="font-heading font-normal text-base md:text-lg text-[rgba(10,22,40,0.70)] leading-[1.7]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-7 pt-5 border-t border-[#E8EAED]">
              <p className="font-heading font-bold text-lg text-[#0A1628] italic">
                Hem Shah
              </p>
              <p className="font-sans font-normal text-[13px] text-[#6B7280] mt-1">
                Founder, LOD LLC · Boston, MA · Est. 2026
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Mission + Vision */}
      <Reveal as="section" className="py-[60px] md:py-[100px]">
        <div className={`${sectionX} grid grid-cols-1 md:grid-cols-2 gap-6`}>
          <div className="rounded-2xl bg-[#0A1628] p-8 md:p-10">
            <Eyebrow>Mission</Eyebrow>
            <p className="font-heading font-normal text-lg md:text-xl text-white leading-[1.65]">
              LOD exists to give people back the hours they never should have
              lost, starting with laundry, so they can spend their time on what
              actually matters.
            </p>
          </div>
          <div className="rounded-2xl border border-[rgba(0,194,168,0.2)] bg-[rgba(0,194,168,0.06)] p-8 md:p-10">
            <Eyebrow>Vision</Eyebrow>
            <p className="font-heading font-normal text-lg md:text-xl text-[#0A1628] leading-[1.65]">
              The operating system for everyday life. The platform that runs in
              the background so your life just works. Every service you need,
              handled, on demand, premium, seamless. Starting in Boston. Built
              for everywhere.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Values */}
      <Reveal as="section" className="bg-[#F4F6F8] py-[60px] md:py-[100px]">
        <div className={sectionX}>
          <Eyebrow>Our Values</Eyebrow>
          <h2 className="font-heading font-bold text-[32px] md:text-[48px] text-[#0A1628] mb-12 leading-tight">
            What drives everything we do.
          </h2>
          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutValues.map((value) => (
              <StaggerItem
                key={value.number}
                className="bg-white rounded-2xl p-8 border-t-[3px] border-t-[#00C2A8]"
              >
                <span className="font-sans font-bold text-[11px] tracking-[0.1em] text-[#00C2A8]">
                  {value.number}
                </span>
                <h3 className="font-heading font-bold text-xl text-[#0A1628] my-2">
                  {value.title}
                </h3>
                <p className="font-heading font-normal text-[15px] text-[rgba(10,22,40,0.65)] leading-[1.6]">
                  {value.body}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Reveal>

      {/* Company details */}
      <Reveal as="section" className="py-16 md:py-20">
        <div className={sectionX}>
          <h2 className="font-heading font-bold text-[32px] text-[#0A1628] mb-10">
            Company details
          </h2>
          <dl className="max-w-2xl">
            {companyDetails.map((row, i) => (
              <div
                key={row.label}
                className={`flex flex-col sm:flex-row sm:justify-between gap-1 py-4 ${
                  i > 0 ? "border-t border-[#F4F6F8]" : ""
                }`}
              >
                <dt className="font-heading font-normal text-base text-[#6B7280]">
                  {row.label}
                </dt>
                <dd className="font-heading font-normal text-base text-[#0A1628] sm:text-right">
                  {"href" in row && row.href ? (
                    <a
                      href={row.href}
                      className="text-[#00C2A8] hover:underline"
                    >
                      {row.value}
                    </a>
                  ) : (
                    row.value
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-14">
            <h3 className="font-heading font-bold text-[22px] text-[#0A1628] mb-3">
              Press and media
            </h3>
            <p className="font-heading font-normal text-base text-[#6B7280] max-w-xl">
              For press inquiries, partnership questions, or media requests
              contact{" "}
              <a
                href="mailto:hem@lodvalet.com"
                className="text-[#00C2A8] hover:underline"
              >
                hem@lodvalet.com
              </a>
            </p>
          </div>
        </div>
      </Reveal>

      {/* Final CTA */}
      <section className="bg-[#0A1628] py-16 md:py-20 text-center">
        <div className={sectionX}>
          <h2 className="font-heading font-bold text-[32px] md:text-[48px] text-white mb-4 leading-tight">
            Ready to get your time back?
          </h2>
          <p className="font-heading font-normal text-lg text-white/65 mb-10 max-w-lg mx-auto">
            Join Boston professionals who&apos;ve stopped doing laundry.
          </p>
          <motion.div {...(reduceMotion ? {} : pressableProps)}>
            <Link
              href="/order"
              className="inline-flex font-heading font-bold text-lg bg-[#00C2A8] text-[#0A1628] px-12 py-[18px] rounded-lg hover:bg-[#00C2A8]/90 transition-colors"
            >
              Schedule Your First Pickup
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
