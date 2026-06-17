import Link from "next/link";
import {
  CalloutBox,
  NoticeBlock,
  PolicyLink,
  PolicyList,
  PolicyP,
  PolicySection,
  PolicyStrong,
  StepCards,
} from "@/components/policy/PolicyPrimitives";

export default function GarmentProtectionContent() {
  return (
    <>
      <NoticeBlock variant="danger" title="Important Notice">
        <PolicyP>
          LOD Garment Protection is a voluntary service guarantee offered by LOD LLC. It is NOT an
          insurance product and LOD LLC is not an insurance company. Garment Protection does not
          create an insurance contract of any kind. Compensation under this program is issued
          exclusively as LOD account credit with no cash value.
        </PolicyP>
      </NoticeBlock>

      <div className="mb-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/6 p-6">
          <p className="font-sans text-xs font-bold uppercase text-[#10B981]">✓ Covered</p>
          <PolicyList
            items={[
              "Damage during LOD processing",
              "Damage while in driver or facility custody",
              "Up to $150.00 per order as LOD credit",
              "Complete order loss while in LOD custody",
            ]}
          />
        </div>
        <div className="rounded-xl border border-red-500/15 bg-red-500/4 p-6">
          <p className="font-sans text-xs font-bold uppercase text-[#EF4444]">✗ Not Covered</p>
          <PolicyList
            items={[
              "Pre-existing damage",
              "Prohibited items",
              "Care label non-compliance",
              "Items over $300 without pre-disclosure",
              "Normal wear and tear",
              "Customer-caused loss",
              "Consequential damages",
            ]}
          />
        </div>
      </div>

      <PolicySection id="what-is" title="1. What Is Garment Protection">
        <span className="mb-4 inline-block rounded-lg bg-[#0A1628] px-5 py-3 font-heading text-2xl font-bold text-[#00C2A8]">
          $6.99 per order
        </span>
        <PolicyP>
          <PolicyStrong>1.1</PolicyStrong> Garment Protection is an optional add-on you may
          purchase at checkout for each order.
        </PolicyP>
        <PolicyP>
          <PolicyStrong>1.2</PolicyStrong> It increases LOD&apos;s maximum liability for verified
          garment damage or loss during LOD custody.
        </PolicyP>
      </PolicySection>

      <PolicySection id="covered" title="2. What Is Covered">
        <PolicyP>
          <PolicyStrong>2.1</PolicyStrong> With Garment Protection, LOD may issue up to{" "}
          <span className="font-heading text-xl font-bold text-[#00C2A8]">$150.00</span> in LOD
          account credit per order for verified damage.
        </PolicyP>
        <PolicyP>
          <PolicyStrong>2.2</PolicyStrong> Complete order loss while in LOD custody may qualify for
          full order credit up to the same maximum.
        </PolicyP>
        <CalloutBox variant="neutral">
          <p className="font-sans text-sm font-bold text-[#0A1628]">
            $150 with Garment Protection / $30 without
          </p>
        </CalloutBox>
      </PolicySection>

      <PolicySection id="not-covered" title="3. What Is Not Covered">
        {[
          ["3.1", "Pre-existing damage", "Damage that existed before LOD took custody."],
          ["3.2", "Prohibited items", "Items listed in our Prohibited Items Policy."],
          ["3.3", "Care label non-compliance", "Damage from garments processed against care label instructions you failed to disclose."],
          ["3.4", "High-value items without disclosure", "Items over $300 without written pre-disclosure."],
          ["3.5", "Normal wear and tear", "Expected deterioration from ordinary use."],
          ["3.6", "Customer-caused loss", "Items lost due to customer error or misdelivery instructions."],
          ["3.7", "Consequential damages", "Lost wages, replacement costs beyond credit limits, or emotional distress."],
          ["3.8", "Items in pockets", "Valuables left in garment pockets."],
          ["3.9", "Third-party processing failures", "Where customer caused the condition."],
          ["3.10", "Claims outside window", "Claims submitted after the 24-hour delivery window."],
        ].map(([num, title, body]) => (
          <div key={num} className="mb-4">
            <p className="font-sans text-[15px] font-bold text-[#0A1628]">
              {num} {title}
            </p>
            <PolicyP>{body}</PolicyP>
          </div>
        ))}
      </PolicySection>

      <PolicySection id="file-claim" title="4. How to File a Claim">
        <StepCards
          steps={[
            {
              title: "Contact LOD within 24 hours of delivery",
              body: (
                <>
                  Email{" "}
                  <PolicyLink href="mailto:support@lodvalet.com">support@lodvalet.com</PolicyLink>.
                  Include order number, item description, photos, and estimated value.
                </>
              ),
            },
            { title: "LOD will acknowledge claim within 1 business day", body: "You will receive a confirmation email." },
            { title: "LOD reviews processing photo documentation", body: "Our team reviews intake and processing records." },
            { title: "LOD issues written determination within 3 business days", body: "Approved or denied with explanation." },
            { title: "Credit applied within 1 business day of approval", body: "Credit appears in your LOD account." },
          ]}
        />
        <CalloutBox variant="warning">
          <p className="font-sans text-sm font-bold text-[#EF4444]">
            ⏰ Claims submitted after 24 hours will not be accepted under any circumstances.
          </p>
        </CalloutBox>
      </PolicySection>

      <PolicySection id="determination" title="5. Claim Determination Process">
        <PolicyP>
          <PolicyStrong>5.1</PolicyStrong> LOD reviews photo documentation from intake and
          processing.
        </PolicyP>
        <PolicyP>
          <PolicyStrong>5.2</PolicyStrong> You may be asked to provide additional photos or
          information.
        </PolicyP>
        <PolicyP>
          <PolicyStrong>5.3</PolicyStrong> LOD&apos;s determination is final for service credit
          eligibility.
        </PolicyP>
        <CalloutBox variant="teal">
          <PolicyStrong>5.4</PolicyStrong> If photo documentation is incomplete or missing due to
          a LOD processing partner documentation failure (not due to any action by you), LOD will
          give you the benefit of the doubt where reasonable.
        </CalloutBox>
        <PolicyP>
          <PolicyStrong>5.5</PolicyStrong> Denied claims include a written explanation.
        </PolicyP>
      </PolicySection>

      <PolicySection id="compensation" title="6. Compensation">
        <p className="font-heading text-[48px] font-bold leading-none text-[#00C2A8]">
          Up to $150.00
        </p>
        <p className="mb-4 font-sans text-base text-[#6B7280]">LOD account credit per order</p>
        <PolicyP>
          <PolicyStrong>6.2</PolicyStrong> Credit has no cash value and cannot be transferred.
        </PolicyP>
        <PolicyP>
          <PolicyStrong>6.3</PolicyStrong> Credit does not expire.
        </PolicyP>
        <PolicyP>
          <PolicyStrong>6.4</PolicyStrong> Credit may be applied to future LOD orders only.
        </PolicyP>
      </PolicySection>

      <PolicySection id="how-to-add" title="7. How to Add Garment Protection">
        <div className="rounded-xl bg-[#0A1628] p-7">
          <PolicyP variant="dark">
            Select Garment Protection at checkout in the LOD app or website. It must be added before
            your order is picked up. It cannot be added retroactively.
          </PolicyP>
          <Link
            href="/order"
            className="mt-4 inline-block rounded-lg bg-[#00C2A8] px-6 py-3 font-heading text-sm font-bold text-[#0A1628]"
          >
            Add to Your Next Order
          </Link>
        </div>
      </PolicySection>

      <PolicySection id="limitation" title="8. Limitation">
        <PolicyP>
          Garment Protection applies per order. Each order requires a separate Garment Protection
          purchase. Adding Garment Protection to one order does not cover any other order.
        </PolicyP>
      </PolicySection>
    </>
  );
}
