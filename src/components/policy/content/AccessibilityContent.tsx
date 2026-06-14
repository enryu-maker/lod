import {
  NavyContactCard,
  PolicyLink,
  PolicyList,
  PolicyP,
  PolicySection,
} from "@/components/policy/PolicyPrimitives";

export default function AccessibilityContent() {
  return (
    <>
      <div className="mb-10 rounded-lg border border-[#00C2A8]/20 bg-[#00C2A8]/6 p-6">
        <p className="font-heading text-base leading-[1.65] text-[#0A1628]">
          LOD LLC is committed to ensuring that our website and mobile application are accessible
          to all users, including individuals with disabilities. We strive to conform to the Web
          Content Accessibility Guidelines (WCAG) 2.1, Level AA.
        </p>
      </div>

      <PolicyList
        items={[
          "Using sufficient color contrast for all text and interface elements",
          "Providing text alternatives for non-text content",
          "Ensuring keyboard navigability for all core functions",
          "Designing screen reader compatible interfaces",
          "Using clear, plain-language content throughout",
        ]}
      />

      <PolicySection id="website" title="Website Accessibility">
        <PolicyP>
          We regularly review{" "}
          <PolicyLink href="https://lodvalet.com" external>
            lodvalet.com
          </PolicyLink>{" "}
          for accessibility improvements and welcome feedback from users who encounter barriers.
        </PolicyP>
      </PolicySection>

      <PolicySection id="mobile" title="Mobile Application Accessibility">
        <PolicyP>
          Our mobile application is designed to work with iOS VoiceOver and Android TalkBack screen
          readers for core functions including account creation, order placement, and order
          tracking.
        </PolicyP>
      </PolicySection>

      <PolicySection id="feedback" title="Feedback and Contact">
        <NavyContactCard title="Accessibility Feedback">
          <p className="text-white/65">We will respond within 5 business days.</p>
          <p className="mt-3">
            <PolicyLink href="mailto:support@lodvalet.com?subject=Accessibility%20Feedback">
              support@lodvalet.com
            </PolicyLink>
          </p>
          <p className="mt-2 font-sans text-[13px] text-white/45">
            Subject line: Accessibility Feedback
          </p>
          <p className="mt-4 font-sans text-sm text-white/55">
            We prioritize issues that prevent core functionality such as account creation, order
            placement, and account management.
          </p>
        </NavyContactCard>
      </PolicySection>

      <PolicySection id="third-party" title="Third-Party Content">
        <PolicyP>
          Some third-party content embedded on our platform (such as payment processing or social
          media widgets) may not fully meet our accessibility standards. We work with vendors who
          share our commitment to accessibility.
        </PolicyP>
      </PolicySection>
    </>
  );
}
