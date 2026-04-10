import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildManagedHeadMarkup } from "../src/lib/seo.js";
import { getPrerenderMetadataEntries } from "../src/lib/pageMetadata.js";
import { buildSitemapXml } from "../src/lib/sitemap.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const distRoot = path.join(projectRoot, "dist");
const templatePath = path.join(distRoot, "index.html");
const publicSitemapPath = path.join(projectRoot, "public", "sitemap.xml");
const distSitemapPath = path.join(distRoot, "sitemap.xml");

const SEO_BLOCK_PATTERN = /<!-- SEO:BEGIN -->([\s\S]*?)<!-- SEO:END -->/;

function getOutputPathname(pathnameValue) {
  const cleanPath = pathnameValue.replace(/^\/+|\/+$/g, "");

  if (!cleanPath) {
    return path.join(distRoot, "index.html");
  }

  return path.join(distRoot, cleanPath, "index.html");
}

async function ensureDirectory(filePath) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
}

async function main() {
  const templateHtml = await fs.readFile(templatePath, "utf8");
  const entries = getPrerenderMetadataEntries();

  await Promise.all(
    entries.map(async ({ pathname: routePath, metadata }) => {
      const outputPath = getOutputPathname(routePath);
      const managedMarkup = buildManagedHeadMarkup(metadata);
      const html = templateHtml.replace(
        SEO_BLOCK_PATTERN,
        `<!-- SEO:BEGIN -->\n    ${managedMarkup}\n    <!-- SEO:END -->`
      );

      await ensureDirectory(outputPath);
      await fs.writeFile(outputPath, html, "utf8");
    })
  );

  const sitemapXml = buildSitemapXml();

  await Promise.all([
    fs.writeFile(publicSitemapPath, sitemapXml, "utf8"),
    fs.writeFile(distSitemapPath, sitemapXml, "utf8"),
  ]);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
