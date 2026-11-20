import { CodeBlockIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const skill = defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  icon: CodeBlockIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "categoryKey",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Languages & Frameworks", value: "languages" },
          { title: "Engineering & Hardware", value: "engineering" },
          { title: "Data & Automation", value: "data" },
          { title: "Systems & Security", value: "systems" },
        ],
        layout: "radio",
      },
      initialValue: "languages",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo image (drag & drop — easiest)",
      description:
        "Upload a logo. If left empty, a colored monogram tile is shown instead.",
      type: "image",
      options: { accept: "image/*" },
    }),
    defineField({
      name: "iconUrl",
      title: "Icon URL (optional alternative to uploading)",
      type: "url",
    }),
    defineField({
      name: "color",
      title: "Accent color (hex, e.g. #3776AB)",
      type: "string",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      initialValue: 100,
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "categoryKey", media: "logo" },
  },
});
