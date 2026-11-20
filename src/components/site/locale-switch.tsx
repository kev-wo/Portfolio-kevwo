"use client";

import Link from "next/link";
import type { Locale } from "@/lib/types";

export function LocaleSwitch({ locale }: { locale: Locale }) {
  return (
    <div className="flex items-center rounded-full border border-[var(--border)] p-0.5 font-mono text-xs">
      {(["en", "fr"] as Locale[]).map((l) => (
        <Link
          key={l}
          href={`/${l}`}
          className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
            l === locale
              ? "bg-[var(--fg)] text-[var(--bg)]"
              : "text-[var(--muted)] hover:text-[var(--fg)]"
          }`}
          aria-current={l === locale ? "true" : undefined}
        >
          {l}
        </Link>
      ))}
    </div>
  );
}
