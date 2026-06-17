import React from "react";
import Link from "next/link";
import { AtSign, Phone } from "lucide-react";
import LodWordmark from "@/components/LodWordmark";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const brandLinkClass =
  "font-heading font-normal text-sm text-white/55 hover:text-white transition-colors";

const navLinkClass =
  "font-heading font-normal text-sm text-white/55 hover:text-white transition-colors";

const columnTitleClass =
  "font-heading font-semibold text-sm text-white mb-4";

export default function Footer() {
  return (
    <Reveal as="footer" className="bg-[#0A1628] border-t border-white/[0.08] pt-[72px] pb-10">
      <div className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-[120px]">
        <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-12">
          <StaggerItem className="col-span-2 lg:col-span-1 flex flex-col items-start">
            <Link href="/" className="mb-6 block">
              <LodWordmark className="h-7 w-auto" />
            </Link>
            <p className={`${brandLinkClass} mb-1`}>We handle it.</p>
            <p className={`${brandLinkClass} mb-6`}>Clean. Simple. On Demand.</p>
            <a
              href="https://instagram.com/lodvalet"
              target="_blank"
              rel="noopener noreferrer"
              className={`${brandLinkClass} flex items-center gap-2 mb-3`}
            >
              <AtSign className="w-4 h-4 shrink-0" aria-hidden="true" />
              @lodvalet
            </a>
            <a href="tel:8572800992" className={`${brandLinkClass} flex items-center gap-2`}>
              <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
              (857) 280-0992
            </a>
          </StaggerItem>

          <StaggerItem>
            <h4 className={columnTitleClass}>Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/how-it-works" className={navLinkClass}>
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className={navLinkClass}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/areas" className={navLinkClass}>
                  Service Areas
                </Link>
              </li>
              <li>
                <Link href="/faq" className={navLinkClass}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/founding-member" className={navLinkClass}>
                  Founding Member
                </Link>
              </li>
            </ul>
          </StaggerItem>

          <StaggerItem>
            <h4 className={columnTitleClass}>Account</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/signup" className={navLinkClass}>
                  Sign Up
                </Link>
              </li>
              <li>
                <Link href="/login" className={navLinkClass}>
                  Sign In
                </Link>
              </li>
              <li>
                <Link href="/streak" className={navLinkClass}>
                  Streak Program
                </Link>
              </li>
              <li>
                <Link href="/referral" className={navLinkClass}>
                  Referral Program
                </Link>
              </li>
              <li>
                <Link href="/account/streak" className={navLinkClass}>
                  My Streak
                </Link>
              </li>
              <li>
                <Link href="/account/referrals" className={navLinkClass}>
                  My Referrals
                </Link>
              </li>
            </ul>
          </StaggerItem>

          <StaggerItem>
            <h4 className={columnTitleClass}>Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className={navLinkClass}>
                  About LOD
                </Link>
              </li>
              <li>
                <Link href="/contact" className={navLinkClass}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/prohibited-items" className={navLinkClass}>
                  Prohibited Items
                </Link>
              </li>
              <li>
                <Link href="/privacy" className={navLinkClass}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className={navLinkClass}>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className={navLinkClass}>
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/garment-protection" className={navLinkClass}>
                  Garment Protection
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className={navLinkClass}>
                  Accessibility
                </Link>
              </li>
            </ul>
          </StaggerItem>
        </Stagger>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.08] pt-8 space-y-3">
          <p className="font-sans font-normal text-xs text-white/30">
            © 2026 LOD LLC. Boston, MA. All rights reserved.
          </p>
          
        </div>
      </div>
    </Reveal>
  );
}
