import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal";
import { CONTACT } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms on which Yeto Holidays quotes, books and operates the holidays sold through this website.",
};

export default function Terms() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="this website's launch"
      intro="These terms cover how we quote, book and operate the holidays sold through this website."
    >
      <LegalSection heading="Prices and quotes">
        <p>
          Every price shown on this site is an indicative starting fare per
          person. Actual pricing depends on your travel dates, departure city,
          room and occupancy, airline availability and currency movement at the
          time of booking. A price is only firm once we confirm it to you in
          writing, and it holds for the validity period stated in that quote.
        </p>
      </LegalSection>

      <LegalSection heading="What a package includes">
        <p>
          The inclusions listed on each package page are what we provide.
          Anything not listed is excluded — commonly visa fees, travel
          insurance, meals other than those specified, optional excursions, tips
          and personal expenses. Where an inclusion is marked optional or
          on-request, it is confirmed only when we say so in writing.
        </p>
      </LegalSection>

      <LegalSection heading="Bookings and payment">
        <p>
          A booking is confirmed when we receive the agreed deposit and issue a
          written confirmation. The balance is due by the date stated in that
          confirmation. If a balance is not paid on time, the booking and any
          deposit may be treated as cancelled under the cancellation terms.
        </p>
      </LegalSection>

      <LegalSection heading="Instalment plans">
        <p>
          Yeto Holidays is not a lender and does not itself provide credit. Any
          instalment or &ldquo;pay later&rdquo; option is arranged through a
          regulated financing partner. That partner sets the interest rate,
          fees, tenure and eligibility criteria, discloses them to you in
          writing, and decides whether to approve you. Any instalment figure
          shown on this website is an illustration that excludes interest, fees
          and taxes.
        </p>
      </LegalSection>

      <LegalSection heading="Changes and cancellations">
        <p>
          Cancellation and amendment charges depend on the airline, hotel and
          operator terms attached to your specific booking, and are set out in
          your written confirmation before you pay. Airline tickets and some
          hotel rates are non-refundable from the moment they are issued.
        </p>
        <p>
          We may need to change an itinerary for reasons outside our control —
          weather, strikes, schedule changes, closures or safety advice. Where
          that happens we will offer the nearest reasonable alternative.
        </p>
      </LegalSection>

      <LegalSection heading="Passports, visas and health">
        <p>
          You are responsible for holding a valid passport with sufficient
          validity, the correct visas and any required vaccinations. We provide
          visa assistance where stated, but the decision always rests with the
          relevant consulate, and a refused or delayed visa does not create a
          right to a refund beyond the cancellation terms above.
        </p>
      </LegalSection>

      <LegalSection heading="Insurance">
        <p>
          We strongly recommend comprehensive travel insurance covering medical
          costs, cancellation, delay and baggage, taken out at the time of
          booking.
        </p>
      </LegalSection>

      <LegalSection heading="Our role and liability">
        <p>
          We act as a travel organiser and agent, arranging services delivered
          by airlines, hotels, transport operators and local partners. We choose
          those partners with care, but we are not liable for losses caused by
          events outside our reasonable control. Nothing in these terms limits
          liability that cannot be limited by law.
        </p>
      </LegalSection>

      <LegalSection heading="Complaints">
        <p>
          Tell your tour manager or local partner while you are travelling so we
          can try to fix it there and then. If something remains unresolved,
          write to{" "}
          <a
            href={`mailto:${CONTACT.email}`}
            className="font-medium text-ocean-700 underline underline-offset-4"
          >
            {CONTACT.email}
          </a>{" "}
          and we will respond.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
