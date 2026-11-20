import type { SchemaTypeDefinition } from "sanity";
import { award } from "./award";
import { education } from "./education";
import { experience } from "./experience";
import { localeString, localeText } from "./localeString";
import { project } from "./project";
import { siteSettings } from "./siteSettings";
import { skill } from "./skill";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // objects
    localeString,
    localeText,
    // documents
    siteSettings,
    skill,
    experience,
    project,
    education,
    award,
  ],
};
