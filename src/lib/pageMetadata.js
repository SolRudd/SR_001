import { posts } from "../content/posts/index.js";
import { buildPageTitle, DEFAULT_DESCRIPTION } from "../content/site.js";
import {
  getBaseSchema,
  getJournalArticleSchema,
  getJournalFaqSchema,
  getJournalSchema,
} from "./schema.js";
import {
  HOME_PATH,
  JOURNAL_INDEX_PATH,
  SOCIAL_LAUNCH_CARD_FINAL_PATH,
  SOCIAL_LAUNCH_CARD_MINIMAL_PATH,
  SOCIAL_LAUNCH_CARD_PATH,
  buildJournalPostPath,
} from "./routes.js";
import {
  JOURNAL_OG_IMAGE,
  JOURNAL_OG_IMAGE_ALT,
  buildMetadataPayload,
} from "./seo.js";

export function getHomePageMetadata({ robots } = {}) {
  return buildMetadataPayload({
    title: buildPageTitle(),
    description: DEFAULT_DESCRIPTION,
    pathname: HOME_PATH,
    robots,
    schema: getBaseSchema(),
  });
}

export function getJournalIndexMetadata() {
  return buildMetadataPayload({
    title: buildPageTitle("Journal"),
    description:
      "Founder-led notes on products, execution, frontend systems, AI workflows, and real build decisions from live work.",
    pathname: JOURNAL_INDEX_PATH,
    keywords: ["founder notes", "frontend systems", "AI workflows", "product breakdowns"],
    fallbackImagePath: JOURNAL_OG_IMAGE,
    fallbackImageAlt: JOURNAL_OG_IMAGE_ALT,
    schema: [...getBaseSchema(), getJournalSchema()],
  });
}

export function getJournalArticleMetadata(post) {
  const pageSchema = [...getBaseSchema(), getJournalSchema(), getJournalArticleSchema(post)];
  const faqSchema = getJournalFaqSchema(post);

  if (faqSchema) {
    pageSchema.push(faqSchema);
  }

  return buildMetadataPayload({
    title: buildPageTitle(post.metaTitle ?? post.title),
    description: post.metaDescription ?? post.description,
    pathname: buildJournalPostPath(post.slug),
    imagePath: post.ogImage,
    imageAlt: post.ogImageAlt,
    fallbackImagePath: post.articleImage ?? JOURNAL_OG_IMAGE,
    fallbackImageAlt: post.articleImageAlt ?? JOURNAL_OG_IMAGE_ALT,
    type: "article",
    publishedAt: post.publishedAt,
    section: post.category,
    keywords: post.tags,
    schema: pageSchema,
  });
}

export function getNotFoundMetadata() {
  return buildMetadataPayload({
    title: buildPageTitle("Not Found"),
    description: "The page you requested is not available.",
    pathname: "/404/",
    robots: "noindex, nofollow",
    schema: getBaseSchema(),
  });
}

export function getPreviewPageMetadata(pathname) {
  return buildMetadataPayload({
    title: buildPageTitle("Preview"),
    description: "Preview surface for internal social card generation.",
    pathname,
    robots: "noindex, nofollow",
    schema: [],
  });
}

export function getPrerenderMetadataEntries() {
  return [
    { pathname: HOME_PATH, metadata: getHomePageMetadata() },
    { pathname: JOURNAL_INDEX_PATH, metadata: getJournalIndexMetadata() },
    ...posts.map((post) => ({
      pathname: buildJournalPostPath(post.slug),
      metadata: getJournalArticleMetadata(post),
    })),
    { pathname: "/404/", metadata: getNotFoundMetadata() },
    {
      pathname: SOCIAL_LAUNCH_CARD_PATH,
      metadata: getPreviewPageMetadata(SOCIAL_LAUNCH_CARD_PATH),
    },
    {
      pathname: SOCIAL_LAUNCH_CARD_FINAL_PATH,
      metadata: getPreviewPageMetadata(SOCIAL_LAUNCH_CARD_FINAL_PATH),
    },
    {
      pathname: SOCIAL_LAUNCH_CARD_MINIMAL_PATH,
      metadata: getPreviewPageMetadata(SOCIAL_LAUNCH_CARD_MINIMAL_PATH),
    },
  ];
}
