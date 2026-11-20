import { CaseIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const experience = defineType({
  name: "experience",
  title: "Work Experience",
  type: "document",
  icon: CaseIcon,
  fields: [
    defineField({
      name: "company",
      title: "Company",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({ name: "role", title: "Role / title", type: "localeString" }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "period",
      title: "Period (e.g. Summer 2026)",
      type: "localeString",
    }),
    defineField({
      name: "bullets",
      title: "Responsibilities / achievements",
      type: "array",
      of: [defineArrayMember({ type: "localeText" })],
    }),
    defineField({
      name: "tags",
      title: "Tech / tags",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      options: { layout: "tags" },
    }),
    defineField({
      name: "logo",
      title: "Company logo (optional)",
      type: "image",
      options: { accept: "image/*" },
    }),
    defineField({
      name: "order",
      title: "Order (lower = higher on page)",
      type: "number",
      initialValue: 100,
    }),
  ],
  preview: {
    select: { title: "company", subtitle: "role.en", media: "logo" },
  },
});
