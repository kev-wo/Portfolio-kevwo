import { CaseIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const education = defineType({
  name: "education",
  title: "Education",
  type: "document",
  icon: CaseIcon,
  fields: [
    defineField({
      name: "institution",
      title: "Institution",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({ name: "degree", title: "Degree / program", type: "localeString" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "period", title: "Period", type: "localeString" }),
    defineField({
      name: "details",
      title: "Details (GPA, honours, etc.)",
      type: "array",
      of: [defineArrayMember({ type: "localeText" })],
    }),
    defineField({
      name: "logo",
      title: "Institution logo (optional)",
      type: "image",
      options: { accept: "image/*" },
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      initialValue: 100,
    }),
  ],
  preview: {
    select: { title: "institution", subtitle: "degree.en", media: "logo" },
  },
});
