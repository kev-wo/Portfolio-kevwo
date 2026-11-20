import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";
import { client } from "./client";
import { isSanityConfigured } from "./env";

const builder = createImageUrlBuilder(client);

// Returns a usable image URL whether the source is a Sanity image object
// (CMS mode) or a plain string URL (demo/seed mode).
export function imageUrl(
  source: Image | string | undefined | null,
  width = 1200,
): string | null {
  if (!source) return null;
  if (typeof source === "string") return source;
  if (!isSanityConfigured) return null;
  try {
    return builder.image(source).width(width).auto("format").quality(85).url();
  } catch {
    return null;
  }
}
