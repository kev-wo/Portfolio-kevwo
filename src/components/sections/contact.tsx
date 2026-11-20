"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import type { Dict } from "@/lib/i18n";
import { loc } from "@/lib/i18n";
import type { Locale, SiteSettings } from "@/lib/types";

export function Contact({
  settings,
  dict,
  locale,
}: {
  settings: SiteSettings;
  dict: Dict;
  locale: Locale;
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const to = settings.social?.email || settings.email || "";

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      form.subject || `Portfolio contact from ${form.name}`,
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`,
    );
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full rounded-xl border border-[var(--border)] bg-[var(--card-2)] px-4 py-3 text-sm outline-none transition-colors placeholder:text-[var(--muted-2)] focus:border-[var(--muted-2)]";

  const infos = [
    {
      icon: Mail,
      label: dict.contact.emailLabel,
      value: settings.email,
      href: `mailto:${settings.email}`,
    },
    {
      icon: Phone,
      label: dict.contact.phoneLabel,
      value: settings.phone,
      href: `tel:${settings.phone}`,
    },
    {
      icon: MapPin,
      label: dict.contact.locationLabel,
      value: loc(settings.location, locale),
    },
  ].filter((i) => i.value);

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading
          eyebrow="// contact"
          title={dict.sections.contactTitle}
          subtitle={dict.sections.contactSubtitle}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal className="space-y-4">
            {infos.map((info) => {
              const Icon = info.icon;
              const inner = (
                <div className="card-surface flex items-center gap-4 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--card-2)] text-[var(--accent)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--muted)]">{info.label}</p>
                    <p className="mt-0.5 text-sm font-medium">{info.value}</p>
                  </div>
                </div>
              );
              return info.href ? (
                <a
                  key={info.label}
                  href={info.href}
                  className="block transition-transform hover:-translate-y-0.5"
                >
                  {inner}
                </a>
              ) : (
                <div key={info.label}>{inner}</div>
              );
            })}
          </Reveal>

          <Reveal delay={0.08}>
            <form onSubmit={onSubmit} className="card-surface space-y-3 p-6">
              <p className="mb-1 font-semibold tracking-tight">
                {dict.contact.formTitle}
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  required
                  className={field}
                  placeholder={dict.contact.name}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  required
                  type="email"
                  className={field}
                  placeholder={dict.contact.yourEmail}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <input
                className={field}
                placeholder={dict.contact.subject}
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
              />
              <textarea
                required
                rows={5}
                className={`${field} resize-none`}
                placeholder={dict.contact.message}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--fg)] px-5 py-3 text-sm font-medium text-[var(--bg)] transition-opacity hover:opacity-90"
              >
                <Send className="h-4 w-4" />
                {dict.contact.send}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
