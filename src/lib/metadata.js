import { useEffect } from "react";
import {
  buildManagedHeadMarkup,
  buildMetadataPayload,
} from "./seo.js";

function ensureHeadMarkers() {
  let startComment = null;
  let endComment = null;

  for (const node of document.head.childNodes) {
    if (node.nodeType !== Node.COMMENT_NODE) {
      continue;
    }

    if (node.nodeValue === " SEO:BEGIN ") {
      startComment = node;
    }

    if (node.nodeValue === " SEO:END ") {
      endComment = node;
    }
  }

  if (!startComment) {
    startComment = document.createComment(" SEO:BEGIN ");
    document.head.appendChild(startComment);
  }

  if (!endComment) {
    endComment = document.createComment(" SEO:END ");
    document.head.appendChild(endComment);
  }

  return { startComment, endComment };
}

function replaceManagedHead(metadata) {
  const { startComment, endComment } = ensureHeadMarkers();
  let cursor = startComment.nextSibling;

  while (cursor && cursor !== endComment) {
    const next = cursor.nextSibling;
    cursor.remove();
    cursor = next;
  }

  const template = document.createElement("template");
  template.innerHTML = buildManagedHeadMarkup(metadata);
  endComment.before(template.content);
}

export function usePageMetadata({
  title,
  description,
  pathname,
  imagePath,
  imageAlt,
  fallbackImagePath,
  fallbackImageAlt,
  type,
  robots,
  publishedAt,
  section,
  keywords,
  schema,
  author,
} = {}) {
  useEffect(() => {
    const metadata = buildMetadataPayload({
      title,
      description,
      pathname,
      imagePath,
      imageAlt,
      fallbackImagePath,
      fallbackImageAlt,
      type,
      robots,
      publishedAt,
      section,
      keywords,
      schema,
      author,
    });

    document.title = metadata.title;
    replaceManagedHead(metadata);
  }, [
    author,
    description,
    fallbackImageAlt,
    fallbackImagePath,
    imageAlt,
    imagePath,
    keywords,
    pathname,
    publishedAt,
    robots,
    schema,
    section,
    title,
    type,
  ]);
}
