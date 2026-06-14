import {
  CalloutBox,
  ContactBlock,
  NoticeBlock,
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
  { href: "#who-we-are", label: "Who We Are" },
  { href: "#eligibility", label: "Eligibility" },
  { href: "#your-account", label: "Your Account" },
  { href: "#our-services", label: "Our Services" },
  { href: "#placing-orders", label: "Placing Orders" },
  { href: "#turnaround-time", label: "Turnaround Time" },
  { href: "#payment", label: "Payment" },
  { href: "#cancellation", label: "Cancellation Policy" },
  { href: "#prohibited-items", label: "Prohibited Items" },
  { href: "#service-quality", label: "Service Quality and Compensation" },
  { href: "#garment-protection", label: "Garment Protection" },
  { href: "#limitation-of-liability", label: "Limitation of Liability" },
  { href: "#intellectual-property", label: "Intellectual Property" },
  { href: "#acceptable-use", label: "Acceptable Use" },
  { href: "#account-suspension", label: "Account Suspension and Termination" },
  { href: "#dispute-resolution", label: "Dispute Resolution and Arbitration" },
  { href: "#modifications", label: "Modifications to These Terms" },
  { href: "#miscellaneous", label: "Miscellaneous" },
];

export default function TermsContent() {
  return (
    <>
      <NoticeBlock variant="warning" title="Important Notice">
        <p className="font-sans text-[13px] font-bold uppercase leading-relaxed text-[#EF4444]">
          PLEASE READ THESE TERMS CAREFULLY. BY CREATING AN ACCOUNT, PLACING AN ORDER, OR USING
          ANY PART OF THE LOD PLATFORM, YOU AGREE TO BE BOUND BY THESE TERMS OF SERVICE. IF YOU
          DO NOT AGREE, DO NOT USE OUR SERVICE.
        </p>
      </NoticeBlock>

      <TocBox links={toc} />

      <PolicySection id="who-we-are" title="1. Who We Are">
        <PolicyP>
          LOD LLC (&quot;LOD,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is a
          Massachusetts limited liability company (EIN: 42-2647554) providing premium laundry
          pickup, processing, and delivery services in the Boston metropolitan area. Our
          registered agent is Northwest Registered Agent Service Inc, 82 Wendell Ave STE 100,
          Pittsfield, MA 01201.
        </PolicyP>
        <ContactBlock>
          Contact:{" "}
          <PolicyLink href="mailto:support@lodvalet.com">support@lodvalet.com</PolicyLink> |{" "}
          <PolicyLink href="https://lodvalet.com" external>
            lodvalet.com
          </PolicyLink>{" "}
          | Boston, MA
        </ContactBlock>
      </PolicySection>

      <PolicySection id="eligibility" title="2. Eligibility">
        <PolicyP>
          <PolicyStrong>2.1</PolicyStrong> You must be at least 18 years old and capable of
          forming a binding contract to use LOD services.
        </PolicyP>
        <PolicyP>
          <PolicyStrong>2.2</PolicyStrong> LOD services are currently available only within our
          designated Boston metropolitan service area. Orders placed outside this area will not
          be accepted.
        </PolicyP>
        <PolicyP>
          <PolicyStrong>2.3</PolicyStrong> You represent that all information you provide to LOD
          is accurate, current, and complete.
        </PolicyP>
        <PolicyP>
          <PolicyStrong>2.4</PolicyStrong> LOD reserves the right to refuse service to any
          person or address at its sole discretion.
        </PolicyP>
      </PolicySection>

      <PolicySection id="your-account" title="3. Your Account">
        <PolicyP>
          <PolicyStrong>3.1</PolicyStrong> You are responsible for maintaining the
          confidentiality of your account credentials.
        </PolicyP>
        <PolicyP>
          <PolicyStrong>3.2</PolicyStrong> You are responsible for all activity that occurs
          under your account.
        </PolicyP>
        <PolicyP>
          <PolicyStrong>3.3</PolicyStrong> You must notify LOD immediately of any unauthorized
          use of your account.
        </PolicyP>
        <PolicyP>
          <PolicyStrong>3.4</PolicyStrong> LOD may suspend or terminate accounts that violate
          these Terms or pose a security risk.
        </PolicyP>
        <PolicyP>
          <PolicyStrong>3.5</PolicyStrong> One account per individual. Shared or duplicate
          accounts may be closed without notice.
        </PolicyP>
      </PolicySection>

      <PolicySection id="our-services" title="4. Our Services">
        <PolicyP>
          <PolicyStrong>4.1</PolicyStrong> LOD provides laundry pickup, professional washing,
          folding, and delivery services through our platform and independent processing
          partners.
        </PolicyP>
        <PolicyP>
          <PolicyStrong>4.2</PolicyStrong> Service availability, pricing, and features may vary
          by location and are subject to change.
        </PolicyP>
        <PolicySubSection title="4.3 Add-On Services">
          <PolicyP>LOD offers optional add-on services including:</PolicyP>
          <PolicyList
            items={[
              "Hypoallergenic Processing",
              "Delicate Care",
              "Hang and Return",
              "Garment Protection",
            ]}
          />
        </PolicySubSection>
        <PolicyP>
          <PolicyStrong>4.4</PolicyStrong> LOD is not a dry cleaning service unless explicitly
          stated for a specific offering.
        </PolicyP>
        <PolicyP>
          <PolicyStrong>4.5</PolicyStrong> We may introduce new services, tiers, or features at
          any time.
        </PolicyP>
        <PolicyP>
          <PolicyStrong>4.6</PolicyStrong> LOD does not guarantee that every garment type can
          be processed to your satisfaction. Care label compliance is your responsibility.
        </PolicyP>
      </PolicySection>

      <PolicySection id="placing-orders" title="5. Placing Orders">
        <PolicyP>
          <PolicyStrong>5.1</PolicyStrong> Orders must be placed through the LOD app or website
          before the scheduled pickup window.
        </PolicyP>
        <PolicyP>
          <PolicyStrong>5.2</PolicyStrong> You must provide accurate pickup and delivery
          addresses and contact information.
        </PolicyP>
        <PolicyP>
          <PolicyStrong>5.3</PolicyStrong> You must ensure your laundry bag is accessible at the
          scheduled pickup time.
        </PolicyP>
        <PolicyP>
          <PolicyStrong>5.4</PolicyStrong> LOD may photograph bags and items for quality
          assurance and dispute resolution.
        </PolicyP>
        <PolicyP>
          <PolicyStrong>5.5</PolicyStrong> Order modifications may not be available after pickup
          has occurred.
        </PolicyP>
        <PolicyP>
          <PolicyStrong>5.6</PolicyStrong> LOD reserves the right to refuse or cancel orders that
          violate these Terms or our Prohibited Items Policy.
        </PolicyP>
      </PolicySection>

      <PolicySection id="turnaround-time" title="6. Turnaround Time">
        <PolicySubSection title="6.1 Service Tiers">
          <PolicyTable
            headers={["Service Tier", "Turnaround Target"]}
            rows={[
              ["Essential", "Next-day delivery"],
              ["Express", "Same-day delivery"],
              ["Rush", "Within 6 hours of pickup"],
            ]}
          />
          <p className="mb-4 font-sans text-[13px] italic text-[#6B7280]">
            All timeframes are targets and estimates, not guarantees. Capacity, weather, and
            operational conditions may affect delivery timing.
          </p>
        </PolicySubSection>
        <PolicyP>
          <PolicyStrong>6.2</PolicyStrong> LOD will make reasonable efforts to meet turnaround
          targets but does not guarantee specific delivery times.
        </PolicyP>
        <PolicyP>
          <PolicyStrong>6.3</PolicyStrong> You will be notified of significant delays when
          practicable.
        </PolicyP>
      </PolicySection>

      <PolicySection id="payment" title="7. Payment">
        <PolicyP>
          <PolicyStrong>7.1</PolicyStrong> All orders must be paid through LOD&apos;s approved
          payment methods processed by Stripe.
        </PolicyP>
        <PolicyP>
          <PolicyStrong>7.2</PolicyStrong> Prices displayed at checkout are final unless an error
          is identified and corrected by LOD.
        </PolicyP>
        <PolicyP>
          <PolicyStrong>7.3</PolicyStrong> LOD account credit may be applied to orders where
          available and has no cash value.
        </PolicyP>
        <PolicyP>
          <PolicyStrong>7.4</PolicyStrong> Failed payment may result in order cancellation.
        </PolicyP>
        <PolicyP>
          <PolicyStrong>7.5</PolicyStrong> Promotional codes are subject to their stated terms
          and may not be combined unless explicitly permitted.
        </PolicyP>
        <PolicyP>
          <PolicyStrong>7.6</PolicyStrong> LOD may charge applicable taxes as required by law.
        </PolicyP>
        <CalloutBox variant="gold" label="7.7 Founding Member Program">
          <PolicyP>
            Founding Member status is a one-time, non-refundable purchase of $14.99 that provides
            a 10% discount on eligible single bag orders for the life of your account in good
            standing. Benefits do not apply to subscriptions, the LOD Starter Kit, or orders
            already discounted at a higher rate. Limited to the first 500 members. See{" "}
            <PolicyLink href="/founding-member">/founding-member</PolicyLink> for full details.
          </PolicyP>
        </CalloutBox>
      </PolicySection>

      <PolicySection id="cancellation" title="8. Cancellation Policy">
        <PolicyTable
          headers={["When You Cancel", "Refund", "Timeline"]}
          rows={[
            ["More than 2 hours before pickup", "Full refund", "5–7 business days"],
            ["Within 2 hours of pickup", "No refund", "N/A"],
            ["LOD cancels your order", "Full refund or reschedule", "Within 3 business days"],
          ]}
        />
        <PolicyP>
          <PolicyStrong>8.2</PolicyStrong> Cancellations must be submitted through the LOD app
          or by emailing{" "}
          <PolicyLink href="mailto:support@lodvalet.com">support@lodvalet.com</PolicyLink>.
        </PolicyP>
        <PolicyP>
          <PolicyStrong>8.3</PolicyStrong> Refunds are issued to the original payment method
          unless otherwise stated.
        </PolicyP>
        <PolicyP>
          <PolicyStrong>8.4</PolicyStrong> Service quality issues are governed by our{" "}
          <PolicyLink href="/refund-policy">Refund Policy</PolicyLink>.
        </PolicyP>
      </PolicySection>

      <PolicySection id="prohibited-items" title="9. Prohibited Items">
        <PolicyP>
          <PolicyStrong>9.1</PolicyStrong> You may not include prohibited items in any LOD order.
          A complete list is available in our Prohibited Items Policy.
        </PolicyP>
        <CalloutBox variant="warning">
          <p className="font-sans text-[13px] text-[#EF4444]">
            Note: LOD&apos;s maximum liability for any single order is $150.00 in account credit
            with Garment Protection, or $30.00 without.
          </p>
        </CalloutBox>
        <PolicyList
          items={[
            "Dry clean only, fur, leather, suede, and structured garments unsuitable for machine washing",
            "Biologically or chemically contaminated items",
            "Flammable or hazardous materials",
            "Wet, moldy, or pest-infested items",
            "Cash, jewelry, keys, electronics, cards, and medications",
            "High-value garments over $300 without written pre-disclosure",
            "Irreplaceable items including heirlooms and wedding dresses",
          ]}
        />
        <PolicyP>
          <PolicyStrong>9.2</PolicyStrong> LOD may refuse, set aside, or return prohibited items
          without processing.
        </PolicyP>
        <PolicyP>
          <PolicyStrong>9.3</PolicyStrong> You are solely liable for damage caused by prohibited
          items included in your order.
        </PolicyP>
        <PolicyP>
          <PolicyStrong>9.4</PolicyStrong> Garment Protection does not apply to prohibited items.
        </PolicyP>
        <PolicyP>
          See our full{" "}
          <PolicyLink href="/prohibited-items">Prohibited Items Policy</PolicyLink>.
        </PolicyP>
      </PolicySection>

      <PolicySection id="service-quality" title="10. Service Quality and Compensation">
        <PolicyP>
          LOD strives for consistent, high-quality service. Service credits for quality issues
          are issued as LOD account credit per our Refund Policy. LOD does not issue cash refunds
          for service quality complaints.
        </PolicyP>
      </PolicySection>

      <PolicySection id="garment-protection" title="11. Garment Protection">
        <PolicyP>
          Garment Protection is an optional per-order service guarantee, not insurance. Coverage
          details, claim procedures, and limitations are set forth in our{" "}
          <PolicyLink href="/garment-protection">Garment Protection Terms</PolicyLink>.
        </PolicyP>
      </PolicySection>

      <PolicySection id="limitation-of-liability" title="12. Limitation of Liability">
        <CalloutBox variant="caps">
          <PolicyP>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, LOD&apos;S TOTAL LIABILITY FOR ANY CLAIM
            ARISING FROM OR RELATED TO YOUR USE OF OUR SERVICES SHALL NOT EXCEED THE GREATER OF
            (A) THE AMOUNT YOU PAID FOR THE SPECIFIC ORDER GIVING RISE TO THE CLAIM, OR (B)
            $150.00 IN LOD ACCOUNT CREDIT IF GARMENT PROTECTION WAS PURCHASED FOR THAT ORDER,
            OR $30.00 IN LOD ACCOUNT CREDIT IF IT WAS NOT.
          </PolicyP>
        </CalloutBox>
        <CalloutBox variant="caps">
          <PolicyP>
            IN NO EVENT SHALL LOD BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
            PUNITIVE DAMAGES, INCLUDING LOST PROFITS, LOST DATA, OR LOSS OF USE, EVEN IF LOD HAS
            BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </PolicyP>
        </CalloutBox>
      </PolicySection>

      <PolicySection id="intellectual-property" title="13. Intellectual Property">
        <PolicyP>
          All LOD trademarks, logos, content, and platform materials are owned by LOD LLC. You
          may not use LOD intellectual property without prior written consent. See our{" "}
          <PolicyLink href="/dmca">DMCA &amp; Intellectual Property Policy</PolicyLink>.
        </PolicyP>
      </PolicySection>

      <PolicySection id="acceptable-use" title="14. Acceptable Use">
        <PolicyP>
          You agree not to misuse the LOD platform, interfere with operations, submit false
          claims, abuse promotional programs, or engage in fraudulent activity.
        </PolicyP>
      </PolicySection>

      <PolicySection id="account-suspension" title="15. Account Suspension and Termination">
        <PolicyP>
          LOD may suspend or terminate your account for violations of these Terms, fraudulent
          activity, chargebacks, or conduct harmful to LOD, its partners, or other customers.
        </PolicyP>
      </PolicySection>

      <PolicySection id="dispute-resolution" title="16. Dispute Resolution and Arbitration">
        <PolicyP>
          <PolicyStrong>16.1</PolicyStrong> Before initiating formal proceedings, contact{" "}
          <PolicyLink href="mailto:support@lodvalet.com">support@lodvalet.com</PolicyLink> to
          attempt informal resolution.
        </PolicyP>
        <CalloutBox variant="teal" label="Binding Arbitration">
          <PolicyP>
            <PolicyStrong>16.2</PolicyStrong> Except as stated below, any dispute arising from
            these Terms or your use of LOD services shall be resolved by binding individual
            arbitration administered under applicable rules in Massachusetts, not in court.
          </PolicyP>
        </CalloutBox>
        <PolicyP>
          <PolicyStrong>16.3</PolicyStrong> You waive the right to participate in class actions
          or class-wide arbitration.
        </PolicyP>
        <CalloutBox variant="teal" label="Small Claims Exception">
          <PolicyP>
            <PolicyStrong>16.4</PolicyStrong> Either party may bring an individual action in
            Massachusetts small claims court for disputes of $7,000 or less.
          </PolicyP>
        </CalloutBox>
        <CalloutBox variant="teal" label="Massachusetts Consumer Protection">
          <PolicyP>
            <PolicyStrong>16.8</PolicyStrong> Nothing in this section limits rights that cannot
            be waived under Massachusetts consumer protection law. See{" "}
            <PolicyLink href="https://www.mass.gov/ago" external>
              mass.gov/ago
            </PolicyLink>
            .
          </PolicyP>
        </CalloutBox>
      </PolicySection>

      <PolicySection id="modifications" title="17. Modifications to These Terms">
        <PolicyP>
          LOD may update these Terms from time to time. Material changes will be posted on this
          page with an updated effective date. Continued use after changes constitutes acceptance.
        </PolicyP>
      </PolicySection>

      <PolicySection id="miscellaneous" title="18. Miscellaneous">
        <PolicyP>
          These Terms constitute the entire agreement between you and LOD regarding the
          services. If any provision is unenforceable, the remaining provisions remain in effect.
          Massachusetts law governs these Terms.
        </PolicyP>
        <ContactBlock>
          LOD LLC |{" "}
          <PolicyLink href="mailto:support@lodvalet.com">support@lodvalet.com</PolicyLink> |{" "}
          <PolicyLink href="https://lodvalet.com" external>
            lodvalet.com
          </PolicyLink>{" "}
          | Boston, MA
        </ContactBlock>
      </PolicySection>
    </>
  );
}
