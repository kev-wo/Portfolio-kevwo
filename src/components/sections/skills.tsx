import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { SkillIcon } from "@/components/ui/skill-icon";
import type { Dict } from "@/lib/i18n";
import type { Locale, Skill } from "@/lib/types";

const CATEGORY_LABELS: Record<string, { en: string; fr: string }> = {
  languages: { en: "Languages & Frameworks", fr: "Langages et cadriciels" },
  engineering: { en: "Engineering & Hardware", fr: "Ingénierie et matériel" },
  data: { en: "Data & Automation", fr: "Données et automatisation" },
  systems: { en: "Systems & Security", fr: "Systèmes et sécurité" },
};
const ORDER = ["languages", "engineering", "data", "systems"];

export function Skills({
  skills,
  dict,
  locale,
}: {
  skills: Skill[];
  dict: Dict;
  locale: Locale;
}) {
  const grouped = ORDER.map((key) => ({
    key,
    label: CATEGORY_LABELS[key]?.[locale] ?? key,
    items: skills.filter((s) => s.categoryKey === key),
  })).filter((g) => g.items.length > 0);

  return (
    <section id="skills" className="bg-[var(--bg-soft)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="// stack"
          title={dict.sections.skillsTitle}
          subtitle={dict.sections.skillsSubtitle}
        />

        <div className="mt-14 space-y-12">
          {grouped.map((group, gi) => (
            <Reveal key={group.key} delay={gi * 0.05}>
              <p className="eyebrow mb-5">{group.label}</p>
              <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
                {group.items.map((skill) => (
                  <div
                    key={(skill._id || "") + skill.name}
                    className="group flex flex-col items-center gap-2.5 rounded-2xl border border-transparent p-3 text-center transition-colors hover:border-[var(--border)] hover:bg-[var(--card)]"
                  >
                    <SkillIcon skill={skill} />
                    <span className="text-xs font-medium text-[var(--muted)] transition-colors group-hover:text-[var(--fg)]">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
