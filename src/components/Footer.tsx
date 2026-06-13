import React from "react";
import Link from "next/link";
import Image from "next/image";
 
export default function Footer() {
  return (
    <footer className="bg-[#0A1628] text-on-surface border-t border-outline-variant/20 pt-20 pb-10">
      <div className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-[120px]">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="mb-6 block">
              <Image
                src="/logo.png"
                alt="LOD Logo"
                width={100}
                height={28}
                className="h-7 md:h-10 w-auto object-contain"
              />
            </Link>
            <p className="font-sans text-sm text-on-surface-variant leading-relaxed mb-2">
              We handle it.
            </p>
            <p className="font-sans text-sm text-on-surface-variant leading-relaxed mb-8">
              Clean. Simple. On Demand.
            </p>
            <a
              href="tel:8572800992"
              className="font-sans text-sm font-semibold text-white hover:text-primary transition-colors mb-4 block"
            >
              (857) 280-0992
            </a>
            <a
              href="https://instagram.com/lodvalet"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group font-sans text-sm text-on-surface hover:text-primary transition-colors"
            >
              <span className="text-primary group-hover:scale-110 transition-transform duration-200">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </span>
              @lodvalet
            </a>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Column 1: Services */}
            <div>
              <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-white mb-6">
                Services
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#how-it-works"
                    className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#areas"
                    className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors"
                  >
                    Service Areas
                  </Link>
                </li>
                <li>
                  <Link
                    href="#faq"
                    className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="#founding-member"
                    className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors"
                  >
                    Founding Member
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Account */}
            <div>
              <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-white mb-6">
                Account
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#signup"
                    className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors"
                  >
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link
                    href="#signin"
                    className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors"
                  >
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link
                    href="#my-orders"
                    className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors"
                  >
                    My Orders
                  </Link>
                </li>
                <li>
                  <Link
                    href="#streak"
                    className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors"
                  >
                    Streak Program
                  </Link>
                </li>
                <li>
                  <Link
                    href="#referral"
                    className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors"
                  >
                    Referral Program
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-white mb-6">
                Company
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#about"
                    className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors"
                  >
                    About LOD
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#prohibited"
                    className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors"
                  >
                    Prohibited Items
                  </Link>
                </li>
                <li>
                  <Link
                    href="#privacy"
                    className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#terms"
                    className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#refund"
                    className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors"
                  >
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="h-[1px] w-full bg-outline-variant/20 mb-8"></div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-sans text-xs text-on-surface-variant text-center sm:text-left">
            © 2026 LOD LLC. Boston, MA. All rights reserved.
          </span>
          <span className="font-sans text-xs text-on-surface-variant uppercase tracking-widest">
            EIN 42-2647554
          </span>
        </div>
      </div>
    </footer>
  );
}
