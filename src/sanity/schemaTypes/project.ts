import { RocketIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: RocketIcon,
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "media", title: "Media" },
    { name: "links", title: "Links" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "localeString",
      group: "content",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "summary",
      title: "Short summary (one line)",
      type: "localeString",
      group: "content",
    }),
    defineField({
      name: "bullets",
      title: "Details / highlights",
      type: "array",
      of: [defineArrayMember({ type: "localeText" })],
      group: "content",
    }),
    defineField({
      name: "tags",
      title: "Tech / tags",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      options: { layout: "tags" },
      group: "content",
    }),
    defineField({
      name: "image",
      title: "Cover image / screenshot",
      type: "image",
      options: { hotspot: true, accept: "image/*" },
      group: "media",
    }),
    defineField({
      name: "videoUrl",
      title: "Video link (YouTube / Vimeo — best for long clips)",
      type: "url",
      group: "media",
    }),
    defineField({
      name: "videoFile",
      title: "Video upload (optional, short MP4 clips)",
      type: "file",
      options: { accept: "video/*" },
      group: "media",
    }),
    defineField({
      name: "demoUrl",
      title: "Live demo URL",
      type: "url",
      group: "links",
    }),
    defineField({
      name: "codeUrl",
      title: "Source code URL",
      type: "url",
      group: "links",
    }),
    defineField({
      name: "featured",
      title: "Featured?",
      type: "boolean",
      initialValue: true,
      group: "content",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      initialValue: 100,
      group: "content",
    }),
  ],
  preview: {
    select: { title: "title.en", subtitle: "summary.en", media: "image" },
  },
});
