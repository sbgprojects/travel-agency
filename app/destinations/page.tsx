import type { Metadata } from "next";
import Link from "next/link";
import SmartImage from "@/components/SmartImage";
import { Section, SectionHeading } from "@/components/ui";
import { destinations, formatINR } from "@/lib/data";

export const metadata: Metadata = {
  title: "All Destinations",
  description:
    "Browse every Yeto Holidays destination — Dubai, Vietnam, Thailand, Singapore, Europe, Malaysia, Bali and more — with itineraries, inclusions and indicative pricing.",
};

export default function DestinationsPage() {
  const heroImages = destinations.flatMap((d) => d.images).slice(0, 6);

  return (
    <div className="bg-sand-50">
      {/* Hero */}
      <section className="relative flex h-[45svh] min-h-[320px] w-full items-end overflow-hidden bg-ocean-950">
        <SmartImage
          src={heroImages}
          alt="Collage of Yeto Holidays destinations around the world"
          className="absolute inset-0 h-full w-full"
          sizes="100vw"
          priority
          overlay="strong"
        />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-10 pt-28 sm:px-8 sm:pb-14">
          <span className="inline-block text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-sand-300">
            Destinations
          </span>
          <h1 className="mt-3 max-w-2xl font-display text-3xl leading-[1.1] text-white sm:text-4xl lg:text-5xl">
            Every Yeto destination
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
            Handpicked routes across Asia, the Gulf and Europe — each one planned,
            priced and ready to be made yours.
          </p>
        </div>
      </section>

      {/* Grid */}
      <Section className="!pt-14">
        <SectionHeading
          eyebrow={`${destinations.length} routes`}
          title="Pick a place to start"
          intro="Tap any destination for the full itinerary, inclusions and a detailed price breakdown."
        />

        <div className="reveal mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <Link
              key={destination.slug}
              href={`/destinations/${destination.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-ocean-900/10 bg-white shadow-sm shadow-ocean-950/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ocean-950/10"
            >
              <SmartImage
                src={destination.images}
                alt={`${destination.name}, ${destination.country}`}
                className="aspect-[4/3] w-full"
                imageClassName="transition-transform duration-500 ease-out group-hover:scale-105"
                overlay="bottom"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl text-ocean-900">
                    <span className="mr-1.5">{destination.flag}</span>
                    {destination.name}
                  </h3>
                </div>
                <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-sand-600">
                  {destination.country}
                </p>
                <p className="mt-2 text-sm text-ocean-800/70">
                  {destination.tagline}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {destination.highlights.slice(0, 3).map((h) => (
                    <span
                      key={h}
                      className="rounded-full bg-ocean-50 px-2.5 py-1 text-[0.7rem] font-medium text-ocean-800"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between pt-5 text-sm">
                  <span className="font-semibold text-ocean-900">
                    from {formatINR(destination.fromPrice)}
                  </span>
                  <span className="text-ocean-800/60">
                    {destination.nights}N / {destination.days}D
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}
