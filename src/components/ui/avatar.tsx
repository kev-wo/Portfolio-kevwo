"use client";

import { useState } from "react";

export function Avatar({
  src,
  name,
  className = "",
}: {
  src?: string | null;
  name: string;
  className?: string;
}) {
  const [broken, setBroken] = useState(false);
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  if (src && !broken) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={name}
        className={`h-full w-full object-cover ${className}`}
        onError={() => setBroken(true)}
      />
    );
  }

  return (
    <div
      className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-[var(--card-2)] to-[var(--bg-soft)] font-mono text-5xl font-semibold text-[var(--muted)] ${className}`}
      aria-hidden
    >
      {initials}
    </div>
  );
}
