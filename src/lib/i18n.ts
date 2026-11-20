import type { Locale, LocaleString } from "./types";
import { DEFAULT_LOCALE, LOCALES } from "./types";

export { DEFAULT_LOCALE, LOCALES };
export type { Locale };

export function isLocale(value: string): value is Locale {
  return (LOCALES as string[]).includes(value);
}

// Pick the right language out of a localized field, with graceful fallback.
export function loc(field: LocaleString | undefined, locale: Locale): string {
  if (!field) return "";
  return field[locale] || field.en || field.fr || "";
}

// UI strings (labels, buttons, section titles). Content itself lives in Sanity.
export const dict = {
  en: {
    nav: {
      home: "Home",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      awards: "Awards",
      contact: "Contact",
    },
    hero: {
      downloadResume: "Download Resume",
      viewWork: "View My Work",
      scroll: "Scroll to explore",
      availableForHire: "Available for hire",
    },
    sections: {
      skillsTitle: "Skills",
      skillsSubtitle:
        "Tools and technologies I work with across software, data, and hardware.",
      experienceTitle: "Professional Experience",
      experienceSubtitle:
        "Internships and roles where I built automation, full-stack features, and reliable systems.",
      projectsTitle: "Featured Projects",
      projectsSubtitle:
        "A selection of projects spanning machine learning, computer vision, and full-stack development.",
      educationTitle: "Education",
      educationSubtitle: "My academic background and achievements.",
      awardsTitle: "Awards & Honours",
      awardsSubtitle: "Recognition for academic and technical excellence.",
      contactTitle: "Let's Work Together",
      contactSubtitle:
        "Open to internships, co-op terms, and collaboration. Let's talk about how I can contribute.",
    },
    contact: {
      emailLabel: "Email",
      phoneLabel: "Phone",
      locationLabel: "Location",
      formTitle: "Send a Message",
      name: "Your Name",
      yourEmail: "Your Email",
      subject: "Subject",
      message: "Your Message",
      send: "Send Message",
    },
    project: { code: "Code", demo: "Demo", watch: "Watch demo" },
    footer: { rights: "All rights reserved." },
    theme: { toggle: "Toggle theme" },
  },
  fr: {
    nav: {
      home: "Accueil",
      skills: "Compétences",
      experience: "Expérience",
      projects: "Projets",
      education: "Formation",
      awards: "Distinctions",
      contact: "Contact",
    },
    hero: {
      downloadResume: "Télécharger le CV",
      viewWork: "Voir mes projets",
      scroll: "Défiler pour explorer",
      availableForHire: "Disponible à l'embauche",
    },
    sections: {
      skillsTitle: "Compétences",
      skillsSubtitle:
        "Outils et technologies que j'utilise en logiciel, données et matériel.",
      experienceTitle: "Expérience professionnelle",
      experienceSubtitle:
        "Stages et postes où j'ai bâti de l'automatisation, des fonctionnalités full-stack et des systèmes fiables.",
      projectsTitle: "Projets en vedette",
      projectsSubtitle:
        "Une sélection de projets en apprentissage automatique, vision par ordinateur et développement full-stack.",
      educationTitle: "Formation",
      educationSubtitle: "Mon parcours académique et mes réalisations.",
      awardsTitle: "Distinctions et honneurs",
      awardsSubtitle: "Reconnaissance d'excellence académique et technique.",
      contactTitle: "Travaillons ensemble",
      contactSubtitle:
        "Ouvert aux stages, aux sessions coop et à la collaboration. Discutons de ma contribution possible.",
    },
    contact: {
      emailLabel: "Courriel",
      phoneLabel: "Téléphone",
      locationLabel: "Localisation",
      formTitle: "Envoyer un message",
      name: "Votre nom",
      yourEmail: "Votre courriel",
      subject: "Sujet",
      message: "Votre message",
      send: "Envoyer le message",
    },
    project: { code: "Code", demo: "Démo", watch: "Voir la démo" },
    footer: { rights: "Tous droits réservés." },
    theme: { toggle: "Changer de thème" },
  },
} as const;

export type Dict = (typeof dict)[Locale];

export function getDict(locale: Locale): Dict {
  return dict[locale];
}
