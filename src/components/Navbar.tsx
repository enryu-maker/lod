"use client";
 
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { appleEase } from "@/lib/motion";

type NavbarProps = {
  /** Auth pages: skip scroll-shrink styling */
  embedded?: boolean;
};

export default function Navbar({ embedded = false }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const reduceMotion = useReducedMotion();
 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  const compact = !embedded && isScrolled;

  return (
    <motion.header
      initial={reduceMotion ? false : { opacity: 0, y: -12 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: appleEase }}
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        compact
          ? "bg-[#0A1628CC]/80 border-b border-outline-variant/30 backdrop-blur-xl py-4 shadow-lg shadow-surface-container-lowest/20"
          : "bg-[#0A1628CC] py-6 border-b border-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-[120px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="LOD Logo"
            width={100}
            height={28}
            priority
            className="h-7 md:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </Link>
 
        {/* Center Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href="/how-it-works"
            className="font-sans text-sm font-medium text-on-surface-variant hover:text-primary transition-colors duration-200"
          >
            How It Works
          </Link>
          <Link
            href="/streak"
            className="font-sans text-sm font-medium text-on-surface-variant hover:text-primary transition-colors duration-200"
          >
            Loyalty
          </Link>
          <Link
            href="/#pricing"
            className="font-sans text-sm font-medium text-on-surface-variant hover:text-primary transition-colors duration-200"
          >
            Pricing
          </Link>
          <Link
            href="/#areas"
            className="font-sans text-sm font-medium text-on-surface-variant hover:text-primary transition-colors duration-200"
          >
            Areas
          </Link>
          <Link
            href="/#faq"
            className="font-sans text-sm font-medium text-on-surface-variant hover:text-primary transition-colors duration-200"
          >
            FAQ
          </Link>
          <Link
            href="/about"
            className="font-sans text-sm font-medium text-on-surface-variant hover:text-primary transition-colors duration-200"
          >
            About
          </Link>
        </nav>
 
        {/* Right Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
            href="/login"
            className="font-sans text-sm font-medium text-white hover:text-primary transition-colors duration-200"
          >
            Log In
          </Link>
          <Link
            href="/#schedule"
            className="font-sans text-xs font-medium uppercase tracking-wider bg-primary text-on-primary hover:bg-primary-container px-6 py-3 rounded-lg transition-all duration-200 hover:scale-[1.03]"
          >
            Schedule Pickup
          </Link>
        </div>
 
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-on-surface focus:outline-none p-1"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-primary" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6" aria-hidden="true" />
          )}
        </button>
      </div>
 
      {/* Mobile Drawer Navigation */}
      <div
        className={`absolute inset-x-0 top-full bg-surface-container border-b border-outline-variant/40 z-40 transition-all duration-300 lg:hidden ease-in-out ${
          isOpen
            ? "max-h-[400px] opacity-100 py-6 visible"
            : "max-h-0 opacity-0 overflow-hidden invisible"
        }`}
      >
        <nav className="flex flex-col items-center gap-5 px-5">
          <Link
            href="/how-it-works"
            onClick={() => setIsOpen(false)}
            className="font-sans text-base font-medium text-on-surface-variant hover:text-primary transition-colors w-full text-center py-2"
          >
            How It Works
          </Link>
          <Link
            href="/streak"
            onClick={() => setIsOpen(false)}
            className="font-sans text-base font-medium text-on-surface-variant hover:text-primary transition-colors w-full text-center py-2"
          >
            Loyalty
          </Link>
          <Link
            href="/#pricing"
            onClick={() => setIsOpen(false)}
            className="font-sans text-base font-medium text-on-surface-variant hover:text-primary transition-colors w-full text-center py-2"
          >
            Pricing
          </Link>
          <Link
            href="/#areas"
            onClick={() => setIsOpen(false)}
            className="font-sans text-base font-medium text-on-surface-variant hover:text-primary transition-colors w-full text-center py-2"
          >
            Areas
          </Link>
          <Link
            href="/#faq"
            onClick={() => setIsOpen(false)}
            className="font-sans text-base font-medium text-on-surface-variant hover:text-primary transition-colors w-full text-center py-2"
          >
            FAQ
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="font-sans text-base font-medium text-on-surface-variant hover:text-primary transition-colors w-full text-center py-2"
          >
            About
          </Link>
          <div className="h-[1px] w-full bg-outline-variant/30 my-2"></div>
          <div className="flex flex-col items-center gap-4 w-full px-4">
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="font-sans text-base font-medium text-white hover:text-primary transition-colors"
            >
              Log In
            </Link>
            <Link
              href="/#schedule"
              onClick={() => setIsOpen(false)}
              className="font-sans text-xs font-medium uppercase tracking-wider bg-primary text-on-primary hover:bg-primary-container px-8 py-3.5 rounded-lg transition-all w-full text-center"
            >
              Schedule Pickup
            </Link>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
