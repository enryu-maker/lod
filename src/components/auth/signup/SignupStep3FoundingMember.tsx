"use client";

import { Check } from "lucide-react";
import {
  FOUNDING_MEMBER_REMAINING,
} from "./signup-utils";

type SignupStep3FoundingMemberProps = {
  remaining: number;
  onAccept: () => void;
  onSkip: () => void;
  isProcessing?: boolean;
};

const benefits = [
  "10% off every order forever",
  "Priority scheduling always",
  "$5 credit on activation",
];

export default function SignupStep3FoundingMember({
  remaining,
  onAccept,
  onSkip,
  isProcessing = false,
}: SignupStep3FoundingMemberProps) {
  return (
    <>
      <h2 className="font-heading font-bold text-[28px] leading-tight text-[#0A1628] mb-6">
        One more thing.
      </h2>

      <div className="rounded-2xl bg-[#0A1628] p-7">
        <span className="inline-block font-sans font-medium text-[10px] uppercase tracking-widest text-[#0A1628] bg-[#D4A843] px-3 py-1 rounded-full mb-4">
          FIRST 500 ONLY
        </span>

        <h3 className="font-heading font-bold text-xl text-[#D4A843] mb-2">
          LOD Founding Member, $14.99
        </h3>
        <p className="font-heading font-normal text-sm text-white/65 mb-6">
          One-time. Never charged again. Benefits forever.
        </p>

        <ul className="space-y-3 mb-6">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-center gap-3">
              <Check
                className="w-4 h-4 text-[#D4A843] shrink-0"
                strokeWidth={2.5}
                aria-hidden="true"
              />
              <span className="font-heading font-normal text-sm text-white">
                {benefit}
              </span>
            </li>
          ))}
        </ul>

        <p className="font-sans font-normal text-xs text-white/45 mb-5">
          {remaining} of 500 spots remaining
        </p>

        <button
          type="button"
          onClick={onAccept}
          disabled={isProcessing}
          className="w-full font-sans text-sm font-medium uppercase tracking-wider bg-[#D4A843] text-[#0A1628] hover:bg-[#D4A843]/90 disabled:opacity-60 px-8 py-4 rounded-lg transition-all duration-200 mb-4"
        >
          {isProcessing ? "Processing..." : "Accept for $14.99"}
        </button>

        <button
          type="button"
          onClick={onSkip}
          disabled={isProcessing}
          className="w-full font-sans font-normal text-sm text-[#6B7280] hover:text-white/80 transition-colors"
        >
          Skip for now
        </button>
      </div>
    </>
  );
}
