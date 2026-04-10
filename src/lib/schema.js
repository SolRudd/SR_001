import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  GITHUB_URL,
  LINKEDIN_URL,
  SITE_NAME,
  SITE_URL,
  X_URL,
  buildAbsoluteUrl,
} from "../content/site.js";
import { getPostSocialImage } from "./postImages.js";
import { buildPostPath } from "./routes.js";

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const JOURNAL_ID = `${SITE_URL}/journal/#blog`;
const LOGO_URL = buildAbsoluteUrl("/brand/sol-rudd.svg");

const SAME_AS = [
  X_URL,
  GITHUB_URL,
  LINKEDIN_URL,
];

export function getBaseSchema() {
  return [
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Sol Rudd",
      url: SITE_URL,
      image: buildAbsoluteUrl(DEFAULT_OG_IMAGE),
      jobTitle: "Founder / Product Builder",
      sameAs: SAME_AS,
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "en-GB",
      description: DEFAULT_DESCRIPTION,
      image: buildAbsoluteUrl(DEFAULT_OG_IMAGE),
      logo: LOGO_URL,
      publisher: { "@id": PERSON_ID },
    },
  ];
}

export function getJournalSchema() {
  return {
    "@type": "Blog",
    "@id": JOURNAL_ID,
    url: buildAbsoluteUrl("/journal/"),
    name: "Sol Rudd Journal",
    description:
      "Founder-led notes on products, execution, frontend systems, AI workflows, and live build decisions.",
    inLanguage: "en-GB",
    publisher: { "@id": PERSON_ID },
  };
}

export function getJournalArticleSchema(post) {
  const articleUrl = buildAbsoluteUrl(buildPostPath(post));
  const socialImage = getPostSocialImage(post);

  return {
    "@type": post.schemaType ?? "BlogPosting",
    "@id": `${articleUrl}#article`,
    url: articleUrl,
    mainEntityOfPage: articleUrl,
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    inLanguage: "en-GB",
    author: { "@id": PERSON_ID },
    publisher: { "@id": PERSON_ID },
    image: buildAbsoluteUrl(socialImage.imagePath),
    primaryImageOfPage: buildAbsoluteUrl(socialImage.imagePath),
    thumbnailUrl: buildAbsoluteUrl(socialImage.imagePath),
    articleSection: post.category,
    keywords: post.tags,
    isPartOf: { "@id": JOURNAL_ID },
  };
}

export function getJournalFaqSchema(post) {
  if (!post?.faq?.length) {
    return null;
  }

  const articleUrl = buildAbsoluteUrl(buildPostPath(post));

  return {
    "@type": "FAQPage",
    "@id": `${articleUrl}#faq`,
    url: articleUrl,
    isPartOf: { "@id": JOURNAL_ID },
    mainEntity: post.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
