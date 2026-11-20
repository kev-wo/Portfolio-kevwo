import { cache } from "react";
import { client } from "@/sanity/client";
import { isSanityConfigured } from "@/sanity/env";
import { imageUrl } from "@/sanity/image";
import {
  awardsQuery,
  educationQuery,
  experiencesQuery,
  projectsQuery,
  settingsQuery,
  skillsQuery,
} from "@/sanity/queries";
import { seed } from "./seed";
import type { ImageField, PortfolioData } from "./types";

export const revalidate = 60; // refresh CMS content at most once a minute

// Resolve any Sanity image object (or pass-through string URL) to a flat URL
// string so every downstream component only deals with `string | null`.
function img(source: ImageField | undefined, width = 1200): string | null {
  return imageUrl(source as never, width);
}

/**
 * Returns all portfolio content. Uses Sanity when configured; otherwise (or on
 * any error / empty dataset) falls back to the built-in seed so the site always
 * renders.
 */
export const getPortfolioData = cache(
  async (): Promise<PortfolioData> => {
  if (!isSanityConfigured) return seed;

  try {
    const [settings, skills, experiences, projects, education, awards] =
      await Promise.all([
        client.fetch(settingsQuery),
        client.fetch(skillsQuery),
        client.fetch(experiencesQuery),
        client.fetch(projectsQuery),
        client.fetch(educationQuery),
        client.fetch(awardsQuery),
      ]);

    if (!settings) return seed;

    return {
      settings: {
        ...seed.settings,
        ...settings,
        social: { ...seed.settings.social, ...(settings.social || {}) },
        stats:
          settings.stats?.length > 0 ? settings.stats : seed.settings.stats,
        profileImage: img(settings.profileImage, 800),
      },
      skills: (skills?.length ? skills : seed.skills).map(
        (sk: PortfolioData["skills"][number]) => ({
          ...sk,
          logo: img(sk.logo, 160),
        }),
      ),
      experiences: (experiences?.length ? experiences : []).map(
        (e: PortfolioData["experiences"][number]) => ({
          ...e,
          logo: img(e.logo, 160),
        }),
      ),
      projects: (projects?.length ? projects : []).map(
        (p: PortfolioData["projects"][number]) => ({
          ...p,
          image: img(p.image, 1200),
        }),
      ),
      education: (education?.length ? education : []).map(
        (ed: PortfolioData["education"][number]) => ({
          ...ed,
          logo: img(ed.logo, 160),
        }),
      ),
      awards: awards?.length ? awards : [],
    };
  } catch (err) {
    console.error("Sanity fetch failed, using seed content:", err);
    return seed;
  }
});
