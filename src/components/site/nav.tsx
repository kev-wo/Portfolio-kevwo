"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { Dict } from "@/lib/i18n";
import type { Locale } from "@/lib/types";
import { LocaleSwitch } from "./locale-switch";
import { ThemeToggle } from "./theme-toggle";

export function Nav({
  locale,
  dict,
  name,
}: {
  locale: Locale;
  dict: Dict;
  name: string;
}) {
  const links = [
    { id: "home", label: dict.nav.home },
    { id: "skills", label: dict.nav.skills },
    { id: "experience", label: dict.nav.experience },
    { id: "projects", label: dict.nav.projects },
    { id: "education", label: dict.nav.education },
    { id: "contact", label: dict.nav.contact },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--bg)_82%,transparent)] backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="text-[15px] font-semibold tracking-tight">
          {name}
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                active === l.id
                  ? "text-[var(--fg)]"
                  : "text-[var(--muted)] hover:text-[var(--fg)]"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LocaleSwitch locale={locale} />
          <ThemeToggle label={dict.theme.toggle} />
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-[var(--border)] bg-[var(--bg)] md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-2">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-2 py-2.5 text-sm ${
                  active === l.id ? "text-[var(--fg)]" : "text-[var(--muted)]"
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
