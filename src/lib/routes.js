export const HOME_PATH = "/";
export const JOURNAL_INDEX_PATH = "/journal/";
export const SOCIAL_LAUNCH_CARD_PATH = "/preview/social-launch-card/";
export const SOCIAL_LAUNCH_CARD_MINIMAL_PATH = "/preview/social-launch-card/minimal/";

export function buildJournalPostPath(slug) {
  return `/journal/${slug}/`;
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

  if (normalized === "/journal") {
    return { type: "journal-index" };
  }

  if (normalized === "/preview/social-launch-card") {
    return { type: "social-launch-card" };
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

  return { type: "not-found", pathname: normalized };
}
