"use client";

import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useMemo, useState } from "react";
import { GoogleIcon, OrDivider } from "@/components/auth/shared";
import {
  getPasswordStrength,
  getPasswordStrengthColor,
  getPasswordStrengthPercent,
  getReferrerFirstName,
  validateEmail,
  validatePassword,
  type SignupAccountData,
} from "./signup-utils";

type FieldErrors = Partial<
  Record<keyof SignupAccountData, string>
>;

type SignupStep1AccountProps = {
  refCode: string | null;
  initialData: SignupAccountData;
  onContinue: (data: SignupAccountData) => void;
};

const inputBase =
  "w-full px-4 py-3.5 rounded-lg bg-[#F4F6F8] border text-[#0A1628] font-sans font-normal text-sm placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#00C2A8] focus:border-transparent transition-shadow";
const inputError = "border-red-500 focus:ring-red-500/30";
const inputNormal = "border-[#E8EAED]";

export default function SignupStep1Account({
  refCode,
  initialData,
  onContinue,
}: SignupStep1AccountProps) {
  const [form, setForm] = useState<SignupAccountData>(initialData);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [touched, setTouched] = useState<Partial<Record<keyof SignupAccountData, boolean>>>({});

  const referrerName = getReferrerFirstName(refCode);
  const passwordStrength = useMemo(
    () => getPasswordStrength(form.password),
    [form.password]
  );
  const strengthPercent = getPasswordStrengthPercent(passwordStrength);
  const strengthColor = getPasswordStrengthColor(passwordStrength);

  const validateField = (field: keyof SignupAccountData, value: string): string | undefined => {
    switch (field) {
      case "firstName":
        return value.trim() ? undefined : "First name is required";
      case "lastName":
        return value.trim() ? undefined : "Last name is required";
      case "email":
        return validateEmail(value)
          ? undefined
          : "Please enter a valid email address";
      case "password":
        return validatePassword(value)
          ? undefined
          : "Password must be at least 8 characters and include a number";
      default:
        return undefined;
    }
  };

  const handleBlur = (field: keyof SignupAccountData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, form[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (field: keyof SignupAccountData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: FieldErrors = {
      firstName: validateField("firstName", form.firstName),
      lastName: validateField("lastName", form.lastName),
      email: validateField("email", form.email),
      password: validateField("password", form.password),
    };
    setErrors(nextErrors);
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      password: true,
    });
    if (Object.values(nextErrors).some(Boolean)) return;
    onContinue(form);
  };

  const fieldClass = (field: keyof SignupAccountData) =>
    `${inputBase} ${errors[field] && touched[field] ? inputError : inputNormal}`;

  return (
    <>
      <h2 className="font-heading font-bold text-[28px] leading-tight text-[#0A1628] mb-6">
        Create your account.
      </h2>

      {referrerName && (
        <div className="flex items-start gap-3 mb-6 rounded-lg border border-[rgba(0,194,168,0.2)] bg-[rgba(0,194,168,0.08)] px-4 py-3">
          <span className="text-lg leading-none shrink-0" aria-hidden="true">
            🎁
          </span>
          <p className="font-heading font-normal text-sm text-[#0A1628] leading-relaxed">
            {referrerName} gave you a free first LOD bag. It&apos;s waiting.
          </p>
        </div>
      )}

      <button
        type="button"
        className="w-full flex items-center justify-center gap-3 px-4 py-3.5 rounded-lg bg-white border border-[#E8EAED] font-sans font-medium text-sm text-[#0A1628] hover:bg-[#F4F6F8] transition-colors"
      >
        <GoogleIcon />
        Continue with Google
      </button>

      <OrDivider />

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="firstName"
              className="font-sans font-medium text-sm text-[#0A1628] mb-2 block"
            >
              First name
            </label>
            <input
              id="firstName"
              type="text"
              autoComplete="given-name"
              value={form.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              onBlur={() => handleBlur("firstName")}
              className={fieldClass("firstName")}
            />
            {errors.firstName && touched.firstName && (
              <p className="mt-1.5 font-sans font-normal text-xs text-red-500">
                {errors.firstName}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="font-sans font-medium text-sm text-[#0A1628] mb-2 block"
            >
              Last name
            </label>
            <input
              id="lastName"
              type="text"
              autoComplete="family-name"
              value={form.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              onBlur={() => handleBlur("lastName")}
              className={fieldClass("lastName")}
            />
            {errors.lastName && touched.lastName && (
              <p className="mt-1.5 font-sans font-normal text-xs text-red-500">
                {errors.lastName}
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="font-sans font-medium text-sm text-[#0A1628] mb-2 block"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            onBlur={() => handleBlur("email")}
            className={fieldClass("email")}
          />
          {errors.email && touched.email && (
            <p className="mt-1.5 font-sans font-normal text-xs text-red-500">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="password"
            className="font-sans font-medium text-sm text-[#0A1628] mb-2 block"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              value={form.password}
              onChange={(e) => handleChange("password", e.target.value)}
              onBlur={() => handleBlur("password")}
              className={`${fieldClass("password")} pr-12`}
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
          {form.password.length > 0 && (
            <div className="mt-2 h-1.5 w-full rounded-full bg-[#E8EAED] overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-300 ease-out"
                style={{
                  width: `${strengthPercent}%`,
                  backgroundColor: strengthColor,
                }}
              />
            </div>
          )}
          {errors.password && touched.password && (
            <p className="mt-1.5 font-sans font-normal text-xs text-red-500">
              {errors.password}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full font-sans text-sm font-medium uppercase tracking-wider bg-[#00C2A8] text-[#00382f] hover:bg-[#00C2A8]/90 px-8 py-4 rounded-lg transition-all duration-200 hover:scale-[1.01] shadow-md shadow-[#00C2A8]/20"
        >
          Create Account
        </button>

        <p className="text-center font-sans text-xs text-[#6B7280] leading-relaxed">
          By creating an account, you agree to LOD&apos;s{" "}
          <Link href="/terms" target="_blank" className="text-[#00C2A8] underline hover:text-[#0A1628]">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" target="_blank" className="text-[#00C2A8] underline hover:text-[#0A1628]">
            Privacy Policy
          </Link>
          .
        </p>
      </form>
    </>
  );
}
