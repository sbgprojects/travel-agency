import type { Metadata } from "next";
import { Suspense } from "react";
import { CONTACT } from "@/lib/data";
import PlanForm from "./PlanForm";

export const metadata: Metadata = {
  title: "Plan My Trip | Yeto Holidays",
  description:
    "Tell us where you want to go and we'll build a tailored Yeto Holidays itinerary for you — share your details and we'll be in touch.",
};

const STEPS = [
  {
    title: "We review your enquiry",
    body: "Our travel team reads your destination, dates and budget and matches it against live availability.",
  },
  {
    title: "You get a tailored itinerary",
    body: "A day-by-day plan with pricing options, sent to you on WhatsApp or email — usually within a few hours.",
  },
  {
    title: "We lock it in together",
    body: "Once you're happy, we handle bookings, visas and documentation end to end.",
  },
];

export default function PlanPage() {
  return (
    <main className="bg-sand-50">
      {/* Hero */}
      <section className="bg-ocean-900 px-5 pb-14 pt-28 sm:px-8 sm:pb-16 sm:pt-32">
        <div className="mx-auto max-w-6xl">
          <span className="inline-block text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-sand-300">
            Plan my trip
          </span>
          <h1 className="mt-3 max-w-xl font-display text-3xl leading-[1.1] text-white sm:text-4xl lg:text-5xl">
            Plan my trip
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
            Tell us where you want to go. We&apos;ll take care of the rest.
          </p>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[1fr_360px] lg:gap-14">
          <Suspense
            fallback={
              <div className="rounded-2xl border border-ocean-900/10 bg-white p-8 text-sm text-ocean-800/60">
                Loading form&hellip;
              </div>
            }
          >
            <PlanForm />
          </Suspense>

          {/* Reassurance column */}
          <aside className="space-y-8">
            <div className="rounded-2xl border border-ocean-900/10 bg-white p-6">
              <h2 className="font-display text-xl text-ocean-900">
                What happens next
              </h2>
              <p className="mt-1 text-sm text-ocean-800/60">
                Typical response time: within 2 working hours.
              </p>
              <ol className="mt-5 space-y-5">
                {STEPS.map((step, index) => (
                  <li key={step.title} className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ocean-900 text-xs font-semibold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ocean-900">
                        {step.title}
                      </p>
                      <p className="mt-0.5 text-sm text-ocean-800/70">
                        {step.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-2xl border border-ocean-900/10 bg-white p-6">
              <h2 className="font-display text-xl text-ocean-900">
                Talk to us directly
              </h2>
              <div className="mt-4 space-y-3 text-sm">
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-medium text-ocean-900 hover:text-ocean-700"
                >
                  WhatsApp: {CONTACT.whatsappDisplay}
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-2 font-medium text-ocean-900 hover:text-ocean-700"
                >
                  {CONTACT.email}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
