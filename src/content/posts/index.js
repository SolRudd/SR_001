import buzzboostFounderSiteLog from "./buzzboost-founder-site-log";
import codexOpenclawAndRealAgenticWorkflows from "./codex-openclaw-and-real-agentic-workflows";
import fromDesignReferenceToProductionReact from "./from-design-reference-to-production-react";
import greentracerSignalProduct from "./greentracer-signal-product";
import whatActuallyMakesModernDigitalDeliveryWork from "./what-actually-makes-modern-digital-delivery-work";
import whyGoodDigitalWorkUsuallyComesFromSpecialistTeams from "./why-good-digital-work-usually-comes-from-specialist-teams";

const POST_DATE_FORMATTER = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

const POSTS = [
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
  if (!post?.relatedSlugs?.length) {
    return POSTS.filter(({ slug }) => slug !== post?.slug).slice(0, limit);
  }

  return post.relatedSlugs
    .map((slug) => getPostBySlug(slug))
    .filter(Boolean)
    .slice(0, limit);
}

export function formatPostDate(dateValue) {
  return POST_DATE_FORMATTER.format(new Date(dateValue));
}
