export type PasswordStrength = "weak" | "good" | "strong" | "empty";

export type SignupAccountData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export const FOUNDING_MEMBER_ENABLED = true;
export const FOUNDING_MEMBER_REMAINING = 247;
export const MAX_OTP_ATTEMPTS = 3;
export const LOCKOUT_MINUTES = 15;
export const RESEND_SECONDS = 30;

const REFERRAL_NAMES: Record<string, string> = {
  jane: "Jane",
  john: "John",
  alex: "Alex",
};

export function getReferrerFirstName(refCode: string | null): string | null {
  if (!refCode) return null;
  return REFERRAL_NAMES[refCode.toLowerCase()] ?? "Your friend";
}

export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function validatePassword(password: string): boolean {
  return password.length >= 8 && /\d/.test(password);
}

export function getPasswordStrength(password: string): PasswordStrength {
  if (!password) return "empty";
  if (password.length < 8 || !/\d/.test(password)) return "weak";
  if (password.length >= 12 && /[A-Z]/.test(password) && /[a-z]/.test(password)) {
    return "strong";
  }
  return "good";
}

export function getPasswordStrengthPercent(strength: PasswordStrength): number {
  switch (strength) {
    case "empty":
      return 0;
    case "weak":
      return 33;
    case "good":
      return 66;
    case "strong":
      return 100;
  }
}

export function getPasswordStrengthColor(strength: PasswordStrength): string {
  switch (strength) {
    case "weak":
      return "#EF4444";
    case "good":
      return "#F59E0B";
    case "strong":
      return "#10B981";
    default:
      return "#E8EAED";
  }
}

export function formatPhoneDisplay(digits: string): string {
  const d = digits.replace(/\D/g, "").slice(0, 10);
  if (d.length <= 3) return d.length ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}

export function digitsOnlyPhone(value: string): string {
  return value.replace(/\D/g, "").slice(0, 10);
}
