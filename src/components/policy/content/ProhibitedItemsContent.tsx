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

type CategoryCardProps = {
  number: number;
  title: string;
  items: string[];
  why: string;
  extra?: React.ReactNode;
};

function CategoryCard({ number, title, items, why, extra }: CategoryCardProps) {
  return (
    <div className="mb-4 overflow-hidden rounded-2xl border border-[#E8EAED] bg-white">
      <div className="-mx-0 bg-[#0A1628] px-8 py-4">
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.1em] text-[#00C2A8]">
          Category {number}:
        </p>
        <h3 className="font-heading text-lg font-bold text-white">{title}</h3>
      </div>
      <div className="p-7 md:p-8">
        <ul className="mb-4 space-y-2.5">
          {items.map((item) => (
            <li
              key={item}
              className="flex gap-2 font-sans text-[15px] text-[#0A1628]/75"
            >
              <span className="text-red-500/80" aria-hidden>
                ✕
              </span>
              {item}
            </li>
          ))}
        </ul>
        <div className="rounded-lg bg-[#0A1628]/3 p-4">
          <p className="font-sans text-xs font-bold uppercase text-[#6B7280]">Why:</p>
          <p className="mt-1 font-sans text-[13px] italic text-[#6B7280]">{why}</p>
        </div>
        {extra}
      </div>
    </div>
  );
}

export default function ProhibitedItemsContent() {
  return (
    <>
      <NoticeBlock variant="warning">
        <div className="flex gap-3">
          <span className="text-2xl" aria-hidden>
            ⚠
          </span>
          <div>
            <p className="font-heading text-base text-[#0A1628]">
              For the safety of your laundry, the safety of our team, and the protection of other
              customers&apos; orders, certain items cannot be placed in an LOD order. Please read
              this list carefully before placing your first order.
            </p>
            <p className="mt-3 font-heading text-[15px] font-bold text-[#EF4444]">
              By placing an order with LOD, you confirm that no prohibited items are included in
              your laundry.
            </p>
          </div>
        </div>
      </NoticeBlock>

      <PolicySection id="complete-list" title="1. Prohibited Items — Complete List">
        <CategoryCard
          number={1}
          title="Specialty Fabrics That Cannot Be Machine Washed"
          items={[
            "Dry clean only garments",
            "Fur and fur-trimmed items",
            "Leather and faux leather",
            "Suede",
            "Structured garments with internal boning or rigid components",
            "Athletic wear with rigid structures unsuitable for machine washing",
          ]}
          why="These materials require specialized care that LOD's standard wash process cannot safely provide."
          extra={
            <PolicyP>
              Questions? Contact{" "}
              <PolicyLink href="mailto:support@lodvalet.com">support@lodvalet.com</PolicyLink>{" "}
              before placing these items in your bag.
            </PolicyP>
          }
        />
        <CategoryCard
          number={2}
          title="Contaminated or Hazardous Items"
          items={[
            "Items with biological contamination (blood, bodily fluids, etc.)",
            "Items with chemical contamination (paint, solvents, pesticides, etc.)",
            "Flammable materials or items soaked in flammable substances",
          ]}
          why="These items pose health and safety risks to our team and equipment."
        />
        <CategoryCard
          number={3}
          title="Damaged or Compromised Items"
          items={[
            "Items that are soaking wet at pickup",
            "Items with active mold or mildew",
            "Items with active pest infestation",
          ]}
          why="These conditions can contaminate other customers' orders and damage equipment."
        />
        <CategoryCard
          number={4}
          title="Valuables and Personal Items"
          items={[
            "Cash and coins",
            "Jewelry and watches",
            "Keys",
            "Electronics",
            "Credit cards and IDs",
            "Medications",
          ]}
          why="LOD is not responsible for items left in pockets or bags."
          extra={
            <CalloutBox variant="gold">
              <p className="font-heading text-[15px] font-bold text-[#D4A843]">
                👖 Please check all pockets before placing items in your LOD bag.
              </p>
            </CalloutBox>
          }
        />
        <CategoryCard
          number={5}
          title="High-Value Garments Without Pre-Disclosure"
          items={[
            "Individual garments valued over $300 without written pre-disclosure to LOD",
          ]}
          why="High-value items require special handling agreements before processing."
          extra={
            <PolicyP>
              If you have a high-end designer garment that you believe is machine-washable,
              contact us before placing it in your bag:{" "}
              <PolicyLink href="mailto:support@lodvalet.com">support@lodvalet.com</PolicyLink>
            </PolicyP>
          }
        />
        <CategoryCard
          number={6}
          title="Irreplaceable Items"
          items={[
            "Family heirlooms",
            "Wedding dresses",
            "Graduation gowns",
            "Custom or one-of-a-kind items with irreplaceable sentimental value",
          ]}
          why="LOD cannot assume liability for items that cannot be replaced."
        />
      </PolicySection>

      <PolicySection id="specific-items" title="2. Notes on Specific Item Types">
        <div className="space-y-4">
          <div className="rounded-xl bg-[#F4F6F8] p-6">
            <h3 className="font-heading text-base font-bold text-[#0A1628]">Bedding Add-Ons</h3>
            <PolicyP>
              Comforters, duvets, and oversized bedding require the Bedding add-on at checkout.
              Items placed without the add-on may be returned unwashed. Contact{" "}
              <PolicyLink href="mailto:support@lodvalet.com">support@lodvalet.com</PolicyLink>{" "}
              with questions.
            </PolicyP>
          </div>
          <div className="rounded-xl bg-[#F4F6F8] p-6">
            <h3 className="font-heading text-base font-bold text-[#0A1628]">Pet Items</h3>
            <PolicyP>
              Pet bedding and heavily soiled pet items may require pre-approval. Contact{" "}
              <PolicyLink href="mailto:support@lodvalet.com">support@lodvalet.com</PolicyLink>{" "}
              before including pet items in your order.
            </PolicyP>
          </div>
        </div>
      </PolicySection>

      <PolicySection id="if-found" title="3. What Happens If Prohibited Items Are Found">
        <StepCards
          steps={[
            { title: "Item immediately set aside and photographed", body: "Documented for your records." },
            { title: "You will be notified by SMS or email", body: "Within 24 hours of discovery." },
            { title: "Item returned with completed order without processing", body: "Returned in original condition." },
            { title: "LOD will not wash, dry, or fold the prohibited item", body: "No processing fees for the prohibited item itself." },
          ]}
        />
        <PolicyP>
          <PolicyStrong>3.2</PolicyStrong> You are liable for any damage to other garments caused
          by prohibited items in your order.
        </PolicyP>
        <PolicyP>
          <PolicyStrong>3.3</PolicyStrong> You may be charged for equipment damage caused by
          prohibited items.
        </PolicyP>
        <CalloutBox variant="warning">
          <PolicyStrong>3.4</PolicyStrong> Garment Protection does not apply to prohibited items
          under any circumstances.
        </CalloutBox>
      </PolicySection>

      <PolicySection id="waivers" title="4. Special Situations and Waivers">
        {[
          {
            label: "4.1 Dry Clean Only Waiver",
            title: "Dry Clean Only Items",
            body: "Contact support before pickup to discuss whether a waiver may be available for specific items.",
          },
          {
            label: "4.2 High-Value Item Pre-Disclosure",
            title: "Items Over $300",
            body: "Written pre-disclosure is required before pickup for high-value garments.",
          },
          {
            label: "4.3 Bedding and Oversized Items",
            title: "Bedding Add-On Required",
            body: "Oversized bedding must be declared and the appropriate add-on selected at checkout.",
          },
          {
            label: "4.4 Questions",
            title: "Not Sure?",
            body: "When in doubt, contact us before your pickup window.",
          },
        ].map((waiver) => (
          <CalloutBox key={waiver.label} variant="teal" label={waiver.label}>
            <p className="font-heading text-base font-bold text-[#0A1628]">{waiver.title}</p>
            <PolicyP>{waiver.body}</PolicyP>
            <PolicyLink href="mailto:support@lodvalet.com">support@lodvalet.com</PolicyLink>
          </CalloutBox>
        ))}
      </PolicySection>

      <div className="mt-10 rounded-xl bg-[#0A1628] p-7 text-center">
        <p className="font-heading text-base text-white">
          If you are unsure whether an item is permitted, contact us before your pickup.
        </p>
        <a
          href="mailto:support@lodvalet.com"
          className="mt-5 inline-block rounded-lg bg-[#00C2A8] px-6 py-3 font-heading text-sm font-bold text-[#0A1628]"
        >
          Email support@lodvalet.com
        </a>
      </div>
    </>
  );
}
