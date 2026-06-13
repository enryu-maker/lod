"use client";

import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import AuthShell from "@/components/auth/AuthShell";
import { FadeIn } from "@/components/motion/Reveal";
import { authInputClass, GoogleIcon, OrDivider } from "@/components/auth/shared";
import {
  AuthError,
  loginWithEmail,
  loginWithGoogle,
} from "@/lib/auth/login";

type LoginAlert =
  | { type: "credentials" }
  | { type: "suspended" }
  | { type: "pending" }
  | { type: "generic"; message: string };

function LoginFormInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") ?? "/account";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [alert, setAlert] = useState<LoginAlert | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const clearAlerts = () => setAlert(null);

  const handleAuthSuccess = () => {
    router.push(redirectTo);
  };

  const handleAuthFailure = (error: unknown) => {
    if (error instanceof AuthError) {
      if (error.code === "auth/account-suspended") {
        setAlert({ type: "suspended" });
        return;
      }
      if (error.code === "auth/account-pending") {
        setAlert({ type: "pending" });
        return;
      }
      if (error.code === "auth/not-configured") {
        setAlert({
          type: "generic",
          message: "Sign in is not available yet. Please try again later.",
        });
        return;
      }
    }

    setAlert({ type: "credentials" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearAlerts();
    setIsSubmitting(true);

    try {
      await loginWithEmail(email.trim(), password);
      handleAuthSuccess();
    } catch (error) {
      handleAuthFailure(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    clearAlerts();
    setIsGoogleLoading(true);

    try {
      await loginWithGoogle();
      handleAuthSuccess();
    } catch (error) {
      handleAuthFailure(error);
    } finally {
      setIsGoogleLoading(false);
    }
  };

  return (
    <AuthShell
      variant="login"
      footer={
        <p className="text-center font-heading font-normal text-sm text-[#6B7280]">
          New to LOD?{" "}
          <Link
            href="/signup"
            className="font-sans font-medium text-[#00C2A8] hover:text-[#00C2A8]/80 transition-colors"
          >
            Create an account
          </Link>
        </p>
      }
    >
      <FadeIn>
      <h2 className="font-heading font-bold text-[28px] leading-tight text-[#0A1628] mb-6">
        Welcome back.
      </h2>

      {alert?.type === "credentials" && (
        <div
          role="alert"
          className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3"
        >
          <p className="font-sans font-normal text-sm text-red-600">
            Email or password is incorrect. Please try again.
          </p>
        </div>
      )}

      {alert?.type === "suspended" && (
        <div
          role="alert"
          className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3"
        >
          <p className="font-sans font-normal text-sm text-red-600 leading-relaxed">
            Your account has been suspended.
            <br />
            Contact{" "}
            <a
              href="mailto:hello@lodvalet.com"
              className="text-[#00C2A8] hover:underline"
            >
              hello@lodvalet.com
            </a>{" "}
            for help.
          </p>
        </div>
      )}

      {alert?.type === "pending" && (
        <div
          role="alert"
          className="mb-5 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3"
        >
          <p className="font-sans font-normal text-sm text-amber-800 leading-relaxed">
            Your application is under review.
            <br />
            We&apos;ll be in touch within 48 hours.
          </p>
        </div>
      )}

      {alert?.type === "generic" && (
        <div
          role="alert"
          className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3"
        >
          <p className="font-sans font-normal text-sm text-red-600">
            {alert.message}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
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
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (alert?.type === "credentials") clearAlerts();
            }}
            className={authInputClass}
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label
              htmlFor="password"
              className="font-sans font-medium text-sm text-[#0A1628]"
            >
              Password
            </label>
            <Link
              href={
                email.trim()
                  ? `/forgot-password?email=${encodeURIComponent(email.trim())}`
                  : "/forgot-password"
              }
              className="font-sans font-medium text-[13px] text-[#00C2A8] hover:text-[#00C2A8]/80 transition-colors"
            >
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (alert?.type === "credentials") clearAlerts();
              }}
              className={`${authInputClass} pr-12`}
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#6B7280] hover:text-[#0A1628] transition-colors"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Eye className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full font-sans text-sm font-medium uppercase tracking-wider bg-[#00C2A8] text-[#00382f] hover:bg-[#00C2A8]/90 disabled:opacity-60 disabled:hover:scale-100 px-8 py-4 rounded-lg transition-all duration-200 hover:scale-[1.01] shadow-md shadow-[#00C2A8]/20"
        >
          {isSubmitting ? "Signing in..." : "Sign In"}
        </button>
      </form>

      <OrDivider />

      <button
        type="button"
        onClick={handleGoogleSignIn}
        disabled={isGoogleLoading}
        className="w-full flex items-center justify-center gap-3 h-12 px-4 rounded-lg bg-white border border-[#E8EAED] font-sans font-medium text-sm text-[#0A1628] hover:bg-[#F4F6F8] transition-colors disabled:opacity-60"
      >
        <GoogleIcon />
        {isGoogleLoading ? "Continuing..." : "Continue with Google"}
      </button>
      </FadeIn>
    </AuthShell>
  );
}

export default function LoginForm() {
  return (
    <Suspense
      fallback={
        <AuthShell>
          <p className="font-heading font-normal text-sm text-[#6B7280] text-center">
            Loading...
          </p>
        </AuthShell>
      }
    >
      <LoginFormInner />
    </Suspense>
  );
}
