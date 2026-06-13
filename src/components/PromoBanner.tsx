"use client";

import React, { useState } from "react";

export default function PromoBanner() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    // Basic email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-primary text-on-primary relative overflow-hidden">
      {/* Background circular ripples for luxury look */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 rounded-full border border-on-primary/10 pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full border border-on-primary/5 pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 rounded-full border border-on-primary/10 pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-[120px] relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Title */}
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl leading-tight text-on-primary mb-4">
            First 100 Customers Get Their First Bag Free
          </h2>

          {/* Subtext */}
          <p className="font-sans text-base md:text-lg text-on-primary/80 font-medium mb-8">
            No credit card needed. Your LOD Starter Kit is included.
          </p>

          {/* Form */}
          {submitted ? (
            <div className="bg-surface/10 border border-on-primary/20 rounded-xl p-6 max-w-md mx-auto backdrop-blur-sm">
              <p className="font-sans text-base font-bold text-on-primary flex items-center justify-center gap-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Offer Claimed! Check your inbox soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-stretch justify-center gap-4 max-w-xl mx-auto"
            >
              <div className="flex-1 flex flex-col items-start">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  placeholder="Enter your email"
                  className="w-full px-5 py-4 rounded-lg bg-white text-surface-container-lowest font-sans placeholder-surface-bright/50 focus:outline-none focus:ring-2 focus:ring-[#00c2a8] border-none shadow-inner"
                />
                {error && (
                  <span className="text-xs font-bold text-red-900 mt-2 ml-2">
                    {error}
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="px-8 py-4 bg-surface text-white hover:bg-surface-bright font-sans text-sm font-bold uppercase tracking-wider rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02] shrink-0"
              >
                Claim Offer
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
