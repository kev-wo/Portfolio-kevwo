/**
 * Turns the built-in seed content into an NDJSON file that Sanity can import:
 *   npm run seed:ndjson        # regenerate sanity/seed.ndjson
 *   npx sanity dataset import sanity/seed.ndjson production
 *
 * Images, logos and resume PDFs are intentionally left out — upload those in
 * the Studio once. Everything else (text, EN/FR, tags, order) is pre-filled.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { seed } from "../src/lib/seed.ts";

const here = dirname(fileURLToPath(import.meta.url));
const out = resolve(here, "../sanity/seed.ndjson");

type Obj = Record<string, unknown>;

const ls = (v: unknown) =>
  v ? { _type: "localeString", ...(v as Obj) } : undefined;
const lt = (v: unknown) =>
  v ? { _type: "localeText", ...(v as Obj) } : undefined;

const arr = (items: unknown[] | undefined, type: "localeText") =>
  (items || []).map((it, i) => ({
    _key: `k${i}`,
    _type: type,
    ...(it as Obj),
  }));

const docs: Obj[] = [];

// Site settings (singleton)
const s = seed.settings;
docs.push({
  _id: "siteSettings",
  _type: "siteSettings",
  fullName: s.fullName,
  role: ls(s.role),
  heroGreeting: ls(s.heroGreeting),
  heroTagline: lt(s.heroTagline),
  heroSubtitle: lt(s.heroSubtitle),
  availabilityBadge: ls(s.availabilityBadge),
  available: s.available,
  stats: s.stats.map((st, i) => ({
    _key: `k${i}`,
    value: st.value,
    label: ls(st.label),
  })),
  email: s.email,
  phone: s.phone,
  location: ls(s.location),
  social: { ...s.social },
  seoTitle: ls(s.seoTitle),
  seoDescription: lt(s.seoDescription),
});

seed.skills.forEach((sk, i) =>
  docs.push({
    _id: `skill-${i}`,
    _type: "skill",
    name: sk.name,
    categoryKey: sk.categoryKey,
    iconUrl: sk.iconUrl,
    color: sk.color,
    order: i,
  }),
);

seed.experiences.forEach((e, i) =>
  docs.push({
    _id: `experience-${i}`,
    _type: "experience",
    company: e.company,
    role: ls(e.role),
    location: e.location,
    period: ls(e.period),
    bullets: arr(e.bullets, "localeText"),
    tags: e.tags,
    order: e.order ?? i,
  }),
);

seed.projects.forEach((p, i) =>
  docs.push({
    _id: `project-${i}`,
    _type: "project",
    title: ls(p.title),
    summary: ls(p.summary),
    bullets: arr(p.bullets, "localeText"),
    tags: p.tags,
    featured: p.featured ?? true,
    order: p.order ?? i,
  }),
);

seed.education.forEach((ed, i) =>
  docs.push({
    _id: `education-${i}`,
    _type: "education",
    institution: ed.institution,
    degree: ls(ed.degree),
    location: ed.location,
    period: ls(ed.period),
    details: arr(ed.details, "localeText"),
    order: ed.order ?? i,
  }),
);

seed.awards.forEach((a, i) =>
  docs.push({
    _id: `award-${i}`,
    _type: "award",
    title: ls(a.title),
    issuer: a.issuer,
    date: ls(a.date),
    description: lt(a.description),
    order: a.order ?? i,
  }),
);

mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, docs.map((d) => JSON.stringify(d)).join("\n") + "\n");
console.log(`Wrote ${docs.length} documents to ${out}`);
