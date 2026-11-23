/**
 * Seeds a Sanity dataset over the HTTP API (no Sanity CLI / local login needed).
 * Reads sanity/seed.ndjson and createOrReplace's every document.
 *
 * Env:
 *   SANITY_PROJECT_ID   required
 *   SANITY_DATASET      default "production"
 *   SANITY_API_TOKEN    a write token (can be a dummy value if a proxy injects it)
 */
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createClient } from "@sanity/client";

const here = dirname(fileURLToPath(import.meta.url));
const ndjson = resolve(here, "../sanity/seed.ndjson");

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || "production";
const token = process.env.SANITY_API_TOKEN || "proxy-injected";

if (!projectId) {
  console.error("Missing SANITY_PROJECT_ID");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-10-01",
  token,
  useCdn: false,
});

const docs = readFileSync(ndjson, "utf8")
  .split("\n")
  .filter(Boolean)
  .map((line) => JSON.parse(line));

const tx = docs.reduce((t, doc) => t.createOrReplace(doc), client.transaction());

const res = await tx.commit();
console.log(`Imported ${docs.length} documents. Transaction: ${res.transactionId}`);
