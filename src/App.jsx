import { Suspense, lazy } from "react";
import SolRuddLandingPage from "./pages/SolRuddLanding";
import JournalIndex from "./pages/JournalIndex";
import JournalArticle from "./pages/JournalArticle";
import NotFound from "./pages/NotFound";
import ConsentAwareAnalytics from "./components/ConsentAwareAnalytics";
import CookieConsentBanner from "./components/CookieConsentBanner";
import { getPostBySlug } from "./content/posts";
import { resolveRoute } from "./lib/routes";

const SocialLaunchCardPreview = lazy(() => import("./pages/SocialLaunchCardPreview"));

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
    page = (
      <Suspense fallback={null}>
        <SocialLaunchCardPreview />
      </Suspense>
    );
  } else if (route.type === "social-launch-card-final") {
    page = (
      <Suspense fallback={null}>
        <SocialLaunchCardPreview forceExport />
      </Suspense>
    );
  } else if (route.type === "social-launch-card-minimal") {
    page = (
      <Suspense fallback={null}>
        <SocialLaunchCardPreview variant="minimal" />
      </Suspense>
    );
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
