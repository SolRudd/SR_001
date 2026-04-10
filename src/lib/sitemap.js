import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  buildAbsoluteUrl,
} from "../content/site.js";
import { posts } from "../content/posts/index.js";
import {
  HOME_PATH,
  JOURNAL_INDEX_PATH,
  buildPostPath,
} from "./routes.js";
import {
  getJournalCoverImage,
  getPostHeroImage,
  getPostSocialImage,
} from "./postImages.js";

function escapeXml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function getLatestPostDate() {
  return posts.reduce((latestDate, post) => {
    const candidate = post.updatedAt ?? post.publishedAt;

    if (!latestDate || new Date(candidate) > new Date(latestDate)) {
      return candidate;
    }

    return latestDate;
  }, null);
}

function buildImageEntries(post) {
  const images = [];
  const heroImage = getPostHeroImage(post);
  const socialImage = getPostSocialImage(post);

  if (heroImage) {
    images.push({
      path: heroImage.src,
      title: heroImage.alt,
    });
  }

  if (socialImage.src && socialImage.src !== heroImage?.src) {
    images.push({
      path: socialImage.src,
      title: socialImage.alt,
    });
  }

  return images;
}

export function getSitemapEntries() {
  const latestPostDate = getLatestPostDate();

  return [
    {
      pathname: HOME_PATH,
      lastmod: latestPostDate,
      changefreq: "monthly",
      priority: "1.0",
      images: [
        {
          path: "/brand/sol-rudd.svg",
          title: `${SITE_NAME} logo`,
        },
        {
          path: DEFAULT_OG_IMAGE,
          title: SITE_NAME,
        },
      ],
    },
    {
      pathname: JOURNAL_INDEX_PATH,
      lastmod: latestPostDate,
      changefreq: "weekly",
      priority: "0.9",
      images: [getJournalCoverImage()],
    },
    ...posts.map((post) => ({
      pathname: buildPostPath(post),
      lastmod: post.updatedAt ?? post.publishedAt,
      changefreq: "monthly",
      priority: "0.8",
      images: buildImageEntries(post),
    })),
  ];
}

function renderImageEntries(images = []) {
  return images
    .map(
      (image) => `    <image:image>
      <image:loc>${escapeXml(buildAbsoluteUrl(image.path))}</image:loc>${
        image.title
          ? `
      <image:title>${escapeXml(image.title)}</image:title>`
          : ""
      }
    </image:image>`
    )
    .join("\n");
}

export function buildSitemapXml(entries = getSitemapEntries()) {
  const hasImages = entries.some((entry) => entry.images?.length);
  const namespaces = [
    'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    hasImages ? 'xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"' : null,
  ]
    .filter(Boolean)
    .join(" ");

  const urls = entries
    .map((entry) => {
      const imageMarkup = entry.images?.length ? `\n${renderImageEntries(entry.images)}` : "";

      return `  <url>
    <loc>${escapeXml(buildAbsoluteUrl(entry.pathname))}</loc>
    <lastmod>${escapeXml(entry.lastmod)}</lastmod>
    <changefreq>${escapeXml(entry.changefreq)}</changefreq>
    <priority>${escapeXml(entry.priority)}</priority>${imageMarkup}
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset ${namespaces}>
${urls}
</urlset>
`;
}
