export const HOME_PATH = "/";
export const JOURNAL_INDEX_PATH = "/journal/";
export const INSIGHTS_INDEX_PATH = "/insights/";
export const SOCIAL_LAUNCH_CARD_PATH = "/preview/social-launch-card/";
export const SOCIAL_LAUNCH_CARD_FINAL_PATH = "/preview/social-launch-card/final/";
export const SOCIAL_LAUNCH_CARD_MINIMAL_PATH = "/preview/social-launch-card/minimal/";

export function buildJournalPostPath(slug) {
  return `/journal/${slug}/`;
}

export function buildInsightsPostPath(slug) {
  return `/insights/${slug}/`;
}

export function buildPostPath(postOrSlug) {
  if (typeof postOrSlug === "object" && postOrSlug?.pathname) {
    return postOrSlug.pathname;
  }

  const slug = typeof postOrSlug === "object" ? postOrSlug?.slug : postOrSlug;

  return buildJournalPostPath(slug);
}

export function isCanonicalPostPathname(pathname, post) {
  return normalizePathname(pathname) === normalizePathname(buildPostPath(post));
}

export function buildHomeSectionPath(sectionId) {
  return `/#${sectionId.replace(/^#/, "")}`;
}

export function normalizePathname(pathname = "/") {
  const normalizedInput = pathname.split("?")[0].split("#")[0] || "/";
  const collapsed = normalizedInput.replace(/\/{2,}/g, "/");

  if (collapsed === "/") {
    return "/";
  }

  return collapsed.endsWith("/") ? collapsed.slice(0, -1) : collapsed;
}

export function resolveRoute(pathname = "/") {
  const normalized = normalizePathname(pathname);

  if (normalized === HOME_PATH) {
    return { type: "home" };
  }

  if (normalized === "/journal" || normalized === "/insights") {
    return { type: "journal-index" };
  }

  if (normalized === "/preview/social-launch-card") {
    return { type: "social-launch-card" };
  }

  if (normalized === "/preview/social-launch-card/final") {
    return { type: "social-launch-card-final" };
  }

  if (normalized === "/preview/social-launch-card/minimal") {
    return { type: "social-launch-card-minimal" };
  }

  if (normalized.startsWith("/journal/")) {
    const slug = normalized.slice("/journal/".length);

    if (slug && !slug.includes("/")) {
      return { type: "journal-article", slug };
    }
  }

  if (normalized.startsWith("/insights/")) {
    const slug = normalized.slice("/insights/".length);

    if (slug && !slug.includes("/")) {
      return { type: "journal-article", slug };
    }
  }

  return { type: "not-found", pathname: normalized };
}
