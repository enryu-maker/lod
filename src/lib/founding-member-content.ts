export const FOUNDING_MEMBER_TOTAL = 500;

export const foundingBenefits = [
  {
    title: "10% off every order. Forever.",
    body: "Every single bag order discounted 10% for life. No expiry. No conditions. No exceptions.",
  },
  {
    title: "Priority scheduling. Always.",
    body: "Your preferred time windows are held for you first. Before anyone else sees them.",
  },
  {
    title: "$5 credit on activation.",
    body: "Your $5 LOD credit is added the moment your membership is confirmed. Use it immediately.",
  },
  {
    title: "Founding Member badge.",
    body: "A permanent badge in your LOD profile marking you as one of the original 500.",
  },
  {
    title: "First access to every new service.",
    body: "LOD Home, LOD Care, and every new vertical we launch. Founding Members get in first. Always.",
  },
  {
    title: "Exclusive merchandise access.",
    body: "LOD branded items available only to Founding Members. Not sold publicly. Ever.",
  },
] as const;

export const clarityCards = [
  {
    type: "not" as const,
    title: "NOT a subscription",
    body: "You are not signing up for a recurring charge. $14.99. Once. Done.",
  },
  {
    type: "not" as const,
    title: "NOT an introductory offer",
    body: "This is not a trial or a teaser. These benefits are yours permanently. They do not expire.",
  },
  {
    type: "yes" as const,
    title: "A one-time founding decision",
    body: "500 people. $14.99. Benefits for as long as LOD exists. There is no catch.",
  },
] as const;

export const foundingFinePrint =
  "Non-refundable. One per account. Benefits apply to single bag orders only. Cannot be combined with other membership discounts.";
