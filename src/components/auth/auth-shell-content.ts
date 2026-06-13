export type AuthVariant = "login" | "signup" | "forgot-password";
export type SignupStep = 1 | 2 | 3;

type PanelContent = {
  eyebrow: string;
  headline: string;
  subhead: string;
};

export function getAuthPanelContent(
  variant: AuthVariant,
  signupStep: SignupStep = 1
): PanelContent {
  if (variant === "login") {
    return {
      eyebrow: "Member portal",
      headline: "Your laundry, handled.",
      subhead:
        "Sign in to schedule pickups, track every order, and manage your account in one place.",
    };
  }

  if (variant === "forgot-password") {
    return {
      eyebrow: "Account recovery",
      headline: "Back in, fast.",
      subhead:
        "Enter the email on your account and we'll send a link to reset your password.",
    };
  }

  switch (signupStep) {
    case 2:
      return {
        eyebrow: "Step 2 of 3",
        headline: "Stay in the loop.",
        subhead:
          "We text you pickup windows, delivery updates, and photo confirmations so you're never guessing.",
      };
    case 3:
      return {
        eyebrow: "Step 3 of 3",
        headline: "Founding member access.",
        subhead:
          "A one-time upgrade for early adopters. Lifetime perks, priority scheduling, and exclusive savings.",
      };
    default:
      return {
        eyebrow: "Step 1 of 3",
        headline: "Reclaim your weekends.",
        subhead:
          "Create your account and schedule your first LOD pickup in under 60 seconds.",
      };
  }
}

export const authBenefits = [
  "Schedule pickups in under 60 seconds",
  "Track every order with photo documentation",
  "Earn streak rewards and referral credits",
];

export const signupStepLabels = ["Account", "Phone", "Member"] as const;
