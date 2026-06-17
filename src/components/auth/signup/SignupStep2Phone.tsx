"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  digitsOnlyPhone,
  formatPhoneDisplay,
  LOCKOUT_MINUTES,
  MAX_OTP_ATTEMPTS,
  RESEND_SECONDS,
} from "./signup-utils";

type SignupStep2PhoneProps = {
  onVerified: (phone: string) => void;
};

export default function SignupStep2Phone({ onVerified }: SignupStep2PhoneProps) {
  const [phoneDigits, setPhoneDigits] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [activeIndex, setActiveIndex] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [lockoutUntil, setLockoutUntil] = useState<number | null>(null);
  const [lockoutRemaining, setLockoutRemaining] = useState(0);
  const [resendSeconds, setResendSeconds] = useState(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const formattedPhone = formatPhoneDisplay(phoneDigits);
  const isLockedOut = lockoutUntil !== null;
  const otpComplete = otp.every((d) => d.length === 1);

  useEffect(() => {
    if (!lockoutUntil) return;
    const tick = () => {
      const remaining = Math.max(0, lockoutUntil - Date.now());
      setLockoutRemaining(remaining);
      if (remaining === 0) {
        setLockoutUntil(null);
        setAttempts(0);
      }
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [lockoutUntil]);

  useEffect(() => {
    if (resendSeconds <= 0) return;
    const id = setInterval(() => {
      setResendSeconds((s) => Math.max(0, s - 1));
    }, 1000);
    return () => clearInterval(id);
  }, [resendSeconds]);

  const handlePhoneChange = (value: string) => {
    setPhoneDigits(digitsOnlyPhone(value));
  };

  const handleSendCode = () => {
    if (phoneDigits.length !== 10 || isLockedOut) return;
    setCodeSent(true);
    setOtp(Array(6).fill(""));
    setActiveIndex(0);
    setResendSeconds(RESEND_SECONDS);
    setTimeout(() => inputRefs.current[0]?.focus(), 0);
  };

  const handleOtpChange = (index: number, value: string) => {
    const digit = value.replace(/\D/g, "").slice(-1);
    const next = [...otp];
    next[index] = digit;
    setOtp(next);
    if (digit && index < 5) {
      setActiveIndex(index + 1);
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      setActiveIndex(index - 1);
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpPaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!pasted) return;
    const next = Array(6).fill("");
    pasted.split("").forEach((d, i) => {
      next[i] = d;
    });
    setOtp(next);
    const focusIdx = Math.min(pasted.length, 5);
    setActiveIndex(focusIdx);
    inputRefs.current[focusIdx]?.focus();
  };

  const handleVerify = useCallback(() => {
    if (!otpComplete || isLockedOut) return;

    const code = otp.join("");

    // Demo: "000000" simulates a failed attempt for lockout testing
    if (code === "000000") {
      const nextAttempts = attempts + 1;
      setAttempts(nextAttempts);
      setOtp(Array(6).fill(""));
      setActiveIndex(0);
      inputRefs.current[0]?.focus();
      if (nextAttempts >= MAX_OTP_ATTEMPTS) {
        setLockoutUntil(Date.now() + LOCKOUT_MINUTES * 60 * 1000);
      }
      return;
    }

    onVerified(phoneDigits);
  }, [attempts, isLockedOut, onVerified, otp, otpComplete, phoneDigits]);

  const handleResend = () => {
    if (resendSeconds > 0 || isLockedOut) return;
    setOtp(Array(6).fill(""));
    setActiveIndex(0);
    setResendSeconds(RESEND_SECONDS);
    inputRefs.current[0]?.focus();
  };

  const formatLockoutTime = (ms: number) => {
    const totalSec = Math.ceil(ms / 1000);
    const min = Math.floor(totalSec / 60);
    const sec = totalSec % 60;
    return `${min}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <>
      <h2 className="font-heading font-bold text-[28px] leading-tight text-[#0A1628] mb-3">
        Verify your number.
      </h2>
      <p className="font-heading font-normal text-base text-[rgba(10,22,40,0.65)] mb-8 leading-relaxed">
        We send order updates via text. Required for all accounts.
      </p>

      {isLockedOut ? (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-center">
          <p className="font-heading font-normal text-sm text-red-600 mb-2">
            Too many attempts. Try again in 15 minutes.
          </p>
          <p className="font-sans font-medium text-lg text-red-600 tabular-nums">
            {formatLockoutTime(lockoutRemaining)}
          </p>
        </div>
      ) : (
        <>
          <div className="mb-5">
            <label
              htmlFor="phone"
              className="font-sans font-medium text-sm text-[#0A1628] mb-2 block"
            >
              Phone number
            </label>
            <div className="flex h-12 rounded-lg border border-[#E8EAED] overflow-hidden">
              <span className="inline-flex items-center px-4 bg-[#F4F6F8] border-r border-[#E8EAED] font-sans font-normal text-sm text-[#6B7280] shrink-0">
                +1
              </span>
              <input
                id="phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel-national"
                value={formattedPhone}
                onChange={(e) => handlePhoneChange(e.target.value)}
                disabled={codeSent}
                placeholder="(555) 555-0100"
                className="flex-1 px-4 font-sans font-normal text-sm text-[#0A1628] placeholder:text-[#6B7280] focus:outline-none disabled:bg-[#F4F6F8] disabled:text-[#6B7280]"
              />
            </div>
          </div>

          {!codeSent ? (
            <button
              type="button"
              onClick={handleSendCode}
              disabled={phoneDigits.length !== 10}
              className="w-full font-sans text-sm font-medium uppercase tracking-wider bg-[#00C2A8] text-[#00382f] hover:bg-[#00C2A8]/90 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#00C2A8] px-8 py-4 rounded-lg transition-all duration-200"
            >
              Send Code
            </button>
          ) : (
            <div className="space-y-6">
              <p className="font-sans font-normal text-sm text-[#10B981]">
                Code sent to {formattedPhone}
              </p>

              <div
                className="flex justify-between gap-2"
                onPaste={handleOtpPaste}
              >
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(index, e)}
                    onFocus={() => setActiveIndex(index)}
                    aria-label={`Digit ${index + 1}`}
                    className={`w-12 h-14 sm:w-[48px] sm:h-[56px] rounded-lg text-center font-heading font-bold text-xl transition-all ${
                      digit
                        ? "bg-[#0A1628] text-white border-2 border-[#0A1628]"
                        : activeIndex === index
                          ? "bg-white text-[#0A1628] border-2 border-[#00C2A8]"
                          : "bg-[#F4F6F8] text-[#0A1628] border border-[#E8EAED]"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={handleVerify}
                disabled={!otpComplete}
                className="w-full font-sans text-sm font-medium uppercase tracking-wider bg-[#00C2A8] text-[#00382f] hover:bg-[#00C2A8]/90 disabled:opacity-50 disabled:cursor-not-allowed px-8 py-4 rounded-lg transition-all duration-200"
              >
                Verify
              </button>

              <div className="text-center">
                {resendSeconds > 0 ? (
                  <p className="font-sans font-normal text-sm text-[#6B7280]">
                    Resend code in {resendSeconds}s
                  </p>
                ) : (
                  <button
                    type="button"
                    onClick={handleResend}
                    className="font-sans font-medium text-sm text-[#00C2A8] hover:text-[#00C2A8]/80 transition-colors"
                  >
                    Resend code
                  </button>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
