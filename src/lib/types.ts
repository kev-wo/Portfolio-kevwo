export type Locale = "en" | "fr";
export const LOCALES: Locale[] = ["en", "fr"];
export const DEFAULT_LOCALE: Locale = "en";

export type LocaleString = { en?: string; fr?: string };

// A field that may be a Sanity image object or a plain URL string (seed mode).
export type ImageField = string | { _type: "image"; asset?: unknown } | null;

export interface Stat {
  value: string;
  label: LocaleString;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  email?: string;
}

export interface SiteSettings {
  fullName: string;
  role: LocaleString;
  heroGreeting: LocaleString;
  heroTagline: LocaleString;
  heroSubtitle: LocaleString;
  availabilityBadge: LocaleString;
  available: boolean;
  profileImage?: ImageField;
  stats: Stat[];
  resumeEnUrl?: string;
  resumeFrUrl?: string;
  email?: string;
  phone?: string;
  location: LocaleString;
  social: SocialLinks;
  seoTitle?: LocaleString;
  seoDescription?: LocaleString;
}

export interface Skill {
  _id?: string;
  name: string;
  category: LocaleString;
  categoryKey: string;
  iconUrl?: string;
  logo?: ImageField;
  color?: string;
  order?: number;
}

export interface Experience {
  _id?: string;
  company: string;
  role: LocaleString;
  location: string;
  period: LocaleString;
  bullets: LocaleString[];
  tags: string[];
  logo?: ImageField;
  order?: number;
}

export interface Project {
  _id?: string;
  title: LocaleString;
  summary: LocaleString;
  bullets: LocaleString[];
  image?: ImageField;
  videoUrl?: string;
  videoFileUrl?: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
  featured?: boolean;
  order?: number;
}

export interface Education {
  _id?: string;
  institution: string;
  degree: LocaleString;
  location: string;
  period: LocaleString;
  details: LocaleString[];
  logo?: ImageField;
  order?: number;
}

export interface Award {
  _id?: string;
  title: LocaleString;
  issuer: string;
  date: LocaleString;
  description: LocaleString;
  order?: number;
}

export interface PortfolioData {
  settings: SiteSettings;
  skills: Skill[];
  experiences: Experience[];
  projects: Project[];
  education: Education[];
  awards: Award[];
}
