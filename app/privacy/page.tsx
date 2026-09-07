import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal";
import { CONTACT } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Yeto Holidays collects, uses and protects the information you share when you enquire about a holiday.",
};

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="this website's launch"
      intro="This page explains what happens to the information you share with Yeto Holidays when you enquire about a trip."
    >
      <LegalSection heading="What we collect">
        <p>
          When you fill in an enquiry form or message us, we collect the details
          you choose to give us — typically your name, phone number, email
          address, the destination you are interested in, your travel dates,
          the number of travellers and any notes you add.
        </p>
        <p>
          For a confirmed booking we also need the details airlines, hotels and
          consulates require, such as passport information, dates of birth and
          any accessibility or dietary requirements you tell us about.
        </p>
      </LegalSection>

      <LegalSection heading="How the enquiry form works">
        <p>
          The enquiry form on this website does not currently send your details
          to a server. It formats what you type into a WhatsApp message that you
          choose to send. Until you send that message, the details stay in your
          own browser.
        </p>
      </LegalSection>

      <LegalSection heading="How we use it">
        <p>
          To answer your enquiry, build and price an itinerary, make the
          bookings you ask us to make, and stay in touch about the trip. If you
          have agreed to hear from us, we may also send occasional offers — and
          every one of those will include a way to stop receiving them.
        </p>
      </LegalSection>

      <LegalSection heading="Who we share it with">
        <p>
          Only the partners needed to deliver your trip: airlines, hotels,
          destination management companies, transport operators, insurers and
          visa processing services, plus payment providers and any regulated
          financing partner if you choose an instalment plan. We do not sell
          your information.
        </p>
      </LegalSection>

      <LegalSection heading="How long we keep it">
        <p>
          For as long as needed to serve you and to meet our tax and legal
          record-keeping obligations. You can ask us to delete details we are
          not required to keep.
        </p>
      </LegalSection>

      <LegalSection heading="Your choices">
        <p>
          You can ask to see the information we hold about you, correct it, ask
          us to delete it, or withdraw consent to marketing at any time. Write
          to{" "}
          <a
            href={`mailto:${CONTACT.email}`}
            className="font-medium text-ocean-700 underline underline-offset-4"
          >
            {CONTACT.email}
          </a>{" "}
          and we will respond.
        </p>
      </LegalSection>

      <LegalSection heading="Cookies and analytics">
        <p>
          This site does not set advertising cookies. If analytics are added
          later, this page will be updated to say what is measured and how to
          opt out.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
