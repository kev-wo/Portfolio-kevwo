/**
 * Embedded Sanity Studio — the admin dashboard where Kevin edits content.
 * Available at /studio once NEXT_PUBLIC_SANITY_PROJECT_ID is set.
 * The actual Studio lives in the client component so its config is evaluated
 * in the client graph (avoids RSC `createContext` errors during build).
 */
import Studio from "./Studio";

export const dynamic = "force-static";
export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return <Studio />;
}
