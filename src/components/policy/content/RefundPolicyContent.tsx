import {
  CalloutBox,
  PolicyLink,
  PolicyList,
  PolicyP,
  PolicySection,
  PolicyStrong,
  PolicyTable,
  StepCards,
} from "@/components/policy/PolicyPrimitives";

export default function RefundPolicyContent() {
  return (
    <>
      <CalloutBox variant="teal">
        <p className="font-heading text-base leading-[1.65] text-[#0A1628]">
          LOD&apos;s goal is your complete satisfaction with every order. This policy explains
          exactly what you can expect if something goes wrong.
        </p>
      </CalloutBox>

      <PolicySection id="cancellation-refunds" title="1. Order Cancellation Refunds">
        <PolicyTable
          headers={["When You Cancel", "Refund", "Timeline"]}
          rows={[
            ["More than 2 hours before scheduled pickup", "Full refund to original payment method", "5 to 7 business days"],
            ["Within 2 hours of scheduled pickup", "No refund", "N/A"],
            ["LOD cancels your order", "Full refund or reschedule at your preference", "Within 3 business days"],
          ]}
        />
        <PolicyP>
          How to cancel: Use the LOD app or email{" "}
          <PolicyLink href="mailto:support@lodvalet.com">support@lodvalet.com</PolicyLink> with
          your order number.
        </PolicyP>
      </PolicySection>

      <PolicySection id="first-order-guarantee" title="2. First-Order Satisfaction Guarantee">
        <div className="rounded-r-lg border border-[#00C2A8]/25 border-l-4 border-l-[#00C2A8] bg-[#00C2A8]/6 p-5 md:p-6">
          <p className="font-heading text-base text-[#0A1628]">
            If you are not satisfied with the quality of your very first LOD order, contact us
            within 24 hours of delivery at{" "}
            <PolicyLink href="mailto:support@lodvalet.com">support@lodvalet.com</PolicyLink>. We
            will re-wash and re-deliver your laundry at no charge.
          </p>
        </div>
        <PolicyP>To qualify:</PolicyP>
        <PolicyList
          items={[
            "This must be your first order with LOD",
            "You must contact us within 24 hours of delivery",
            "Items must be unworn and in the same condition as delivered",
            "You must describe the specific quality issue",
          ]}
        />
        <p className="font-heading text-[15px] italic text-[#6B7280]">
          This one-time re-do is our commitment to earning your trust as a new customer.
        </p>
      </PolicySection>

      <PolicySection id="service-credit" title="3. Service Credit for Quality Issues">
        <PolicyTable
          headers={["Issue", "Credit Issued"]}
          rows={[
            ["Laundry returned visibly unwashed or still heavily soiled", "Full order credit"],
            ["Significant folding quality failure  items crumpled, unfolded, or not folded", "50% order credit"],
            ["Delivery delayed beyond 48 hours without prior notification", "25% order credit"],
            ["Missing item confirmed through LOD photo documentation review", "Up to $30 credit toward item replacement"],
          ]}
        />
        <CalloutBox variant="neutral">
          <PolicyList
            items={[
              "All service credit is issued as LOD account credit, not cash",
              "LOD account credit has no expiration date",
              "LOD account credit cannot be converted to cash",
              "Claims must be submitted within 24 hours of delivery",
              "Claims submitted after 24 hours will not be considered",
              "LOD's determination regarding credit eligibility is final",
            ]}
          />
        </CalloutBox>
      </PolicySection>

      <PolicySection id="garment-damage" title="4. Garment Damage Claims">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-[#00C2A8]/20 bg-[#00C2A8]/6 p-6">
            <p className="font-heading text-[15px] font-bold text-[#00C2A8]">
              With Garment Protection ($6.99)
            </p>
            <PolicyList
              items={[
                "Up to $150.00 in LOD account credit for verified damage",
                "Claim within 24 hours of delivery with photos",
                "Determination within 3 business days",
              ]}
            />
          </div>
          <div className="rounded-xl border border-[#E8EAED] bg-[#F4F6F8] p-6">
            <p className="font-heading text-[15px] font-bold text-[#6B7280]">
              Without Garment Protection
            </p>
            <PolicyList
              items={[
                "Up to $30.00 in LOD account credit at LOD's discretion",
                "Same 24-hour claim window applies",
              ]}
            />
          </div>
        </div>
        <PolicyP>In all cases:</PolicyP>
        <PolicyList
          items={[
            "Claims must include order number, item description, and clear photos",
            "Credit is issued as LOD account credit only",
            "Prohibited items are not eligible for damage claims",
          ]}
        />
        <PolicyP>
          See our full{" "}
          <PolicyLink href="/garment-protection">Garment Protection Terms</PolicyLink>.
        </PolicyP>
      </PolicySection>

      <PolicySection id="no-cash-refunds" title="5. No Cash Refunds for Service Issues">
        <CalloutBox variant="neutral">
          <PolicyP>
            LOD does not issue cash refunds for service quality issues, garment damage, or any
            service-related complaint. All service-related compensation is issued exclusively as
            LOD account credit.
          </PolicyP>
        </CalloutBox>
      </PolicySection>

      <PolicySection id="subscription-refunds" title="6. Subscription Refunds">
        <PolicyP>
          Subscription fees are non-refundable once a billing period has begun, except where
          required by law or at LOD&apos;s sole discretion for documented service failures.
        </PolicyP>
      </PolicySection>

      <PolicySection id="program-fees" title="7. One-Time Program Fees">
        <PolicyP>
          One-time program fees, including Founding Member purchases, are non-refundable once
          activated. See the Founding Member page for full program terms.
        </PolicyP>
      </PolicySection>

      <PolicySection id="file-a-claim" title="8. How to File a Claim">
        <StepCards
          steps={[
            {
              title: "Email support@lodvalet.com or use in-app support",
              body: <PolicyLink href="mailto:support@lodvalet.com">support@lodvalet.com</PolicyLink>,
            },
            { title: "Include your order number in the subject line", body: "Example: LOD-10482" },
            { title: "Describe the issue in detail", body: "Include dates, items affected, and what occurred." },
            { title: "Attach clear photos if claim involves damaged items", body: "Photos must be taken within 24 hours of delivery." },
            { title: "LOD will respond within 2 business days", body: "Most claims are resolved within 5 business days." },
          ]}
        />
        <CalloutBox variant="gold">
          If you&apos;re ever unhappy with how a claim was handled, you may escalate to{" "}
          <PolicyLink href="mailto:hem@lodvalet.com">hem@lodvalet.com</PolicyLink>.
        </CalloutBox>
      </PolicySection>

      <PolicySection id="disputes" title="9. Disputes About Refunds">
        <PolicyP>
          Disputes not resolved through our support process may be subject to the dispute
          resolution procedures in our Terms of Service, including binding arbitration, except
          where Massachusetts small claims court jurisdiction applies for qualifying amounts.
        </PolicyP>
      </PolicySection>

      <PolicySection id="chargebacks" title="10. Chargebacks">
        <CalloutBox variant="warning">
          <PolicyP>
            Before initiating a chargeback with your bank, please contact LOD support. Unauthorized
            or fraudulent chargebacks for completed services may result in account suspension and
            collection action. LOD will provide documentation of service delivery to your financial
            institution upon request.
          </PolicyP>
        </CalloutBox>
      </PolicySection>
    </>
  );
}
