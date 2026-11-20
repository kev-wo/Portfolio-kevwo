import { ArrowUpRight, Code2, Play } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import type { Dict } from "@/lib/i18n";
import { loc } from "@/lib/i18n";
import type { Locale, Project } from "@/lib/types";

const GRADIENTS = [
  "linear-gradient(135deg,#6366f1,#8b5cf6)",
  "linear-gradient(135deg,#0ea5e9,#22d3ee)",
  "linear-gradient(135deg,#f59e0b,#ef4444)",
  "linear-gradient(135deg,#10b981,#14b8a6)",
  "linear-gradient(135deg,#ec4899,#f43f5e)",
  "linear-gradient(135deg,#8b5cf6,#6366f1)",
];

export function Projects({
  projects,
  dict,
  locale,
}: {
  projects: Project[];
  dict: Dict;
  locale: Locale;
}) {
  if (!projects.length) return null;

  return (
    <section id="projects" className="bg-[var(--bg-soft)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="// work"
          title={dict.sections.projectsTitle}
          subtitle={dict.sections.projectsSubtitle}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const image = typeof p.image === "string" ? p.image : null;
            const title = loc(p.title, locale);
            return (
              <Reveal key={(p._id || "") + title} delay={(i % 3) * 0.06}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] transition-all hover:-translate-y-1 hover:shadow-[0_24px_60px_-28px_rgba(0,0,0,0.35)]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className="flex h-full w-full items-center justify-center p-6 text-center"
                        style={{ background: GRADIENTS[i % GRADIENTS.length] }}
                      >
                        <span className="font-mono text-lg font-semibold text-white/95 drop-shadow">
                          {title}
                        </span>
                      </div>
                    )}
                    {p.videoUrl && (
                      <a
                        href={p.videoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/55 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition-colors hover:bg-black/75"
                      >
                        <Play className="h-3 w-3 fill-current" />
                        {dict.project.watch}
                      </a>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-base font-semibold tracking-tight">
                      {title}
                    </h3>
                    {loc(p.summary, locale) && (
                      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                        {loc(p.summary, locale)}
                      </p>
                    )}

                    {p.tags?.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-[var(--border)] bg-[var(--card-2)] px-2 py-0.5 text-[11px] text-[var(--muted)]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-5 flex flex-wrap gap-2 pt-1">
                      {p.codeUrl && (
                        <a
                          href={p.codeUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-medium transition-colors hover:bg-[var(--card-2)]"
                        >
                          <Code2 className="h-3.5 w-3.5" />
                          {dict.project.code}
                        </a>
                      )}
                      {p.demoUrl && (
                        <a
                          href={p.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full bg-[var(--fg)] px-3 py-1.5 text-xs font-medium text-[var(--bg)] transition-opacity hover:opacity-90"
                        >
                          <ArrowUpRight className="h-3.5 w-3.5" />
                          {dict.project.demo}
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
