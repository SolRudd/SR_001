export const SITE_NAME = "Sol Rudd";
export const SITE_URL = "https://solrudd.co.uk";
export const SITE_TITLE = "Sol Rudd | Websites, AI Products & Agentic Systems";
export const TITLE_TEMPLATE = "%s | Sol Rudd";
export const DEFAULT_DESCRIPTION =
  "Founder-led websites, AI products, and agentic systems by Sol Rudd. Premium frontend builds, automation, and technical infrastructure for sharp operators.";
export const DEFAULT_OG_IMAGE = "/og/sol-rudd-og.png";
export const DEFAULT_OG_IMAGE_ALT =
  "Sol Rudd launch card for websites, AI products, and agentic systems.";

export function buildAbsoluteUrl(pathname = "/") {
  return new URL(pathname, `${SITE_URL}/`).toString();
}

export function buildPageTitle(label) {
  if (!label) {
    return SITE_TITLE;
  }

  return TITLE_TEMPLATE.replace("%s", label);
}
