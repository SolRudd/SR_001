import SolRuddLandingPage from "./pages/SolRuddLanding";
import ConsentAwareAnalytics from "./components/ConsentAwareAnalytics";
import CookieConsentBanner from "./components/CookieConsentBanner";

export default function App() {
  return (
    <>
      <SolRuddLandingPage />
      <CookieConsentBanner />
      <ConsentAwareAnalytics />
    </>
  );
}
