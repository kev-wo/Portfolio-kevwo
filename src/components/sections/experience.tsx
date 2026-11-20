import { Building2, Calendar, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import type { Dict } from "@/lib/i18n";
import { loc } from "@/lib/i18n";
import type { Experience as Exp, Locale } from "@/lib/types";

export function Experience({
  experiences,
  dict,
  locale,
}: {
  experiences: Exp[];
  dict: Dict;
  locale: Locale;
}) {
  if (!experiences.length) return null;

  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5">
        <SectionHeading
          eyebrow="// career"
          title={dict.sections.experienceTitle}
          subtitle={dict.sections.experienceSubtitle}
        />

        <div className="mt-14 space-y-5">
          {experiences.map((exp, i) => (
            <Reveal key={(exp._id || "") + exp.company} delay={i * 0.05}>
              <article className="card-surface p-6 transition-colors hover:border-[var(--muted-2)] sm:p-7">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-semibold tracking-tight">
                      <Building2 className="h-4 w-4 text-[var(--muted)]" />
                      {loc(exp.role, locale)}
                    </h3>
                    <p className="mt-0.5 pl-6 text-sm text-[var(--muted)]">
                      {exp.company}
                    </p>
                  </div>
                  <div className="shrink-0 pl-6 text-sm text-[var(--muted)] sm:pl-0 sm:text-right">
                    <p className="flex items-center gap-1.5 sm:justify-end">
                      <Calendar className="h-3.5 w-3.5" />
                      {loc(exp.period, locale)}
                    </p>
                    {exp.location && (
                      <p className="mt-1 flex items-center gap-1.5 sm:justify-end">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </p>
                    )}
                  </div>
                </div>

                {exp.bullets?.length > 0 && (
                  <ul className="mt-4 space-y-2 pl-6">
                    {exp.bullets.map((b, bi) => (
                      <li
                        key={bi}
                        className="relative pl-4 text-sm leading-relaxed text-[var(--fg-soft)] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--muted-2)]"
                      >
                        {loc(b, locale)}
                      </li>
                    ))}
                  </ul>
                )}

                {exp.tags?.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2 pl-6">
                    {exp.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--border)] bg-[var(--card-2)] px-2.5 py-1 text-xs text-[var(--muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
