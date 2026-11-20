import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import type { Dict } from "@/lib/i18n";
import { loc } from "@/lib/i18n";
import type { Locale, SiteSettings } from "@/lib/types";

export function Footer({
  settings,
  dict,
  locale,
}: {
  settings: SiteSettings;
  dict: Dict;
  locale: Locale;
}) {
  const year = new Date().getFullYear();
  const social = settings.social || {};

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-soft)]">
      <div className="mx-auto max-w-6xl px-5 py-12 text-center">
        <p className="text-lg font-semibold tracking-tight">
          {settings.fullName}
        </p>
        <p className="mt-2 text-sm text-[var(--muted)]">
          {loc(settings.role, locale)}
        </p>

        <div className="mt-5 flex items-center justify-center gap-3">
          {social.github && (
            <a
              href={social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
          )}
          {social.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          )}
          {(social.email || settings.email) && (
            <a
              href={`mailto:${social.email || settings.email}`}
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
            >
              <Mail className="h-4 w-4" />
            </a>
          )}
        </div>

        <p className="mt-8 text-xs text-[var(--muted-2)]">
          © {year} {settings.fullName}. {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
}
