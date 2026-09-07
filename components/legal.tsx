import type { ReactNode } from "react";

export function LegalPage({
  title,
  updated,
  intro,
  children,
}: {
  title: string;
  updated: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <article className="px-5 pb-20 pt-32 sm:px-8 sm:pt-36">
      <div className="mx-auto w-full max-w-3xl">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-sand-600">
          Yeto Holidays
        </p>
        <h1 className="mt-3 font-display text-3xl tracking-tight text-ocean-900 sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-ocean-800/60">Last updated {updated}</p>
        <p className="mt-6 text-base leading-relaxed text-ocean-800/80">{intro}</p>

        <div className="mt-10 space-y-8 text-[0.95rem] leading-relaxed text-ocean-800/80">
          {children}
        </div>

        <div className="mt-12 rounded-2xl border border-sand-300/60 bg-sand-50 p-5 text-sm leading-relaxed text-ocean-800/80">
          <strong className="font-semibold text-ocean-900">
            This is a placeholder.
          </strong>{" "}
          The text on this page is a plain-language starting point, not legal
          advice. Have it reviewed and adapted to your business, your
          jurisdiction and your actual practices before you take live bookings.
        </div>
      </div>
    </article>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-xl text-ocean-900 sm:text-2xl">
        {heading}
      </h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
