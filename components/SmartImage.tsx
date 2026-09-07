"use client";

import Image from "next/image";
import { useState } from "react";

type SmartImageProps = {
  /**
   * One or more candidate URLs. If a source fails to load we fall through to
   * the next one, and finally to a branded gradient so a card is never broken.
   */
  src: string | string[];
  alt: string;
  /** Tailwind classes for the wrapper (control aspect ratio / rounding here). */
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  /** Darkening overlay for images that sit behind text. */
  overlay?: "none" | "soft" | "strong" | "bottom";
};

const OVERLAYS: Record<NonNullable<SmartImageProps["overlay"]>, string> = {
  none: "",
  soft: "bg-ocean-950/25",
  strong: "bg-ocean-950/50",
  bottom:
    "bg-gradient-to-t from-ocean-950/85 via-ocean-950/25 to-transparent",
};

export default function SmartImage({
  src,
  alt,
  className = "",
  imageClassName = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  overlay = "none",
}: SmartImageProps) {
  const sources = Array.isArray(src) ? src : [src];
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const exhausted = index >= sources.length;

  // `fill` needs a positioned ancestor, so default to `relative` — but never
  // fight a caller that positions the wrapper itself. Tailwind resolves
  // conflicting position utilities by CSS source order, not class order, so
  // emitting both would silently override the caller.
  const positioned = /(?:^|\s)(?:absolute|fixed|sticky)(?:\s|$)/.test(className);

  return (
    <div
      className={`${positioned ? "" : "relative"} overflow-hidden bg-gradient-to-br from-ocean-800 via-ocean-600 to-sand-300 ${className}`}
    >
      {!exhausted && (
        <Image
          key={sources[index]}
          src={sources[index]}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          onLoad={() => setLoaded(true)}
          onError={() => {
            setLoaded(false);
            setIndex((i) => i + 1);
          }}
          className={`object-cover transition-opacity duration-700 ${
            loaded ? "opacity-100" : "opacity-0"
          } ${imageClassName}`}
        />
      )}

      {/* Branded texture that shows through while loading, and stands in
          permanently if every candidate source fails. */}
      {!loaded && (
        <div
          aria-hidden
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 20%, rgba(255,255,255,0.35), transparent 45%), radial-gradient(circle at 80% 75%, rgba(255,255,255,0.2), transparent 40%)",
          }}
        />
      )}

      {overlay !== "none" && (
        <div aria-hidden className={`absolute inset-0 ${OVERLAYS[overlay]}`} />
      )}
    </div>
  );
}
