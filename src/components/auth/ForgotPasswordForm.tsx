"use client";

import Link from "next/link";
import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import AuthShell from "@/components/auth/AuthShell";
import { FadeIn } from "@/components/motion/Reveal";
import { authInputClass } from "@/components/auth/shared";
import { AuthError, sendPasswordReset } from "@/lib/auth/login";

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function ForgotPasswordFormInner() {
  const searchParams = useSearchParams();
  const initialEmail = searchParams.get("email") ?? "";

  const [email, setEmail] = useState(initialEmail);
  const [error, setError] = useState<string | null>(null);
  const [sentTo, setSentTo] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const trimmed = email.trim();
    if (!trimmed) {
      setError("Please enter your email address.");
      return;
    }
    if (!isValidEmail(trimmed)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    try {
      await sendPasswordReset(trimmed);
      setSentTo(trimmed);
    } catch (err) {
      if (err instanceof AuthError && err.code === "auth/not-configured") {
        setError(
          "Password reset is not available yet. Contact hello@lodvalet.com."
        );
      } else {
        setError("Unable to send reset link. Check your email and try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthShell
      variant="forgot-password"
      footer={
        <p className="text-center font-heading font-normal text-sm text-[#6B7280]">
          Remember your password?{" "}
          <Link
            href="/login"
            className="font-sans font-medium text-[#00C2A8] hover:text-[#00C2A8]/80 transition-colors"
          >
            Sign in
          </Link>
        </p>
      }
    >
      <FadeIn>
        <h2 className="font-heading font-bold text-[28px] leading-tight text-[#0A1628] mb-2">
          Reset your password.
        </h2>
        <p className="font-heading font-normal text-base text-[rgba(10,22,40,0.65)] mb-6">
          We&apos;ll email you a link to choose a new password.
        </p>

        {sentTo ? (
          <div className="space-y-6">
            <div
              role="status"
              className="rounded-lg border border-[#10B981]/30 bg-[#10B981]/10 px-4 py-3"
            >
              <p className="font-sans font-normal text-sm text-[#10B981]">
                Reset link sent to {sentTo}
              </p>
            </div>
            <p className="font-heading font-normal text-sm text-[#6B7280] leading-relaxed">
              Check your inbox and spam folder. The link expires after a short
              time for security.
            </p>
            <Link
              href="/login"
              className="block w-full text-center font-sans text-sm font-medium uppercase tracking-wider bg-[#00C2A8] text-[#00382f] hover:bg-[#00C2A8]/90 px-8 py-4 rounded-lg transition-all duration-200 shadow-md shadow-[#00C2A8]/20"
            >
              Back to Sign In
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            {error && (
              <div
                role="alert"
                className="rounded-lg border border-red-200 bg-red-50 px-4 py-3"
              >
                <p className="font-sans font-normal text-sm text-red-600">
                  {error}
                </p>
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="font-sans font-medium text-sm text-[#0A1628] mb-2 block"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                autoComplete="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError(null);
                }}
                className={authInputClass}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full font-sans text-sm font-medium uppercase tracking-wider bg-[#00C2A8] text-[#00382f] hover:bg-[#00C2A8]/90 disabled:opacity-60 px-8 py-4 rounded-lg transition-all duration-200 hover:scale-[1.01] shadow-md shadow-[#00C2A8]/20"
            >
              {isSubmitting ? "Sending..." : "Send Reset Link"}
            </button>
          </form>
        )}
      </FadeIn>
    </AuthShell>
  );
}

export default function ForgotPasswordForm() {
  return (
    <Suspense
      fallback={
        <AuthShell variant="forgot-password">
          <p className="font-heading font-normal text-sm text-[#6B7280] text-center">
            Loading...
          </p>
        </AuthShell>
      }
    >
      <ForgotPasswordFormInner />
    </Suspense>
  );
}
