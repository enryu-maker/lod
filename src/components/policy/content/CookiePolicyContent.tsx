import {
  CalloutBox,
  PolicyLink,
  PolicyList,
  PolicyP,
  PolicySection,
  PolicyStrong,
  PolicyTable,
} from "@/components/policy/PolicyPrimitives";

const cookieTypes = [
  {
    icon: "🔒",
    title: "Essential Cookies",
    badge: "Required  Cannot be disabled",
    badgeStyle: "bg-[#0A1628]/8 text-[#0A1628]",
    body: "Required for the website and app to function. These enable core features like account login, order placement, and security.",
    examples: "Session tokens, authentication, cart state",
  },
  {
    icon: "📊",
    title: "Analytics Cookies",
    badge: "Optional",
    badgeStyle: "bg-[#6B7280]/10 text-[#6B7280]",
    body: "Help us understand how visitors use our site so we can improve the experience.",
    examples: "Google Analytics, Microsoft Clarity",
  },
  {
    icon: "⚙️",
    title: "Preference Cookies",
    badge: "Optional",
    badgeStyle: "bg-[#6B7280]/10 text-[#6B7280]",
    body: "Remember your settings and preferences across visits.",
    examples: "Language, display preferences, cookie consent choices",
  },
  {
    icon: "🎯",
    title: "Marketing Cookies",
    badge: "Optional",
    badgeStyle: "bg-[#6B7280]/10 text-[#6B7280]",
    body: "Used to measure advertising effectiveness and deliver relevant promotions.",
    examples: "Meta Pixel, TikTok Pixel",
  },
];

export default function CookiePolicyContent() {
  return (
    <>
      <PolicySection id="what-are-cookies" title="1. What Are Cookies">
        <PolicyP>
          Cookies are small text files stored on your device when you visit a website. They help
          websites remember your preferences, keep you logged in, and understand how you use our
          services.
        </PolicyP>
      </PolicySection>

      <PolicySection id="how-lod-uses" title="2. How LOD Uses Cookies">
        {cookieTypes.map((type) => (
          <div
            key={type.title}
            className="mb-3 flex gap-4 rounded-xl border border-[#E8EAED] bg-white p-6"
          >
            <span className="text-2xl" aria-hidden>
              {type.icon}
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-heading text-base font-bold text-[#0A1628]">{type.title}</h3>
                <span
                  className={`rounded-full px-2.5 py-0.5 font-sans text-[11px] font-medium ${type.badgeStyle}`}
                >
                  {type.badge}
                </span>
              </div>
              <PolicyP>{type.body}</PolicyP>
              <p className="font-sans text-[13px] italic text-[#6B7280]">
                Examples: {type.examples}
              </p>
            </div>
          </div>
        ))}
      </PolicySection>

      <PolicySection id="third-party" title="3. Third-Party Cookies">
        <PolicyTable
          headers={["Service", "Purpose", "Privacy Policy"]}
          rows={[
            ["Google (Firebase, Analytics)", "App infrastructure and analytics", "policies.google.com/privacy"],
            ["Stripe", "Payment security and fraud detection", "stripe.com/privacy"],
            ["Meta (Facebook/Instagram)", "Advertising measurement and targeting", "facebook.com/privacy/policy"],
            ["TikTok", "Advertising measurement", "tiktok.com/legal/privacy-policy"],
            ["Microsoft Clarity", "Session recording and UX analysis", "privacy.microsoft.com"],
          ]}
        />
        <p className="font-sans text-[13px] italic text-[#6B7280]">
          These cookies are governed by the respective third parties&apos; privacy policies. LOD
          does not control third-party cookies.
        </p>
      </PolicySection>

      <PolicySection id="your-choices" title="4. Your Choices">
        <PolicyP>
          <PolicyStrong>4.1</PolicyStrong> When you first visit lodvalet.com, you may accept all
          cookies, reject non-essential cookies, or customize your preferences.
        </PolicyP>
        <PolicyP>
          <PolicyStrong>4.2</PolicyStrong> You can also manage cookies through your browser
          settings.
        </PolicyP>
        <CalloutBox variant="neutral" label="Opt-Out Tools">
          <PolicyList
            items={[
              <>Google Analytics: <PolicyLink href="https://tools.google.com/dlpage/gaoptout" external>tools.google.com/dlpage/gaoptout</PolicyLink></>,
              <>Meta ad preferences: <PolicyLink href="https://www.facebook.com/ads/preferences" external>facebook.com/ads/preferences</PolicyLink></>,
              "TikTok ad settings: via TikTok account settings",
            ]}
          />
        </CalloutBox>
        <PolicyP>
          <PolicyStrong>4.4</PolicyStrong> LOD does not currently respond to Do Not Track browser
          signals.
        </PolicyP>
      </PolicySection>

      <PolicySection id="changes" title="5. Changes">
        <PolicyP>
          We may update this Cookie Policy from time to time. Changes will be posted on this page
          with an updated effective date.
        </PolicyP>
      </PolicySection>

      <PolicySection id="contact" title="6. Contact">
        <CalloutBox variant="neutral">
          Questions about cookies or tracking:{" "}
          <PolicyLink href="mailto:support@lodvalet.com">support@lodvalet.com</PolicyLink>
        </CalloutBox>
      </PolicySection>
    </>
  );
}
