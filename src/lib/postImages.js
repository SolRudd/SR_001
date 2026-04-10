import {
  DEFAULT_OG_IMAGE,
  DEFAULT_OG_IMAGE_ALT,
} from "../content/site.js";

export const JOURNAL_COVER_IMAGE = "/articles/heroes/journal-cover.jpg";
export const JOURNAL_COVER_IMAGE_ALT =
  "A dark signal-monitoring interface representing technical insight, systems thinking, and operational visibility.";

export function getJournalCoverImage() {
  return {
    src: JOURNAL_COVER_IMAGE,
    alt: JOURNAL_COVER_IMAGE_ALT,
  };
}

export function getPostHeroImage(post) {
  if (!post?.articleImage) {
    return null;
  }

  return {
    src: post.articleImage,
    alt: post.articleImageAlt ?? post.title,
  };
}

export function getPostCardImage(post) {
  return getPostHeroImage(post);
}

export function getPostSocialImage(post) {
  const heroImage = getPostHeroImage(post);

  return {
    src: post?.ogImage ?? heroImage?.src ?? DEFAULT_OG_IMAGE,
    alt: post?.ogImageAlt ?? heroImage?.alt ?? DEFAULT_OG_IMAGE_ALT,
  };
}
