import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";

// `projectId` falls back to a placeholder so importing this module never throws
// in demo mode. Every real query is guarded by `isSanityConfigured`.
export const client = createClient({
  projectId: projectId || "placeholder",
  dataset,
  apiVersion,
  // Fetch live data on each ISR revalidation so published edits show up promptly.
  useCdn: false,
  perspective: "published",
});
