import { CogIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: CogIcon,
  groups: [
    { name: "hero", title: "Hero / Intro", default: true },
    { name: "stats", title: "Stats" },
    { name: "contact", title: "Contact & Social" },
    { name: "files", title: "Resume Files" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "fullName",
      title: "Full name",
      type: "string",
      group: "hero",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "role",
      title: "Role / subtitle",
      type: "localeString",
      group: "hero",
    }),
    defineField({
      name: "heroGreeting",
      title: "Greeting (e.g. \"Hello, I'm\")",
      type: "localeString",
      group: "hero",
    }),
    defineField({
      name: "heroTagline",
      title: "Hero tagline (the big sentence)",
      type: "localeText",
      group: "hero",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Hero subtitle (smaller line under tagline)",
      type: "localeText",
      group: "hero",
    }),
    defineField({
      name: "availabilityBadge",
      title: "Availability badge text",
      type: "localeString",
      group: "hero",
    }),
    defineField({
      name: "available",
      title: "Currently available?",
      type: "boolean",
      initialValue: true,
      group: "hero",
    }),
    defineField({
      name: "profileImage",
      title: "Profile photo",
      type: "image",
      options: { hotspot: true },
      group: "hero",
    }),
    defineField({
      name: "stats",
      title: "Highlight stats",
      type: "array",
      group: "stats",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            { name: "value", title: "Value (e.g. 8.64)", type: "string" },
            { name: "label", title: "Label", type: "localeString" },
          ],
          preview: {
            select: { title: "value", subtitle: "label.en" },
          },
        }),
      ],
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      group: "contact",
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
      group: "contact",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "localeString",
      group: "contact",
    }),
    defineField({
      name: "social",
      title: "Social links",
      type: "object",
      group: "contact",
      options: { columns: 1 },
      fields: [
        { name: "github", title: "GitHub URL", type: "url" },
        { name: "linkedin", title: "LinkedIn URL", type: "url" },
        { name: "email", title: "Contact email", type: "string" },
      ],
    }),
    defineField({
      name: "resumeEn",
      title: "Resume (English PDF)",
      type: "file",
      options: { accept: ".pdf" },
      group: "files",
    }),
    defineField({
      name: "resumeFr",
      title: "Resume (French PDF)",
      type: "file",
      options: { accept: ".pdf" },
      group: "files",
    }),
    defineField({
      name: "seoTitle",
      title: "SEO title",
      type: "localeString",
      group: "seo",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO description",
      type: "localeText",
      group: "seo",
    }),
  ],
  preview: {
    select: { title: "fullName" },
    prepare: ({ title }) => ({ title: title || "Site Settings" }),
  },
});
