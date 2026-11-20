import { StarIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const award = defineType({
  name: "award",
  title: "Award / Honour",
  type: "document",
  icon: StarIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "localeString",
      validation: (r) => r.required(),
    }),
    defineField({ name: "issuer", title: "Issuer / organization", type: "string" }),
    defineField({ name: "date", title: "Date", type: "localeString" }),
    defineField({ name: "description", title: "Description", type: "localeText" }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      initialValue: 100,
    }),
  ],
  preview: {
    select: { title: "title.en", subtitle: "issuer" },
  },
});
