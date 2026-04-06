import { useRef } from "react";
import CapabilitiesSection from "../components/home/CapabilitiesSection";
import ContactSection from "../components/home/ContactSection";
import HeroSection from "../components/home/HeroSection";
import HomeMarqueeBand from "../components/home/HomeMarqueeBand";
import OperatorStackSection from "../components/home/OperatorStackSection";
import ProofSection from "../components/home/ProofSection";
import SignalSection from "../components/home/SignalSection";
import useHomepageSurfaceEffects from "../components/home/useHomepageSurfaceEffects";
import WorkSection from "../components/home/WorkSection";
import SiteShell from "../components/site/SiteShell";
import { usePageMetadata } from "../lib/metadata";
import { getHomePageMetadata } from "../lib/pageMetadata";

export default function SolRuddLanding() {
  const pageRef = useRef(null);
  const glowRef = useRef(null);
  const isOgHomepageSurface =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("surface") === "og-homepage";

  usePageMetadata(
    getHomePageMetadata({
      robots: isOgHomepageSurface ? "noindex, nofollow" : undefined,
    })
  );

  useHomepageSurfaceEffects(pageRef, glowRef, isOgHomepageSurface);

  return (
    <SiteShell
      rootRef={pageRef}
      className={`home-page${isOgHomepageSurface ? " og-homepage-surface" : ""}`}
      mainClassName="home-main"
    >
      <div className="cursor-glow" ref={glowRef} />
      <HomeMarqueeBand />
      <HeroSection />
      <OperatorStackSection />
      <div className="hr" />
      <WorkSection />
      <div className="hr" />
      <ProofSection />
      <div className="hr" />
      <CapabilitiesSection />
      <div className="hr" />
      <SignalSection />
      <div className="hr" />
      <ContactSection />
    </SiteShell>
  );
}
