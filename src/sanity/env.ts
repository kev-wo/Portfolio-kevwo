// Sanity environment configuration.
// These are filled in from .env.local (see .env.local.example / SETUP.md).
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";

// When no projectId is set the site runs in "demo mode" and renders the
// built-in seed content so you can preview it immediately.
export const isSanityConfigured = Boolean(projectId);
