import type { PortfolioData } from "./types";

const devicon = (slug: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}.svg`;

/**
 * Built-in content extracted from Kevin's resume (EN + FR).
 * This renders instantly in demo mode and is also imported into Sanity
 * (see scripts/seed-to-ndjson.mjs) so the CMS starts pre-filled.
 */
export const seed: PortfolioData = {
  settings: {
    fullName: "Kevin Wong",
    role: {
      en: "Computer Engineering Student & Full-Stack Developer",
      fr: "Étudiant en génie informatique et développeur full-stack",
    },
    heroGreeting: { en: "Hello, I'm", fr: "Bonjour, je suis" },
    heroTagline: {
      en: "Computer Engineering student at the University of Ottawa, crafting intelligent software across ML, computer vision, and full-stack development.",
      fr: "Étudiant en génie informatique à l'Université d'Ottawa, créant des logiciels intelligents en apprentissage automatique, vision par ordinateur et développement full-stack.",
    },
    heroSubtitle: {
      en: "Currently an Automation & Data Engineer student at ISED and a full-stack developer at Immoadmin.ca.",
      fr: "Actuellement étudiant en automatisation et ingénierie des données à l'ISDE et développeur full-stack chez Immoadmin.ca.",
    },
    availabilityBadge: {
      en: "Available for Internships",
      fr: "Disponible pour stages",
    },
    available: true,
    profileImage: null,
    stats: [
      { value: "8.64", label: { en: "CGPA (~3.7)", fr: "Moyenne (~3,7)" } },
      { value: "3+", label: { en: "Internships", fr: "Stages" } },
      { value: "5+", label: { en: "Major Projects", fr: "Projets majeurs" } },
    ],
    resumeEnUrl: "/Kevin_Wong_en.pdf",
    resumeFrUrl: "/Kevin_Wong_fr.pdf",
    email: "kevin.wong@live.ca",
    phone: "438-880-3179",
    location: {
      en: "Montreal / Ottawa, Canada",
      fr: "Montréal / Ottawa, Canada",
    },
    social: {
      github: "https://github.com/kev-wo",
      linkedin: "https://www.linkedin.com/",
      email: "kevin.wong@live.ca",
    },
    seoTitle: {
      en: "Kevin Wong — Computer Engineering Student",
      fr: "Kevin Wong — Étudiant en génie informatique",
    },
    seoDescription: {
      en: "Portfolio of Kevin Wong, Computer Engineering student at the University of Ottawa — machine learning, computer vision, and full-stack projects.",
      fr: "Portfolio de Kevin Wong, étudiant en génie informatique à l'Université d'Ottawa — apprentissage automatique, vision par ordinateur et projets full-stack.",
    },
  },

  skills: [
    // Languages & Frameworks
    s("Python", "languages", "#3776AB", devicon("python/python-original")),
    s("Java", "languages", "#E76F00", devicon("java/java-original")),
    s("C / C++", "languages", "#00599C", devicon("cplusplus/cplusplus-original")),
    s("React.js", "languages", "#61DAFB", devicon("react/react-original")),
    s("Pandas", "languages", "#150458", devicon("pandas/pandas-original")),
    s("NumPy", "languages", "#013243", devicon("numpy/numpy-original")),
    s("VHDL", "languages", "#0E7C7B"),
    s("FastAPI", "languages", "#009688", devicon("fastapi/fastapi-original")),
    s("SQLite", "languages", "#003B57", devicon("sqlite/sqlite-original")),
    s("OpenCV", "languages", "#5C3EE8", devicon("opencv/opencv-original")),
    s("EasyOCR", "languages", "#8E44AD"),
    s("Computer Vision", "languages", "#5C3EE8"),
    // Engineering & Hardware
    s("SolidWorks", "engineering", "#D50000"),
    s("TinkerCAD", "engineering", "#F57C00"),
    s("MATLAB", "engineering", "#E16737", devicon("matlab/matlab-original")),
    s("Multisim", "engineering", "#1565C0"),
    s("Xilinx Vivado", "engineering", "#C8102E"),
    s("Nexys A7 FPGA", "engineering", "#6A1B9A"),
    s("Oscilloscope", "engineering", "#2E7D32"),
    s("Custom PCB Design", "engineering", "#00897B"),
    // Data & Automation
    s("Python Automation", "data", "#3776AB"),
    s("ML Classification", "data", "#EE6C4D"),
    s("Power BI", "data", "#F2C811"),
    s("Git", "data", "#F05032", devicon("git/git-original")),
    s("SharePoint", "data", "#038387"),
    s("Claude Code", "data", "#D97757"),
    // Systems & Security
    s("Linux", "systems", "#FCC624", devicon("linux/linux-original")),
    s("Windows", "systems", "#0078D6", devicon("windows11/windows11-original")),
    s("macOS", "systems", "#999999", devicon("apple/apple-original")),
    s("Data Integrity", "systems", "#546E7A"),
    s("Compliance & Auditing", "systems", "#455A64"),
    s("Hardware Diagnostics", "systems", "#607D8B"),
    s("Security Clearance", "systems", "#37474F"),
  ],

  experiences: [
    {
      company: "Immoadmin.ca",
      role: { en: "Full-Stack Developer", fr: "Développeur full-stack" },
      location: "Remote, QC",
      period: {
        en: "September 2026 – Present",
        fr: "Septembre 2026 – présent",
      },
      bullets: [
        {
          en: "Work in Scrum sprints with sprint planning, standups, and reviews.",
          fr: "Travail en sprints Scrum : planification de sprint, réunions quotidiennes et revues.",
        },
        {
          en: "Reproduce bugs with root-cause analysis; apply approved fixes following branch, PR, review, and CI standards; add unit, integration, and end-to-end tests.",
          fr: "Reproduction de bogues avec analyse des causes; correctifs selon les normes de branches, PR, revue et CI; tests unitaires, d'intégration et de bout en bout.",
        },
        {
          en: "Develop and improve frontend and backend features; document risk areas, technical debt, and recommended improvements.",
          fr: "Développement de fonctionnalités frontend et backend; documentation des risques et de la dette technique.",
        },
        {
          en: "Implemented a full-cycle CI/CD deployment pipeline using GitHub, enabling continuous updates with minimal downtime.",
          fr: "Mise en place d'un pipeline CI/CD complet avec GitHub, pour des mises à jour continues à temps d'arrêt minimal.",
        },
      ],
      tags: ["React", "CI/CD", "GitHub", "Scrum", "Testing"],
      order: 1,
    },
    {
      company: "Innovation, Science and Economic Development Canada (ISED)",
      role: {
        en: "Automation & Data Engineer Student — Clean Technology and Clean Growth Branch",
        fr: "Étudiant en automatisation et ingénierie des données — Direction des technologies propres et de la croissance propre",
      },
      location: "Ottawa, ON",
      period: { en: "Summer 2026", fr: "Été 2026" },
      bullets: [
        {
          en: "Automated extraction, processing, and classification of federal funding program data with a Python web scraping and tracking application.",
          fr: "Automatisation de l'extraction et de la classification des données de programmes de financement fédéraux (Python, web scraping).",
        },
        {
          en: "Automated the data preparation and machine learning workflow (cleaning, classification, validation) that produces the dataset for a public-facing federal data sheet.",
          fr: "Automatisation du nettoyage, de la classification et de la validation des données d'une fiche fédérale publique.",
        },
        {
          en: "Translated business and data requirements into automated technical solutions with cross-functional teams; prepared briefing notes and data-driven summaries.",
          fr: "Traduction des besoins d'affaires en solutions automatisées avec des équipes multifonctionnelles; notes d'information et synthèses.",
        },
      ],
      tags: ["Python", "Web Scraping", "Machine Learning", "Data Engineering"],
      order: 2,
    },
    {
      company: "RiFE Electronics Canada Inc.",
      role: { en: "IT Intern", fr: "Stagiaire en TI" },
      location: "Montreal, QC",
      period: { en: "Summer 2021 & 2022", fr: "Étés 2021 et 2022" },
      bullets: [
        {
          en: "Diagnosed and repaired desktops and laptops at the hardware and OS level, including component replacement and post-repair validation.",
          fr: "Diagnostic et réparation d'ordinateurs au niveau matériel et système, avec validation après réparation.",
        },
        {
          en: "Deployed software, operating systems, and drivers company-wide and implemented endpoint protection and access controls.",
          fr: "Déploiement de logiciels et de pilotes à l'échelle de l'entreprise; protection des terminaux et contrôles d'accès.",
        },
      ],
      tags: ["Hardware", "Windows", "Endpoint Security", "Diagnostics"],
      order: 3,
    },
  ],

  projects: [
    {
      title: {
        en: "Clean Technology & Data Strategy (CTSD)",
        fr: "Stratégie des technologies propres et des données (CTDS)",
      },
      summary: {
        en: "ML pipeline behind a public Government of Canada infographic.",
        fr: "Pipeline d'IA derrière une infographie publique du gouvernement du Canada.",
      },
      bullets: [
        {
          en: "Cleaned and structured Excel datasets and applied TF-IDF vectorization to train and evaluate multiple ML classification models.",
          fr: "Nettoyage et structuration de jeux de données Excel, et application de la vectorisation TF-IDF pour entraîner et évaluer plusieurs modèles de classification.",
        },
        {
          en: "Designed an MLP pipeline with data validation to produce the refined dataset behind a public-facing Government of Canada infographic.",
          fr: "Conception d'un pipeline de perceptron multicouche (MLP) avec validation des données pour produire le jeu de données derrière une infographie publique du gouvernement du Canada.",
        },
      ],
      tags: ["Python", "TF-IDF", "Machine Learning", "MLP", "Data Validation"],
      featured: true,
      order: 1,
    },
    {
      title: {
        en: "RAMQ Health Card Scanner",
        fr: "Numériseur de cartes santé RAMQ",
      },
      summary: {
        en: "Computer-vision + OCR scanner for Quebec health documents.",
        fr: "Scanner vision par ordinateur et OCR pour documents de santé du Québec.",
      },
      bullets: [
        {
          en: "Built a computer vision system that detects, tracks, and flattens handwritten notes, cards, and documents from a camera feed using YOLOv5 fine-tuned on procedurally generated synthetic data (ByteTrack tracking, homography-based perspective correction).",
          fr: "Système de vision par ordinateur (YOLOv5, ByteTrack, homographie) qui détecte et redresse notes, cartes et documents à partir d'une caméra, entraîné sur données synthétiques.",
        },
        {
          en: "Developed OCR field-extraction with RapidOCR for Quebec patient documents: RAMQ format validation, cross-checks between name, sex, and date of birth, and Viterbi decoding constrained to field patterns.",
          fr: "Extraction OCR (RapidOCR) des champs RAMQ : validation du format, validations croisées du nom, du sexe et de la date de naissance, décodage de Viterbi.",
        },
      ],
      tags: ["YOLOv5", "ByteTrack", "OpenCV", "RapidOCR", "Homography"],
      featured: true,
      order: 2,
    },
    {
      title: {
        en: "Sleep Tracking App",
        fr: "Application de suivi du sommeil",
      },
      summary: {
        en: "Bridges a wearable to a smart AC to optimize sleep temperature.",
        fr: "Relie un appareil portable à un climatiseur intelligent pour optimiser la température de sommeil.",
      },
      bullets: [
        {
          en: "Built a platform that bridges a user's wearable device to their home smart air conditioner, estimating ideal sleep temperature from a quadratic quality curve, fusing sleep outcomes with stated preferences as Gaussians with evidence decay.",
          fr: "Relie un appareil portable à un climatiseur intelligent; estime la température idéale de sommeil (courbe de qualité quadratique, lois gaussiennes, décroissance des preuves).",
        },
        {
          en: "Implemented exploration and a bounded live controller that alternates ±0.5 °C while uncertain and nudges room temperature in capped, rate-limited steps.",
          fr: "Exploration alternant ±0,5 °C et contrôleur borné en temps réel, avec ajustements plafonnés et limités dans le temps.",
        },
        {
          en: "Designed a tariff-aware scheduler that pre-heats or pre-cools ahead of expensive periods within a user-set comfort tolerance.",
          fr: "Planificateur tarifaire qui préchauffe ou précale avant les périodes coûteuses, dans une tolérance de confort choisie.",
        },
      ],
      tags: ["Python", "Control Systems", "IoT", "Optimization", "Bayesian"],
      featured: true,
      order: 3,
    },
  ],

  education: [
    {
      institution: "University of Ottawa",
      degree: {
        en: "Bachelor of Engineering (BEng), Computer Engineering",
        fr: "Baccalauréat en génie (B.Ing.), génie informatique",
      },
      location: "Ottawa, ON",
      period: { en: "2024 – 2028 (Expected)", fr: "2024 – 2028 (prévu)" },
      details: [
        {
          en: "CGPA: 8.64 / 10 (~3.7 GPA)",
          fr: "Moyenne cumulative : 8,64 / 10 (~3,7 GPA)",
        },
        {
          en: "Dean's Honour List — Fall/Winter 2025",
          fr: "Liste d'honneur du doyen — automne/hiver 2025",
        },
      ],
      order: 1,
    },
    {
      institution: "TAV College",
      degree: {
        en: "Diploma of College Studies (DEC), Health Science",
        fr: "Diplôme d'études collégiales (DEC), sciences de la santé",
      },
      location: "Montreal, QC",
      period: { en: "2021 – 2024", fr: "2021 – 2024" },
      details: [],
      order: 2,
    },
  ],

  awards: [
    {
      title: { en: "Dean's Honour List", fr: "Liste d'honneur du doyen" },
      issuer: "University of Ottawa",
      date: { en: "Fall/Winter 2025", fr: "Automne/Hiver 2025" },
      description: {
        en: "Recognized for outstanding academic standing in the Faculty of Engineering.",
        fr: "Reconnaissance d'un excellent rendement académique à la Faculté de génie.",
      },
      order: 1,
    },
    {
      title: {
        en: "Reliability Security Clearance",
        fr: "Cote de fiabilité",
      },
      issuer: "Government of Canada",
      date: { en: "2026", fr: "2026" },
      description: {
        en: "Federal reliability clearance held for work on government data systems at ISED.",
        fr: "Cote de fiabilité fédérale détenue pour le travail sur les systèmes de données gouvernementaux à l'ISDE.",
      },
      order: 2,
    },
  ],
};

function s(
  name: string,
  categoryKey: string,
  color: string,
  iconUrl?: string,
) {
  const categories: Record<string, { en: string; fr: string }> = {
    languages: {
      en: "Languages & Frameworks",
      fr: "Langages et cadriciels",
    },
    engineering: { en: "Engineering & Hardware", fr: "Ingénierie et matériel" },
    data: { en: "Data & Automation", fr: "Données et automatisation" },
    systems: { en: "Systems & Security", fr: "Systèmes et sécurité" },
  };
  return {
    name,
    categoryKey,
    category: categories[categoryKey],
    color,
    iconUrl,
  };
}

export const SKILL_CATEGORY_ORDER = [
  "languages",
  "engineering",
  "data",
  "systems",
];
