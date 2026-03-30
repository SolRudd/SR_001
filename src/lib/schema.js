import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  buildAbsoluteUrl,
} from "../content/site";
import { buildJournalPostPath } from "./routes";

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const JOURNAL_ID = `${SITE_URL}/journal/#blog`;

const SAME_AS = [
  "https://twitter.com/solrudd",
  "https://github.com/solrudd",
  "https://linkedin.com/in/solrudd",
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
  const articleUrl = buildAbsoluteUrl(buildJournalPostPath(post.slug));

  return {
    "@type": "BlogPosting",
    "@id": `${articleUrl}#article`,
    url: articleUrl,
    mainEntityOfPage: articleUrl,
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    author: { "@id": PERSON_ID },
    publisher: { "@id": PERSON_ID },
    image: buildAbsoluteUrl(DEFAULT_OG_IMAGE),
    articleSection: post.category,
    keywords: post.tags,
    isPartOf: { "@id": JOURNAL_ID },
  };
}
