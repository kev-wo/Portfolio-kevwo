import type { StructureResolver } from "sanity/structure";

// Pins "Site Settings" as a single editable document and lists the rest.
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .id("siteSettings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings"),
        ),
      S.divider(),
      S.documentTypeListItem("project").title("Projects"),
      S.documentTypeListItem("experience").title("Work Experience"),
      S.documentTypeListItem("education").title("Education"),
      S.documentTypeListItem("award").title("Awards"),
      S.documentTypeListItem("skill").title("Skills"),
    ]);
