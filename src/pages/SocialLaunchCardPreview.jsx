import SocialLaunchCard from "../components/og/SocialLaunchCard";
import { buildPageTitle } from "../content/site";
import { usePageMetadata } from "../lib/metadata";

export default function SocialLaunchCardPreview({ variant = "primary" }) {
  const isMinimal = variant === "minimal";
  const pathname = isMinimal
    ? "/preview/social-launch-card/minimal/"
    : "/preview/social-launch-card/";

  usePageMetadata({
    title: buildPageTitle(isMinimal ? "Social Launch Card Minimal" : "Social Launch Card"),
    description: "Standalone social launch card preview for Sol Rudd.",
    pathname,
    robots: "noindex, nofollow",
    imagePath: "/og/sol-rudd-og.png",
  });

  return (
    <main className="social-preview-page">
      <SocialLaunchCard variant={variant} />
    </main>
  );
}
