"use client";

import { useMemo, useState } from "react";
import { ButtonLink } from "@/components/ui";
import { formatINR } from "@/lib/data";

const VALUES = [40000, 60000, 100000, 150000];
const TENURES = [3, 6, 9, 12];

const CHIP_BASE =
  "rounded-full border px-4 py-2 text-sm font-medium transition-colors";
const CHIP_ON = "border-sand-300 bg-sand-400 text-ocean-950";
const CHIP_OFF =
  "border-white/20 bg-transparent text-white/80 hover:border-white/40";

/**
 * The only interactive part of the EMI section, kept as a small client island
 * so the surrounding copy, worked example and disclaimer stay server-rendered
 * and ship no JavaScript.
 */
export default function EmiCalculator() {
  const [value, setValue] = useState(60000);
  const [months, setMonths] = useState(6);

  const monthly = useMemo(() => Math.round(value / months), [value, months]);

  return (
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
              className={`${CHIP_BASE} ${value === v ? CHIP_ON : CHIP_OFF}`}
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
              className={`${CHIP_BASE} ${months === m ? CHIP_ON : CHIP_OFF}`}
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
        <p
          aria-live="polite"
          className="mt-2 font-display text-4xl text-white sm:text-5xl"
        >
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
  );
}
