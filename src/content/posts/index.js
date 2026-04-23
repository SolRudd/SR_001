import buzzboostFounderSiteLog from "./buzzboost-founder-site-log.js";
import buildingAMoreNativeAuthoringLayerForWordPress from "./building-a-more-native-authoring-layer-for-wordpress.js";
import claudeMythosAiVulnerabilityArmsRace from "./claude-mythos-ai-vulnerability-arms-race.js";
import codexOpenclawAndRealAgenticWorkflows from "./codex-openclaw-and-real-agentic-workflows.js";
import codexTerminalAiWorkflows2026 from "./codex-terminal-ai-workflows-2026.js";
import fromDesignReferenceToProductionReact from "./from-design-reference-to-production-react.js";
import greentracerSignalProduct from "./greentracer-signal-product.js";
import howToBuildAWebsiteThatStillWinsInAiSearch2026 from "./how-to-build-a-website-that-still-wins-in-ai-search-2026.js";
import vercelApril2026SecurityIncident from "./vercel-april-2026-security-incident.js";
import whatActuallyMakesModernDigitalDeliveryWork from "./what-actually-makes-modern-digital-delivery-work.js";
import whyAiAgentsNeedGuardrails from "./why-ai-agents-need-guardrails.js";
import whyImTestingLocalAiAgents from "./why-im-testing-local-ai-agents.js";
import whyGoodDigitalWorkUsuallyComesFromSpecialistTeams from "./why-good-digital-work-usually-comes-from-specialist-teams.js";

const POST_DATE_FORMATTER = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

const POSTS = [
  vercelApril2026SecurityIncident,
  howToBuildAWebsiteThatStillWinsInAiSearch2026,
  buildingAMoreNativeAuthoringLayerForWordPress,
  claudeMythosAiVulnerabilityArmsRace,
  whyImTestingLocalAiAgents,
  whyAiAgentsNeedGuardrails,
  codexTerminalAiWorkflows2026,
  codexOpenclawAndRealAgenticWorkflows,
  whatActuallyMakesModernDigitalDeliveryWork,
  whyGoodDigitalWorkUsuallyComesFromSpecialistTeams,
  buzzboostFounderSiteLog,
  greentracerSignalProduct,
  fromDesignReferenceToProductionReact,
].sort((left, right) => new Date(right.publishedAt) - new Date(left.publishedAt));

const POSTS_BY_SLUG = new Map(POSTS.map((post) => [post.slug, post]));

export const posts = POSTS;

export function getPostBySlug(slug) {
  return POSTS_BY_SLUG.get(slug) ?? null;
}

export function getRelatedPosts(post, limit = 2) {
  const selectedPosts = [];
  const seenSlugs = new Set([post?.slug]);

  for (const slug of post?.relatedSlugs ?? []) {
    const relatedPost = getPostBySlug(slug);

    if (!relatedPost || seenSlugs.has(relatedPost.slug)) {
      continue;
    }

    selectedPosts.push(relatedPost);
    seenSlugs.add(relatedPost.slug);
  }

  if (selectedPosts.length >= limit) {
    return selectedPosts.slice(0, limit);
  }

  for (const candidatePost of POSTS) {
    if (seenSlugs.has(candidatePost.slug)) {
      continue;
    }

    selectedPosts.push(candidatePost);
    seenSlugs.add(candidatePost.slug);

    if (selectedPosts.length >= limit) {
      break;
    }
  }

  return selectedPosts;
}

export function formatPostDate(dateValue) {
  return POST_DATE_FORMATTER.format(new Date(dateValue));
}
