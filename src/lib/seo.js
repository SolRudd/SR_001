import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  DEFAULT_OG_IMAGE_ALT,
  SITE_NAME,
  SITE_TITLE,
  X_URL,
  buildAbsoluteUrl,
} from "../content/site.js";

export const DEFAULT_ROBOTS =
  "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

export const JOURNAL_OG_IMAGE = DEFAULT_OG_IMAGE;
export const JOURNAL_OG_IMAGE_ALT = DEFAULT_OG_IMAGE_ALT;

export const DEFAULT_AUTHOR = "Sol Rudd";
export const DEFAULT_TWITTER_HANDLE = "@solrudd";

export function resolveSocialImage({
  imagePath,
  imageAlt,
  fallbackImagePath = DEFAULT_OG_IMAGE,
  fallbackImageAlt = DEFAULT_OG_IMAGE_ALT,
} = {}) {
  return {
    imagePath: imagePath || fallbackImagePath || DEFAULT_OG_IMAGE,
    imageAlt: imageAlt || fallbackImageAlt || DEFAULT_OG_IMAGE_ALT,
  };
}

export function buildMetadataPayload({
  title = SITE_TITLE,
  description = DEFAULT_DESCRIPTION,
  pathname = "/",
  imagePath,
  imageAlt,
  fallbackImagePath,
  fallbackImageAlt,
  type = "website",
  robots = DEFAULT_ROBOTS,
  publishedAt,
  section,
  keywords,
  schema = [],
  author = DEFAULT_AUTHOR,
} = {}) {
  const resolvedImage = resolveSocialImage({
    imagePath,
    imageAlt,
    fallbackImagePath,
    fallbackImageAlt,
  });

  return {
    title,
    description,
    pathname,
    canonical: buildAbsoluteUrl(pathname),
    imagePath: resolvedImage.imagePath,
    imageAlt: resolvedImage.imageAlt,
    imageUrl: buildAbsoluteUrl(resolvedImage.imagePath),
    type,
    robots,
    publishedAt,
    section,
    keywords,
    schema,
    author,
    siteName: SITE_NAME,
    twitterCard: "summary_large_image",
    twitterSite: DEFAULT_TWITTER_HANDLE,
    twitterCreator: DEFAULT_TWITTER_HANDLE,
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: buildAbsoluteUrl(resolvedImage.imagePath),
    twitterImageAlt: resolvedImage.imageAlt,
    openGraphTitle: title,
    openGraphDescription: description,
    openGraphUrl: buildAbsoluteUrl(pathname),
    openGraphImage: buildAbsoluteUrl(resolvedImage.imagePath),
    openGraphImageAlt: resolvedImage.imageAlt,
    locale: "en_GB",
    openGraphType: type,
    articleAuthor: type === "article" ? author : null,
    articlePublishedTime: type === "article" ? publishedAt : null,
    articleSection: type === "article" ? section : null,
    xProfile: X_URL,
  };
}

export function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeJsonForScript(value = "") {
  return String(value)
    .replaceAll("<", "\\u003C")
    .replaceAll(">", "\\u003E")
    .replaceAll("&", "\\u0026");
}

export function buildManagedHeadMarkup(metadata) {
  const tags = [
    `<title>${escapeHtml(metadata.title)}</title>`,
    `<meta name="description" content="${escapeHtml(metadata.description)}" />`,
    `<meta name="author" content="${escapeHtml(metadata.author)}" />`,
    `<meta name="robots" content="${escapeHtml(metadata.robots)}" />`,
    `<link rel="canonical" href="${escapeHtml(metadata.canonical)}" />`,
    `<meta property="og:locale" content="${escapeHtml(metadata.locale)}" />`,
    `<meta property="og:type" content="${escapeHtml(metadata.openGraphType)}" />`,
    `<meta property="og:site_name" content="${escapeHtml(metadata.siteName)}" />`,
    `<meta property="og:url" content="${escapeHtml(metadata.openGraphUrl)}" />`,
    `<meta property="og:title" content="${escapeHtml(metadata.openGraphTitle)}" />`,
    `<meta property="og:description" content="${escapeHtml(metadata.openGraphDescription)}" />`,
    `<meta property="og:image" content="${escapeHtml(metadata.openGraphImage)}" />`,
    `<meta property="og:image:alt" content="${escapeHtml(metadata.openGraphImageAlt)}" />`,
    `<meta name="twitter:card" content="${escapeHtml(metadata.twitterCard)}" />`,
    `<meta name="twitter:site" content="${escapeHtml(metadata.twitterSite)}" />`,
    `<meta name="twitter:creator" content="${escapeHtml(metadata.twitterCreator)}" />`,
    `<meta name="twitter:title" content="${escapeHtml(metadata.twitterTitle)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(metadata.twitterDescription)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(metadata.twitterImage)}" />`,
    `<meta name="twitter:image:alt" content="${escapeHtml(metadata.twitterImageAlt)}" />`,
  ];

  if (Array.isArray(metadata.keywords) && metadata.keywords.length) {
    tags.push(
      `<meta name="keywords" content="${escapeHtml(metadata.keywords.join(", "))}" />`
    );
  }

  if (metadata.articleSection) {
    tags.push(
      `<meta property="article:section" content="${escapeHtml(metadata.articleSection)}" />`
    );
  }

  if (metadata.articlePublishedTime) {
    tags.push(
      `<meta property="article:published_time" content="${escapeHtml(metadata.articlePublishedTime)}" />`
    );
  }

  if (metadata.articleAuthor) {
    tags.push(
      `<meta property="article:author" content="${escapeHtml(metadata.articleAuthor)}" />`
    );
  }

  if (Array.isArray(metadata.schema) && metadata.schema.length) {
    tags.push(
      `<script type="application/ld+json" data-site-schema="page">${escapeJsonForScript(
        JSON.stringify({
          "@context": "https://schema.org",
          "@graph": metadata.schema,
        })
      )}</script>`
    );
  }

  return tags.join("\n    ");
}
