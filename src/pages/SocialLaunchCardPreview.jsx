import SocialLaunchCard from "../components/og/SocialLaunchCard";
import { buildPageTitle } from "../content/site";
import { usePageMetadata } from "../lib/metadata";
import { SOCIAL_LAUNCH_CARD_FINAL_PATH, SOCIAL_LAUNCH_CARD_MINIMAL_PATH, SOCIAL_LAUNCH_CARD_PATH } from "../lib/routes";

export default function SocialLaunchCardPreview({ variant = "primary", forceExport = false }) {
  const isExport =
    forceExport ||
    (typeof window !== "undefined" &&
      new URLSearchParams(window.location.search).get("export") === "1");
  const isMinimal = variant === "minimal";
  const pathname = isMinimal
    ? SOCIAL_LAUNCH_CARD_MINIMAL_PATH
    : isExport
      ? SOCIAL_LAUNCH_CARD_FINAL_PATH
      : SOCIAL_LAUNCH_CARD_PATH;

  usePageMetadata({
    title: buildPageTitle(
      isMinimal ? "Social Launch Card Minimal" : isExport ? "Social Launch Card Export" : "Social Launch Card",
    ),
    description: "Standalone social launch card preview for Sol Rudd.",
    pathname,
    robots: "noindex, nofollow",
    imagePath: "/og/sol-rudd-launch-card.png",
  });

  // Capture the final LinkedIn export from /preview/social-launch-card/final/ at 1200x627.
  return (
    <main className={`social-preview-page${isExport ? " social-preview-page-export" : ""}`}>
      <SocialLaunchCard variant={variant} exportMode={isExport} />
    </main>
  );
}
