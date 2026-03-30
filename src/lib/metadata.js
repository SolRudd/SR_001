import { useEffect } from "react";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  DEFAULT_OG_IMAGE_ALT,
  SITE_TITLE,
  buildAbsoluteUrl,
} from "../content/site";

const DEFAULT_ROBOTS =
  "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

function ensureMetaAttribute(selector, attributeName, attributeValue) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }

  return element;
}

function ensureLinkAttribute(selector, attributeName, attributeValue) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }

  return element;
}

function setMetaTag(name, value) {
  ensureMetaAttribute(`meta[name="${name}"]`, "name", name).setAttribute("content", value);
}

function setPropertyTag(property, value) {
  ensureMetaAttribute(`meta[property="${property}"]`, "property", property).setAttribute("content", value);
}

function setCanonical(href) {
  ensureLinkAttribute('link[rel="canonical"]', "rel", "canonical").setAttribute("href", href);
}

function removeHeadElement(selector) {
  document.head.querySelector(selector)?.remove();
}

function setOrRemoveMetaTag(name, value) {
  if (!value) {
    removeHeadElement(`meta[name="${name}"]`);
    return;
  }

  setMetaTag(name, value);
}

function setOrRemovePropertyTag(property, value) {
  if (!value) {
    removeHeadElement(`meta[property="${property}"]`);
    return;
  }

  setPropertyTag(property, value);
}

function setStructuredData(schema) {
  const scriptSelector = 'script[data-site-schema="page"]';
  const hasSchema = Array.isArray(schema) && schema.length > 0;

  if (!hasSchema) {
    removeHeadElement(scriptSelector);
    return;
  }

  let script = document.head.querySelector(scriptSelector);

  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-site-schema", "page");
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": schema,
  });
}

export function usePageMetadata({
  title = SITE_TITLE,
  description = DEFAULT_DESCRIPTION,
  pathname = "/",
  imagePath = DEFAULT_OG_IMAGE,
  imageAlt = DEFAULT_OG_IMAGE_ALT,
  type = "website",
  robots = DEFAULT_ROBOTS,
  publishedAt,
  section,
  keywords,
  schema = [],
} = {}) {
  useEffect(() => {
    const canonical = buildAbsoluteUrl(pathname);
    const image = buildAbsoluteUrl(imagePath);

    document.title = title;
    setCanonical(canonical);
    setMetaTag("description", description);
    setMetaTag("robots", robots);
    setOrRemoveMetaTag("keywords", Array.isArray(keywords) && keywords.length ? keywords.join(", ") : null);
    setPropertyTag("og:type", type);
    setPropertyTag("og:url", canonical);
    setPropertyTag("og:title", title);
    setPropertyTag("og:description", description);
    setPropertyTag("og:image", image);
    setPropertyTag("og:image:alt", imageAlt);
    setMetaTag("twitter:title", title);
    setMetaTag("twitter:description", description);
    setMetaTag("twitter:image", image);
    setMetaTag("twitter:image:alt", imageAlt);
    setOrRemovePropertyTag("article:section", type === "article" ? section : null);

    const articlePublishedTimeTag = ensureMetaAttribute(
      'meta[property="article:published_time"]',
      "property",
      "article:published_time"
    );

    if (publishedAt && type === "article") {
      articlePublishedTimeTag.setAttribute("content", publishedAt);
    } else {
      articlePublishedTimeTag.remove();
    }

    setStructuredData(schema);
  }, [
    description,
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
