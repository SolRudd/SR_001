export const SITE_NAME = "Sol Rudd";
export const SITE_URL = "https://solrudd.co.uk";
export const SITE_TITLE = "Sol Rudd | Websites, AI Products & Agentic Systems";
export const TITLE_TEMPLATE = "%s | Sol Rudd";
export const CONTACT_EMAIL = "sol@buzzboost.co.uk";
export const GITHUB_URL = "https://github.com/SolRudd";
export const LINKEDIN_URL = "https://www.linkedin.com/in/sol-rudd/";
export const X_URL = "https://x.com/ruddsol";
export const BOOKING_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ26ETV8foYBbzOp40NX__sRfQBK5X_ZgyU1z0_3-huYwBzn0PPxMV0KrU5vV1_dLzSpyrUIag3E";
export const DEFAULT_DESCRIPTION =
  "Founder-led websites, AI products, and agentic systems by Sol Rudd. Premium frontend builds, automation, and technical infrastructure for sharp operators.";
export const DEFAULT_OG_IMAGE = "/og/sol-rudd-launch-card.png";
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
