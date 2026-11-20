import { Award as AwardIcon, Calendar, GraduationCap, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import type { Dict } from "@/lib/i18n";
import { loc } from "@/lib/i18n";
import type { Award, Education as Edu, Locale } from "@/lib/types";

export function Education({
  education,
  awards,
  dict,
  locale,
}: {
  education: Edu[];
  awards: Award[];
  dict: Dict;
  locale: Locale;
}) {
  if (!education.length && !awards.length) return null;

  return (
    <section id="education" className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5">
        <SectionHeading
          eyebrow="// background"
          title={dict.sections.educationTitle}
          subtitle={dict.sections.educationSubtitle}
        />

        {education.length > 0 && (
          <div className="mt-14 space-y-5">
            {education.map((edu, i) => (
              <Reveal key={(edu._id || "") + edu.institution} delay={i * 0.05}>
                <article className="card-surface p-6 transition-colors hover:border-[var(--muted-2)] sm:p-7">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="flex items-center gap-2 text-lg font-semibold tracking-tight">
                        <GraduationCap className="h-4 w-4 text-[var(--muted)]" />
                        {edu.institution}
                      </h3>
                      <p className="mt-0.5 pl-6 text-sm text-[var(--muted)]">
                        {loc(edu.degree, locale)}
                      </p>
                    </div>
                    <div className="shrink-0 pl-6 text-sm text-[var(--muted)] sm:pl-0 sm:text-right">
                      <p className="flex items-center gap-1.5 sm:justify-end">
                        <Calendar className="h-3.5 w-3.5" />
                        {loc(edu.period, locale)}
                      </p>
                      {edu.location && (
                        <p className="mt-1 flex items-center gap-1.5 sm:justify-end">
                          <MapPin className="h-3.5 w-3.5" />
                          {edu.location}
                        </p>
                      )}
                    </div>
                  </div>
                  {edu.details?.length > 0 && (
                    <ul className="mt-4 space-y-2 pl-6">
                      {edu.details.map((d, di) => (
                        <li
                          key={di}
                          className="relative pl-4 text-sm leading-relaxed text-[var(--fg-soft)] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--muted-2)]"
                        >
                          {loc(d, locale)}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        )}

        {awards.length > 0 && (
          <div className="mt-16">
            <Reveal>
              <p className="eyebrow mb-6 text-center">
                {dict.sections.awardsTitle}
              </p>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {awards.map((aw, i) => (
                <Reveal key={(aw._id || "") + loc(aw.title, locale)} delay={i * 0.05}>
                  <article className="card-surface flex gap-4 p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--card-2)] text-[var(--accent)]">
                      <AwardIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold tracking-tight">
                        {loc(aw.title, locale)}
                      </h4>
                      <p className="mt-0.5 text-xs text-[var(--muted)]">
                        {aw.issuer}
                        {aw.issuer && loc(aw.date, locale) ? " · " : ""}
                        {loc(aw.date, locale)}
                      </p>
                      {loc(aw.description, locale) && (
                        <p className="mt-2 text-sm leading-relaxed text-[var(--fg-soft)]">
                          {loc(aw.description, locale)}
                        </p>
                      )}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
