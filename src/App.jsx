import SolRuddLandingPage from "./pages/SolRuddLanding";
import JournalIndex from "./pages/JournalIndex";
import JournalArticle from "./pages/JournalArticle";
import NotFound from "./pages/NotFound";
import SocialLaunchCardPreview from "./pages/SocialLaunchCardPreview";
import ConsentAwareAnalytics from "./components/ConsentAwareAnalytics";
import CookieConsentBanner from "./components/CookieConsentBanner";
import { getPostBySlug } from "./content/posts";
import { resolveRoute } from "./lib/routes";

export default function App() {
  const searchParams = new URLSearchParams(window.location.search);
  const route = resolveRoute(window.location.pathname);
  const isOgHomepageSurface = searchParams.get("surface") === "og-homepage";

  let page = <NotFound />;

  if (route.type === "home") {
    page = <SolRuddLandingPage />;
  } else if (route.type === "journal-index") {
    page = <JournalIndex />;
  } else if (route.type === "journal-article") {
    const post = getPostBySlug(route.slug);
    page = post ? <JournalArticle post={post} /> : <NotFound />;
  } else if (route.type === "social-launch-card") {
    page = <SocialLaunchCardPreview />;
  } else if (route.type === "social-launch-card-final") {
    page = <SocialLaunchCardPreview forceExport />;
  } else if (route.type === "social-launch-card-minimal") {
    page = <SocialLaunchCardPreview variant="minimal" />;
  }

  const shouldRenderGlobalChrome =
    route.type !== "social-launch-card" &&
    route.type !== "social-launch-card-final" &&
    route.type !== "social-launch-card-minimal" &&
    !isOgHomepageSurface;

  return (
    <>
      {page}
      {shouldRenderGlobalChrome ? <CookieConsentBanner /> : null}
      {shouldRenderGlobalChrome ? <ConsentAwareAnalytics /> : null}
    </>
  );
}
