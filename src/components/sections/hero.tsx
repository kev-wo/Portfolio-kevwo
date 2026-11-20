"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import type { Dict } from "@/lib/i18n";
import { loc } from "@/lib/i18n";
import type { Locale, SiteSettings } from "@/lib/types";
import { Avatar } from "@/components/ui/avatar";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export function Hero({
  settings,
  dict,
  locale,
}: {
  settings: SiteSettings;
  dict: Dict;
  locale: Locale;
}) {
  const social = settings.social || {};
  const resumeUrl =
    locale === "fr"
      ? settings.resumeFrUrl || settings.resumeEnUrl
      : settings.resumeEnUrl || settings.resumeFrUrl;
  const profile =
    typeof settings.profileImage === "string" ? settings.profileImage : null;

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20"
    >
      {/* decorative rings behind avatar */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-8%] top-10 hidden h-[640px] w-[640px] rounded-full opacity-[0.5] lg:block"
        style={{
          background:
            "repeating-radial-gradient(circle, color-mix(in srgb, var(--fg) 7%, transparent) 0 1px, transparent 1px 44px)",
          maskImage: "radial-gradient(circle, #000 40%, transparent 72%)",
        }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card-2)] px-3 py-1.5 text-xs font-medium text-[var(--muted)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--success)] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--success)]" />
            </span>
            {loc(settings.availabilityBadge, locale)}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl"
          >
            <span className="block text-[var(--muted)]">
              {loc(settings.heroGreeting, locale)}
            </span>
            <span className="block">{settings.fullName}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--fg-soft)]"
          >
            {loc(settings.heroTagline, locale)}
          </motion.p>

          {loc(settings.heroSubtitle, locale) && (
            <motion.p
              variants={item}
              className="mt-3 max-w-xl text-[15px] leading-relaxed text-[var(--muted)]"
            >
              {loc(settings.heroSubtitle, locale)}
            </motion.p>
          )}

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            {resumeUrl && (
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--fg)] px-5 py-3 text-sm font-medium text-[var(--bg)] transition-opacity hover:opacity-90"
              >
                <Download className="h-4 w-4" />
                {dict.hero.downloadResume}
              </a>
            )}
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-3 text-sm font-medium transition-colors hover:bg-[var(--card-2)]"
            >
              {dict.hero.viewWork}
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-6 flex items-center gap-2.5">
            {social.github && (
              <SocialIcon href={social.github} label="GitHub">
                <GithubIcon className="h-4 w-4" />
              </SocialIcon>
            )}
            {social.linkedin && (
              <SocialIcon href={social.linkedin} label="LinkedIn">
                <LinkedinIcon className="h-4 w-4" />
              </SocialIcon>
            )}
            {(social.email || settings.email) && (
              <SocialIcon
                href={`mailto:${social.email || settings.email}`}
                label="Email"
              >
                <Mail className="h-4 w-4" />
              </SocialIcon>
            )}
          </motion.div>

          <motion.dl
            variants={item}
            className="mt-10 flex flex-wrap gap-x-10 gap-y-6"
          >
            {settings.stats?.map((st) => (
              <div key={st.value + loc(st.label, locale)}>
                <dt className="text-3xl font-semibold tracking-tight">
                  {st.value}
                </dt>
                <dd className="mt-1 text-xs text-[var(--muted)]">
                  {loc(st.label, locale)}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="relative aspect-square overflow-hidden rounded-full border border-[var(--border)] bg-[var(--card-2)] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]">
            <Avatar src={profile} name={settings.fullName} />
          </div>
          {settings.available && (
            <div className="absolute bottom-6 left-0 flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm shadow-lg">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--success)]" />
              {dict.hero.availableForHire}
            </div>
          )}
        </motion.div>
      </div>

      <div className="mt-14 flex flex-col items-center gap-2">
        <span className="eyebrow">{dict.hero.scroll}</span>
        <ArrowDown className="h-4 w-4 animate-bounce text-[var(--muted)]" />
      </div>
    </section>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--fg)] transition-colors hover:bg-[var(--card-2)]"
    >
      {children}
    </a>
  );
}
