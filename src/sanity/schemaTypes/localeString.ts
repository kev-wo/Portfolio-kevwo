import { defineField, defineType } from "sanity";

export const localeString = defineType({
  name: "localeString",
  title: "Text (EN / FR)",
  type: "object",
  options: { columns: 2 },
  fields: [
    defineField({ name: "en", title: "English", type: "string" }),
    defineField({ name: "fr", title: "Français", type: "string" }),
  ],
});

export const localeText = defineType({
  name: "localeText",
  title: "Paragraph (EN / FR)",
  type: "object",
  options: { columns: 2 },
  fields: [
    defineField({ name: "en", title: "English", type: "text", rows: 3 }),
    defineField({ name: "fr", title: "Français", type: "text", rows: 3 }),
  ],
});
