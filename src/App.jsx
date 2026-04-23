import { Suspense, lazy, useEffect } from "react";
import SolRuddLandingPage from "./pages/SolRuddLanding";
import JournalIndex from "./pages/JournalIndex";
import JournalArticle from "./pages/JournalArticle";
import NotFound from "./pages/NotFound";
import ConsentAwareAnalytics from "./components/ConsentAwareAnalytics";
import CookieConsentBanner from "./components/CookieConsentBanner";
import { getPostBySlug } from "./content/posts";
import { isCanonicalPostPathname, resolveRoute } from "./lib/routes";

const SocialLaunchCardPreview = lazy(() => import("./pages/SocialLaunchCardPreview"));

function scrollToHashTarget() {
  const hash = window.location.hash;

  if (!hash) {
    return;
  }

  const targetId = decodeURIComponent(hash.slice(1));
  const target = targetId ? document.getElementById(targetId) : null;

  if (!target) {
    return;
  }

  const header = document.querySelector(".hdr");
  const headerOffset = header instanceof HTMLElement
    ? header.getBoundingClientRect().height + 24
    : 96;
  const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  window.scrollTo({
    top: Math.max(targetTop, 0),
    behavior: reduceMotion ? "auto" : "smooth",
  });
}

export default function App() {
  const searchParams = new URLSearchParams(window.location.search);
  const route = resolveRoute(window.location.pathname);
  const isOgHomepageSurface = searchParams.get("surface") === "og-homepage";

  useEffect(() => {
    const handleHashNavigation = () => {
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(scrollToHashTarget);
      });
    };

    handleHashNavigation();
    window.addEventListener("hashchange", handleHashNavigation);

    return () => {
      window.removeEventListener("hashchange", handleHashNavigation);
    };
  }, [route.type]);

  let page = <NotFound />;

  if (route.type === "home") {
    page = <SolRuddLandingPage />;
  } else if (route.type === "journal-index") {
    page = <JournalIndex />;
  } else if (route.type === "journal-article") {
    const post = getPostBySlug(route.slug);
    page = post && isCanonicalPostPathname(window.location.pathname, post)
      ? <JournalArticle post={post} />
      : <NotFound />;
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
