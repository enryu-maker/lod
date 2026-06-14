export type AuthVariant = "login" | "signup" | "forgot-password";
export type SignupStep = 1 | 2 | 3;

export type PanelLayout = "default" | "logo-focused";

export type PanelContent = {
  layout: PanelLayout;
  headline?: string;
  subhead?: string;
  tagline?: string;
};

/** Shared left-panel content for login and signup (all steps). */
export const unifiedAuthPanel: PanelContent = {
  layout: "logo-focused",
  tagline: "Boston's premium laundry service. Handled.",
};

export function getAuthPanelContent(
  variant: AuthVariant,
  _signupStep: SignupStep = 1
): PanelContent {
  if (variant === "forgot-password") {
    return {
      layout: "default",
      headline: "Reset your password.",
      subhead: "We will send a secure link to the email on your account.",
    };
  }

  return unifiedAuthPanel;
}

export const authBenefits = [
  "Schedule pickups in under 60 seconds",
  "Track every order with photo documentation",
  "Earn streak rewards and referral credits",
];

export const signupStepLabels = ["Account", "Phone", "Member"] as const;
