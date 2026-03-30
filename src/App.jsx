import SolRuddLandingPage from "./pages/SolRuddLanding";
import JournalIndex from "./pages/JournalIndex";
import JournalArticle from "./pages/JournalArticle";
import NotFound from "./pages/NotFound";
import ConsentAwareAnalytics from "./components/ConsentAwareAnalytics";
import CookieConsentBanner from "./components/CookieConsentBanner";
import { getPostBySlug } from "./content/posts";
import { resolveRoute } from "./lib/routes";

export default function App() {
  const route = resolveRoute(window.location.pathname);

  let page = <NotFound />;

  if (route.type === "home") {
    page = <SolRuddLandingPage />;
  } else if (route.type === "journal-index") {
    page = <JournalIndex />;
  } else if (route.type === "journal-article") {
    const post = getPostBySlug(route.slug);
    page = post ? <JournalArticle post={post} /> : <NotFound />;
  }

  return (
    <>
      {page}
      <CookieConsentBanner />
      <ConsentAwareAnalytics />
    </>
  );
}
