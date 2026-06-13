"use client";
 
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
 
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
 
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
 
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0E1513CC]/80 border-b border-outline-variant/30 backdrop-blur-xl py-4 shadow-lg shadow-surface-container-lowest/20"
          : "bg-[#0E1513CC] py-6 border-b border-transparent"
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
            href="/#how-it-works"
            className="font-sans text-sm font-medium text-on-surface-variant hover:text-primary transition-colors duration-200"
          >
            How It Works
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
            href="/#about"
            className="font-sans text-sm font-medium text-on-surface-variant hover:text-primary transition-colors duration-200"
          >
            About
          </Link>
        </nav>
 
        {/* Right Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
            href="/#login"
            className="font-sans text-sm font-semibold text-white hover:text-primary transition-colors duration-200"
          >
            Log In
          </Link>
          <Link
            href="/order-step"
            className="font-sans text-xs font-bold uppercase tracking-wider bg-primary text-on-primary hover:bg-primary-container px-6 py-3 rounded-lg transition-all duration-200 hover:scale-[1.03]"
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
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>
      </div>
 
      {/* Mobile Drawer Navigation */}
      <div
        className={`fixed inset-x-0 top-[70px] bg-surface-container border-b border-outline-variant/40 z-40 transition-all duration-300 lg:hidden ease-in-out ${
          isOpen
            ? "max-h-[400px] opacity-100 py-6 visible"
            : "max-h-0 opacity-0 overflow-hidden invisible"
        }`}
      >
        <nav className="flex flex-col items-center gap-5 px-5">
          <Link
            href="/#how-it-works"
            onClick={() => setIsOpen(false)}
            className="font-sans text-base font-medium text-on-surface-variant hover:text-primary transition-colors w-full text-center py-2"
          >
            How It Works
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
            href="/#about"
            onClick={() => setIsOpen(false)}
            className="font-sans text-base font-medium text-on-surface-variant hover:text-primary transition-colors w-full text-center py-2"
          >
            About
          </Link>
          <div className="h-[1px] w-full bg-outline-variant/30 my-2"></div>
          <div className="flex flex-col items-center gap-4 w-full px-4">
            <Link
              href="/#login"
              onClick={() => setIsOpen(false)}
              className="font-sans text-base font-semibold text-white hover:text-primary transition-colors"
            >
              Log In
            </Link>
            <Link
              href="/order-step"
              onClick={() => setIsOpen(false)}
              className="font-sans text-xs font-bold uppercase tracking-wider bg-primary text-on-primary hover:bg-primary-container px-8 py-3.5 rounded-lg transition-all w-full text-center"
            >
              Schedule Pickup
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
