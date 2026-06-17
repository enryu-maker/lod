import {
  CalloutBox,
  PolicyLink,
  PolicyList,
  PolicyNumberedList,
  PolicyP,
  PolicySection,
  PolicyStrong,
} from "@/components/policy/PolicyPrimitives";

export default function DmcaContent() {
  return (
    <>
      <PolicySection id="lod-ip" title="1. LOD Intellectual Property">
        <PolicyP>
          All content on the LOD platform, including trademarks, logos, text, graphics, and
          software, is owned by LOD LLC or its licensors and protected by intellectual property
          laws.
        </PolicyP>
        <div className="my-4 rounded-xl bg-[#0A1628] p-6">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.1em] text-[#00C2A8]">
            LOD Unregistered Trademarks (™)
          </p>
          <PolicyList
            variant="dark"
            items={["LOD™", "HANDLED.™", "The LOD Portal O logo™", "lodvalet.com"]}
          />
          <p className="mt-3 font-sans text-xs italic text-white/45">
            LOD has not yet obtained federal trademark registration for these marks. Upon
            registration, these marks will be updated to reflect ® status.
          </p>
        </div>
        <p className="font-heading text-[15px] font-bold text-[#0A1628]">
          You may not use any LOD trademark, logo, or brand element without our prior written
          consent.
        </p>
      </PolicySection>

      <PolicySection id="user-content" title="2. User Content">
        <PolicyP>
          By submitting content to LOD (such as reviews, photos, or feedback), you grant LOD a
          non-exclusive, royalty-free license to use, display, and reproduce that content in
          connection with our services and marketing, subject to our Privacy Policy.
        </PolicyP>
      </PolicySection>

      <PolicySection id="dmca-notice" title="3. DMCA Notice  Reporting Copyright Infringement">
        <PolicyP>
          If you believe content on the LOD platform infringes your copyright, please send a DMCA
          notice with the following information:
        </PolicyP>
        <div className="rounded-xl bg-[#F4F6F8] p-6">
          <PolicyNumberedList
            items={[
              "Your full name and contact information",
              "A description of the copyrighted work you claim has been infringed",
              "The specific URL or location of the infringing material on LOD's platform",
              "A statement that you have a good-faith belief the use is not authorized",
              "A statement, under penalty of perjury, that the information in your notice is accurate and you are authorized to act on behalf of the copyright owner",
              "Your electronic or physical signature",
            ]}
          />
        </div>
        <div className="mt-4 rounded-lg bg-[#0A1628] p-5">
          <p className="font-sans text-xs uppercase text-white/45">Send DMCA notices to:</p>
          <p className="mt-1">
            <PolicyLink href="mailto:legal@lodvalet.com">legal@lodvalet.com</PolicyLink>
          </p>
          <PolicyP variant="dark">
            LOD will respond to valid DMCA notices in accordance with the Digital Millennium
            Copyright Act. Accounts of repeat infringers will be terminated.
          </PolicyP>
        </div>
      </PolicySection>

      <PolicySection id="counter-notice" title="4. DMCA Counter-Notice">
        <PolicyP>
          If you believe your content was removed in error, you may submit a counter-notice
          including:
        </PolicyP>
        <div className="rounded-xl bg-[#F4F6F8] p-6">
          <PolicyList
            items={[
              "Your full name and contact information",
              "Identification of the removed material and its prior location",
              "A statement under penalty of perjury that you have a good-faith belief the material was removed by mistake",
              "Your consent to jurisdiction of the federal court in your district",
              "Your electronic or physical signature",
            ]}
          />
        </div>
        <PolicyP>
          Send counter-notices to{" "}
          <PolicyLink href="mailto:legal@lodvalet.com">legal@lodvalet.com</PolicyLink>.
        </PolicyP>
        <CalloutBox variant="teal">
          LOD will forward valid counter-notices to the original complainant. If the original
          complainant does not file a court action within 10 to 14 business days, LOD may restore
          the removed content.
        </CalloutBox>
      </PolicySection>

      <PolicySection id="trademark-infringement" title="5. Trademark Infringement">
        <PolicyP>
          To report unauthorized use of LOD trademarks or brand elements, contact{" "}
          <PolicyLink href="mailto:legal@lodvalet.com">legal@lodvalet.com</PolicyLink> with a
          description of the infringing use and your contact information.
        </PolicyP>
      </PolicySection>
    </>
  );
}
