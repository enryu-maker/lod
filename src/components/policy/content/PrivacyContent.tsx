import {
  CalloutBox,
  ContactBlock,
  NavyContactCard,
  PolicyLink,
  PolicyList,
  PolicyP,
  PolicySection,
  PolicyStrong,
  PolicySubSection,
  PolicyTable,
  TocBox,
} from "@/components/policy/PolicyPrimitives";

const toc = [
  { href: "#information-we-collect", label: "Information We Collect" },
  { href: "#how-we-use", label: "How We Use Your Information" },
  { href: "#how-we-share", label: "How We Share Your Information" },
  { href: "#payment-data", label: "Payment Data and Stripe" },
  { href: "#data-retention", label: "Data Retention" },
  { href: "#data-security", label: "Data Security" },
  { href: "#your-rights", label: "Your Rights and Choices" },
  { href: "#cookies", label: "Cookies and Tracking" },
  { href: "#children", label: "Children's Privacy" },
  { href: "#third-party-links", label: "Third-Party Links" },
  { href: "#changes", label: "Changes to This Policy" },
  { href: "#contact", label: "Contact" },
];

export default function PrivacyContent() {
  return (
    <>
      <CalloutBox variant="teal">
        <p className="font-heading text-base leading-[1.65] text-[#0A1628]">
          Your privacy matters to us. This Privacy Policy explains what information LOD collects
          about you, how we use it, who we share it with, and what rights you have. Please read
          it carefully.
        </p>
      </CalloutBox>

      <TocBox links={toc} />

      <PolicySection id="information-we-collect" title="1. Information We Collect">
        <PolicySubSection title="1.1 Information You Provide to Us">
          <PolicyList
            items={[
              <>Account information: your full name, email address, phone number, and delivery address when you create an account</>,
              <>Order information: pickup and delivery addresses, special instructions, add-on preferences, and order history</>,
              <>Payment information: billing name and payment card details (processed and stored by Stripe  see Section 4)</>,
              <>Communications: messages, emails, feedback, or support requests</>,
              <>Referral information: name and email if you refer another customer</>,
              <>Promotional entries: information submitted for promotions</>,
            ]}
          />
        </PolicySubSection>
        <PolicySubSection title="1.2 Information Collected Automatically">
          <PolicyList
            items={[
              "Device and browser information",
              "IP address and general location data",
              "App and website usage data",
              "Cookies and similar tracking technologies",
              "Order status and delivery tracking data",
            ]}
          />
          <CalloutBox variant="neutral">
            <p className="italic font-sans text-[13px] text-[#0A1628]/65">
              Session recording data: if you visit our website, Microsoft Clarity may record your
              session for UX improvement. Clarity does not capture payment fields.
            </p>
          </CalloutBox>
        </PolicySubSection>
        <PolicySubSection title="1.3 Information from Third Parties">
          <PolicyList
            items={[
              "Stripe (payment confirmation data)",
              "Twilio (SMS delivery status)",
              "Brevo (email engagement data)",
              "Firebase (authentication data)",
              "Referral program participants",
            ]}
          />
        </PolicySubSection>
      </PolicySection>

      <PolicySection id="how-we-use" title="2. How We Use Your Information">
        <PolicyP>We use your information to:</PolicyP>
        <PolicyList
          items={[
            "Provide, operate, and improve LOD laundry services",
            "Process orders, payments, and deliveries",
            "Communicate about orders, promotions, and support",
            "Prevent fraud and maintain platform security",
            "Comply with legal obligations",
            "Analyze usage to improve our products and experience",
          ]}
        />
      </PolicySection>

      <PolicySection id="how-we-share" title="3. How We Share Your Information">
        <div className="mb-6 rounded-r-lg border-l-4 border-[#00C2A8] bg-[#00C2A8]/6 px-5 py-4">
          <p className="font-heading text-lg font-bold text-[#0A1628]">
            LOD does not sell your personal information to third parties. Ever.
          </p>
        </div>
        <PolicySubSection title="3.1 Service Providers">
          <PolicyTable
            headers={["Service Provider", "Purpose", "Data Shared"]}
            rows={[
              ["Stripe", "Payment processing", "Payment card data (stored by Stripe  LOD does not store card numbers)"],
              ["Firebase (Google Cloud)", "App infrastructure, auth, order data storage", "Account data, order data"],
              ["Twilio", "SMS notifications", "Phone number and message content"],
              ["Brevo", "Email communications", "Email address and name"],
              ["Anthropic (Claude API)", "AI-powered customer communications and operational automation", "Anonymized customer interaction data and order context"],
              ["Microsoft Clarity", "Website session recording for UX improvement", "Anonymized behavioral data  does not capture payment fields"],
              ["FingerprintJS", "Fraud prevention", "Device technical characteristics for fraud-prevention identifier only"],
              ["Independent Processing Partners", "Laundry fulfillment", "Order ID, items, add-on instructions. No payment data."],
              ["Independent Drivers", "Pickup and delivery", "First name, address, phone number for coordination, Order ID"],
            ]}
          />
        </PolicySubSection>
        <PolicySubSection title="3.2 Legal Requirements">
          <PolicyP>
            We may disclose information when required by law, court order, or to protect the
            rights, property, or safety of LOD, our users, or others.
          </PolicyP>
        </PolicySubSection>
        <PolicySubSection title="3.3 Business Transfers">
          <PolicyP>
            If LOD is involved in a merger, acquisition, or sale of assets, your information may
            be transferred as part of that transaction.
          </PolicyP>
        </PolicySubSection>
        <PolicySubSection title="3.4 Social Media">
          <CalloutBox variant="teal">
            <PolicyP>
              If you tag @lodvalet or use #LODHandled, content you post publicly may be visible
              to LOD and may be reshared with your permission.
            </PolicyP>
          </CalloutBox>
        </PolicySubSection>
        <PolicySubSection title="3.5 With Your Consent">
          <PolicyP>We may share information in other cases with your explicit consent.</PolicyP>
        </PolicySubSection>
      </PolicySection>

      <PolicySection id="payment-data" title="4. Payment Data and Stripe">
        <CalloutBox variant="stripe">
          <PolicyList
            items={[
              "Stripe securely captures and stores your card data directly",
              "LOD does not receive, see, or store your full card number, CVV, or magnetic stripe data",
              "LOD receives only a payment token and transaction confirmation",
              <>
                Stripe&apos;s handling is governed by{" "}
                <PolicyLink href="https://stripe.com/privacy" external>
                  stripe.com/privacy
                </PolicyLink>
              </>,
            ]}
          />
        </CalloutBox>
      </PolicySection>

      <PolicySection id="data-retention" title="5. Data Retention">
        <PolicyTable
          headers={["Data Type", "Retention Period"]}
          rows={[
            ["Order photos", "90 days after delivery, then permanently deleted"],
            ["Support communications", "2 years"],
            ["Financial transaction records", "7 years (required by tax law)"],
            ["Account data", "Until deletion + 3 years"],
            ["Session recording (Clarity)", "Per Microsoft Clarity policy"],
            ["Device fingerprint IDs", "12 months for fraud prevention"],
          ]}
        />
        <PolicyP>
          You may request deletion of your account and personal data at any time (see Section 7).
          Some information may be retained longer if required by law.
        </PolicyP>
      </PolicySection>

      <PolicySection id="data-security" title="6. Data Security">
        <PolicySubSection title="6.1 Security Measures">
          <PolicyList
            items={[
              "Encryption in transit (TLS/HTTPS)",
              "Encryption at rest for sensitive data",
              "Access controls limiting internal data access",
              "Regular security review and monitoring",
            ]}
          />
        </PolicySubSection>
        <PolicyP>
          <PolicyStrong>6.2</PolicyStrong> No method of transmission or storage is 100% secure.
          We cannot guarantee absolute security.
        </PolicyP>
        <PolicyP>
          <PolicyStrong>6.3</PolicyStrong> If you believe your account has been compromised,
          contact{" "}
          <PolicyLink href="mailto:support@lodvalet.com">support@lodvalet.com</PolicyLink>{" "}
          immediately.
        </PolicyP>
        <PolicyP>
          <PolicyStrong>6.4</PolicyStrong> In the event of a data breach affecting Massachusetts
          residents, LOD will provide notification as required under M.G.L. c. 93H.
        </PolicyP>
      </PolicySection>

      <PolicySection id="your-rights" title="7. Your Rights and Choices">
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { title: "Access", body: "Request a copy of the personal data we hold about you." },
            { title: "Correction", body: "Request correction of inaccurate personal data." },
            { title: "Deletion", body: "Request deletion of your account and personal data." },
            { title: "Opt-Out of Marketing", body: "Unsubscribe from promotional emails at any time." },
            { title: "Portability", body: "Request a portable copy of your data where applicable." },
            { title: "Withdraw Consent", body: "Withdraw consent for optional data processing." },
          ].map((right) => (
            <div key={right.title} className="rounded-xl bg-[#F4F6F8] p-5 md:p-6">
              <p className="font-heading text-base font-bold text-[#0A1628]">{right.title}</p>
              <p className="mt-1 font-sans text-sm text-[#6B7280]">{right.body}</p>
            </div>
          ))}
        </div>
        <ContactBlock>
          To exercise any of these rights, email us at{" "}
          <PolicyLink href="mailto:privacy@lodvalet.com">privacy@lodvalet.com</PolicyLink>. We
          will respond within 30 days.
        </ContactBlock>
      </PolicySection>

      <PolicySection id="cookies" title="8. Cookies and Tracking">
        <PolicyP>
          <PolicyStrong>8.1</PolicyStrong> LOD uses cookies and similar technologies to operate
          our website and improve your experience.
        </PolicyP>
        <PolicyP>
          <PolicyStrong>8.2</PolicyStrong> We use essential, analytics, preference, and marketing
          cookies as described in our Cookie Policy.
        </PolicyP>
        <PolicyP>
          <PolicyStrong>8.3</PolicyStrong> You can manage cookies through your browser settings
          and our cookie consent banner.
        </PolicyP>
        <PolicyP>
          See our full <PolicyLink href="/cookie-policy">Cookie Policy</PolicyLink>.
        </PolicyP>
      </PolicySection>

      <PolicySection id="children" title="9. Children's Privacy">
        <PolicyP>
          LOD services are not directed to children under 18. We do not knowingly collect personal
          information from children.
        </PolicyP>
      </PolicySection>

      <PolicySection id="third-party-links" title="10. Third-Party Links">
        <PolicyP>
          Our platform may contain links to third-party websites. LOD is not responsible for their
          privacy practices.
        </PolicyP>
      </PolicySection>

      <PolicySection id="changes" title="11. Changes to This Policy">
        <PolicyP>
          We may update this Privacy Policy from time to time. Changes will be posted on this page
          with an updated effective date.
        </PolicyP>
      </PolicySection>

      <PolicySection id="contact" title="12. Contact">
        <NavyContactCard title="Privacy Questions">
          <p className="mt-2">
            <PolicyLink href="mailto:privacy@lodvalet.com">privacy@lodvalet.com</PolicyLink>
          </p>
          <p className="mt-2">
            <PolicyLink href="mailto:support@lodvalet.com">support@lodvalet.com</PolicyLink>
          </p>
          <p className="mt-3 font-sans text-sm text-white/45">LOD LLC | Boston, MA</p>
        </NavyContactCard>
      </PolicySection>
    </>
  );
}
