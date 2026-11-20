"use client";

import { useState } from "react";
import type { Skill } from "@/lib/types";

function monogram(name: string) {
  const clean = name.replace(/[^a-zA-Z0-9 /+]/g, "");
  const parts = clean.split(/[ /]+/).filter(Boolean);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return clean.slice(0, 2).toUpperCase();
}

export function SkillIcon({ skill }: { skill: Skill }) {
  const [broken, setBroken] = useState(false);
  const src =
    (typeof skill.logo === "string" ? skill.logo : undefined) || skill.iconUrl;
  const color = skill.color || "#4f46e5";

  if (src && !broken) {
    return (
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--card-2)] p-2.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={skill.name}
          className="h-full w-full object-contain"
          loading="lazy"
          onError={() => setBroken(true)}
        />
      </div>
    );
  }

  return (
    <div
      className="flex h-14 w-14 items-center justify-center rounded-2xl font-mono text-sm font-semibold"
      style={{
        color,
        background: `color-mix(in srgb, ${color} 14%, transparent)`,
        border: `1px solid color-mix(in srgb, ${color} 30%, transparent)`,
      }}
      aria-hidden
    >
      {monogram(skill.name)}
    </div>
  );
}
