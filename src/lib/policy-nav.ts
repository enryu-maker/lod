export const POLICY_EFFECTIVE_DATE = "June 25, 2026";
export const POLICY_LAST_UPDATED = "June 25, 2026";

export type PolicySlug =
  | "terms"
  | "privacy"
  | "refund-policy"
  | "prohibited-items"
  | "garment-protection"
  | "cookie-policy"
  | "accessibility"
  | "dmca";

export const POLICY_NAV: { slug: PolicySlug; label: string; href: string }[] = [
  { slug: "terms", label: "Terms of Service", href: "/terms" },
  { slug: "privacy", label: "Privacy Policy", href: "/privacy" },
  { slug: "refund-policy", label: "Refund Policy", href: "/refund-policy" },
  { slug: "prohibited-items", label: "Prohibited Items", href: "/prohibited-items" },
  { slug: "garment-protection", label: "Garment Protection", href: "/garment-protection" },
  { slug: "cookie-policy", label: "Cookie Policy", href: "/cookie-policy" },
  { slug: "accessibility", label: "Accessibility", href: "/accessibility" },
  { slug: "dmca", label: "DMCA", href: "/dmca" },
];

export const FOOTER_LEGAL_LINKS = POLICY_NAV.filter((p) => p.slug !== "dmca" && p.slug !== "cookie-policy");
