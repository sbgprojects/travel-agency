"use client";

import { useMemo, useState } from "react";
import { ButtonLink, Section, SectionHeading } from "@/components/ui";
import { formatINR } from "@/lib/data";

const VALUES = [40000, 60000, 100000, 150000];
const TENURES = [3, 6, 9, 12];

export default function EmiPlan() {
  const [value, setValue] = useState(60000);
  const [months, setMonths] = useState(6);

  const monthly = useMemo(() => Math.round(value / months), [value, months]);

  return (
    <Section id="emi" className="bg-ocean-950">
      <SectionHeading
        tone="light"
        eyebrow="Easy Travel Plan"
        title="✈️ Travel now. Pay smart."
        intro="Book your holiday today. Travel later."
      />

      <div className="reveal mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
        {/* Worked example */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand-300">
            Worked example
          </p>
          <div className="mt-5 space-y-4">
            <Step
              n={1}
              title={`Book a ${formatINR(60000)} holiday`}
              body="Confirm your trip with a booking against the full holiday value."
            />
            <Step
              n={2}
              title={`Pay ${formatINR(10000)} a month for 6 months`}
              body="Six equal monthly instalments, illustrated with no interest added."
            />
            <Step
              n={3}
              title="Travel in month 7"
              body="Once the plan is complete, you're ready to fly."
            />
          </div>

          {/* Timeline */}
          {/* Sized so all seven markers fit a 360px screen without scrolling;
              overflow-x stays as a safety net on very narrow devices. */}
          <div className="snap-rail mt-7 flex items-center gap-1.5 overflow-x-auto pb-1 sm:gap-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex flex-shrink-0 flex-col items-center gap-1.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sand-400 text-[0.7rem] font-bold text-ocean-950 sm:h-8 sm:w-8">
                  {i + 1}
                </span>
                <span className="text-[0.6rem] text-white/50">Mo {i + 1}</span>
              </div>
            ))}
            <span
              className="mx-0.5 h-px w-2 flex-shrink-0 bg-white/25 sm:mx-1 sm:w-4"
              aria-hidden
            />
            <div className="flex flex-shrink-0 flex-col items-center gap-1.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm sm:h-9 sm:w-9 sm:text-base">
                ✈️
              </span>
              <span className="text-[0.6rem] font-semibold text-sand-300">
                Mo 7 <span className="hidden sm:inline">— Travel</span>
              </span>
            </div>
          </div>
        </div>

        {/* Calculator */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand-300">
            Try it yourself
          </p>

          <fieldset className="mt-5">
            <legend className="text-sm text-white/70">Holiday value</legend>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {VALUES.map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setValue(v)}
                  aria-pressed={value === v}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    value === v
                      ? "border-sand-300 bg-sand-400 text-ocean-950"
                      : "border-white/20 bg-transparent text-white/80 hover:border-white/40"
                  }`}
                >
                  {formatINR(v)}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-6">
            <legend className="text-sm text-white/70">Pay over</legend>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {TENURES.map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMonths(m)}
                  aria-pressed={months === m}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    months === m
                      ? "border-sand-300 bg-sand-400 text-ocean-950"
                      : "border-white/20 bg-transparent text-white/80 hover:border-white/40"
                  }`}
                >
                  {m} months
                </button>
              ))}
            </div>
          </fieldset>

          <div className="mt-7 rounded-xl bg-ocean-900/70 p-5 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">
              Illustrative monthly instalment
            </p>
            <p className="mt-2 font-display text-4xl text-white sm:text-5xl">
              {formatINR(monthly)}
              <span className="text-base font-sans text-white/50">/mo</span>
            </p>
            <p className="mt-1 text-xs text-white/50">
              {formatINR(value)} ÷ {months} months
            </p>
          </div>

          <ButtonLink
            href="/plan?intent=emi"
            variant="sand"
            size="lg"
            className="mt-6 w-full"
          >
            Check My EMI Plan
          </ButtonLink>
        </div>
      </div>

      {/* Compliance disclaimer — required, always visible */}
      <p className="reveal mt-8 max-w-3xl text-xs leading-relaxed text-white/60 sm:text-sm">
        Illustration only. The figures above simply divide the holiday value
        by the number of months and do not include interest, processing fees
        or taxes. Yeto Holidays is not a lender. Instalment plans are offered
        only through regulated financing partners, and the applicable
        interest rate, fees, tenure and eligibility criteria are set by that
        partner and shared with you in writing before you commit. Approval is
        subject to the partner&apos;s checks. Travel dates are confirmed only
        after the booking terms are met.
      </p>
    </Section>
  );
}

function Step({ n, title, body }: { n: number; title: string; body: string }) {
  return (
    <div className="flex gap-3.5">
      <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/15 text-xs font-bold text-sand-200">
        {n}
      </span>
      <div>
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="mt-0.5 text-xs leading-relaxed text-white/60 sm:text-sm">{body}</p>
      </div>
    </div>
  );
}
