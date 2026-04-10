import EditorialLayout from "../components/EditorialLayout";
import { IconArrow, IconRadar, IconTerm } from "../components/Icons";
import { formatPostDate, getRelatedPosts } from "../content/posts";
import { usePageMetadata } from "../lib/metadata";
import { getJournalArticleMetadata } from "../lib/pageMetadata";
import { getPostHeroImage } from "../lib/postImages";
import {
  JOURNAL_INDEX_PATH,
  buildHomeSectionPath,
  buildPostPath,
} from "../lib/routes";

function isExternalHref(href) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function renderRichText(segments, keyPrefix) {
  return segments.map((segment, index) => {
    if (typeof segment === "string") {
      return <span key={`${keyPrefix}-${index}`}>{segment}</span>;
    }

    const external = segment.external ?? isExternalHref(segment.href);

    return (
      <a
        key={`${keyPrefix}-${index}-${segment.href}`}
        href={segment.href}
        className="article-text-link"
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
      >
        {segment.label}
      </a>
    );
  });
}

function renderBlock(block) {
  switch (block.type) {
    case "heading":
      return block.level === 3 ? <h3>{block.text}</h3> : <h2>{block.text}</h2>;
    case "stat":
      return (
        <aside className="article-stat">
          <div className="article-stat-label">// Signal</div>
          <div className="article-stat-value">{block.value}</div>
          <p className="article-stat-body">{block.body}</p>
        </aside>
      );
    case "list":
      return (
        <ul className={block.variant === "checklist" ? "article-checklist" : undefined}>
          {block.items.map((item, index) => (
            <li key={`${block.type}-${index}`}>
              {Array.isArray(item) ? renderRichText(item, `${block.type}-${index}`) : item}
            </li>
          ))}
        </ul>
      );
    case "code":
      return (
        <pre>
          <code>{block.code}</code>
        </pre>
      );
    case "paragraph":
    default:
      return (
        <p>
          {Array.isArray(block.segments)
            ? renderRichText(block.segments, block.text ?? "paragraph")
            : block.text}
        </p>
      );
  }
}

export default function JournalArticle({ post }) {
  const relatedPosts = getRelatedPosts(post);
  const heroImage = getPostHeroImage(post);
  const heroMeta = [
    post.readingTime,
    `By ${post.authorName ?? "Sol Rudd"}`,
    post.metaLabel ?? "Editorial analysis",
  ].filter(Boolean);
  const contextPanel = post.sideNote ?? {
    label: "// Context",
    title: "Readable, indexable, and built for useful linking.",
    body:
      "Each article is structured to stay legible on the page, credible in search, and easy to connect back into the wider journal and live work across the site.",
  };
  usePageMetadata(getJournalArticleMetadata(post));

  return (
    <EditorialLayout mainClassName="journal-page">
      <section className="article-hero">
        <div className="wrap">
          <div
            className={`article-hero-grid${post.heroVisual ? " article-hero-grid--visual" : ""}`}
          >
            <div className="article-hero-shell reveal revealed">
              <a href={JOURNAL_INDEX_PATH} className="article-backlink">
                <IconArrow size={12} /> Back to journal
              </a>
              <div className="article-topline">
                <div className="eyebrow">
                  <IconTerm /> {post.category}
                </div>
                <div className="article-published">Published {formatPostDate(post.publishedAt)}</div>
              </div>
              <h1 className="article-title">{post.title}</h1>
              <p className="article-dek">{post.description}</p>
              <div className="article-meta">
                {heroMeta.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="journal-chip-row">
                {post.tags.map((tag) => (
                  <span className="journal-chip" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {post.heroVisual ? (
              <aside className="article-hero-visual reveal revealed">
                <div className="article-hero-visual-label">{post.heroVisual.label}</div>
                <div className="article-hero-visual-title">{post.heroVisual.title}</div>
                <p className="article-hero-visual-body">{post.heroVisual.body}</p>
                <div className="article-hero-visual-grid">
                  {post.heroVisual.items.map((item) => (
                    <div className="article-hero-visual-card" key={`${item.value}-${item.label}`}>
                      <div className="article-hero-visual-value">{item.value}</div>
                      <div className="article-hero-visual-note">{item.label}</div>
                    </div>
                  ))}
                </div>
              </aside>
            ) : null}
          </div>

          {heroImage ? (
            <figure className="article-hero-media reveal revealed">
              <img
                src={heroImage.src}
                alt={heroImage.alt}
                className="article-hero-image"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </figure>
          ) : null}
        </div>
      </section>

      <div className="hr" />

      <section className="sec article-sec">
        <div className="wrap">
          <div className="article-grid">
            <article className="article-body reveal revealed">
              <div className="article-intro">{post.excerpt}</div>
              <div className="article-prose">
                {post.content.map((block, index) => (
                  <div className="article-block" key={`${block.type}-${index}`}>
                    {renderBlock(block)}
                  </div>
                ))}
              </div>

              {post.faq?.length ? (
                <section className="article-faq">
                  <h2>FAQ</h2>
                  <div className="article-faq-list">
                    {post.faq.map((item) => (
                      <article className="article-faq-item" key={item.question}>
                        <h3>{item.question}</h3>
                        <p>{item.answer}</p>
                      </article>
                    ))}
                  </div>
                </section>
              ) : null}

              {post.references?.length && post.footerReferences ? (
                <section className="article-sources">
                  <h2>Sources</h2>
                  <div className="article-sources-list">
                    {post.references.map((reference) => {
                      const external = reference.external ?? isExternalHref(reference.href);

                      return (
                        <article className="article-source-item" key={reference.href}>
                          <a
                            href={reference.href}
                            className="journal-ref-link"
                            target={external ? "_blank" : undefined}
                            rel={external ? "noreferrer" : undefined}
                          >
                            {reference.label} <IconArrow size={12} />
                          </a>
                          <p>{reference.note}</p>
                        </article>
                      );
                    })}
                  </div>
                </section>
              ) : null}

              {post.cta ? (
                <section className="article-cta">
                  <div className="article-cta-label">// Next Step</div>
                  <h2>{post.cta.headline}</h2>
                  <p>{post.cta.body}</p>
                  <div className="article-cta-actions">
                    <a href={post.cta.primary.href} className="btn btn-solid">
                      {post.cta.primary.label} <IconArrow size={16} />
                    </a>
                    <a href={post.cta.secondary.href} className="btn btn-ghost">
                      {post.cta.secondary.label} <IconArrow size={16} />
                    </a>
                  </div>
                </section>
              ) : null}
            </article>

            <aside className="article-side reveal revealed">
              <div className="journal-side-panel">
                <div className="journal-side-label">{contextPanel.label}</div>
                <div className="journal-side-title">{contextPanel.title}</div>
                <div className="journal-side-body">{contextPanel.body}</div>
              </div>

              <div className="journal-side-panel">
                <div className="journal-side-label">// Continue Reading</div>
                <div className="journal-side-links">
                  {relatedPosts.map((relatedPost) => (
                    <a
                      href={buildPostPath(relatedPost)}
                      className="journal-inline-link"
                      key={relatedPost.slug}
                    >
                      {relatedPost.title} <IconArrow size={12} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="journal-side-panel">
                <div className="journal-side-label">// Site Links</div>
                <div className="journal-side-links">
                  <a href={buildHomeSectionPath("work")} className="journal-inline-link">
                    Selected work <IconArrow size={12} />
                  </a>
                  <a href={buildHomeSectionPath("signal")} className="journal-inline-link">
                    Signal layer <IconArrow size={12} />
                  </a>
                  <a href={buildHomeSectionPath("contact")} className="journal-inline-link">
                    Start a project <IconArrow size={12} />
                  </a>
                </div>
              </div>

              {post.references?.length && !post.footerReferences ? (
                <div className="journal-side-panel">
                  <div className="journal-side-label">// References</div>
                  <div className="journal-ref-list">
                    {post.references.map((reference) => {
                      const external = reference.external ?? isExternalHref(reference.href);

                      return (
                        <div className="journal-ref-item" key={reference.href}>
                          <a
                            href={reference.href}
                            className="journal-ref-link"
                            target={external ? "_blank" : undefined}
                            rel={external ? "noreferrer" : undefined}
                          >
                            {reference.label} <IconArrow size={12} />
                          </a>
                          <div className="journal-ref-note">{reference.note}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : null}
            </aside>
          </div>
        </div>
      </section>

      <div className="hr" />

      <section className="sec article-more defer-section">
        <div className="wrap">
          <div className="article-more-shell reveal revealed">
            <div className="sec-head journal-sec-head">
              <div className="eyebrow">
                <IconRadar /> More Notes
              </div>
              <h2 className="h2">Keep reading through the system.</h2>
              <p className="body">
                The journal is built to create linking depth over time: notes into projects,
                projects back into essays, and both back into live work.
              </p>
            </div>

            <div className="article-more-grid">
              {relatedPosts.map((relatedPost) => (
                <article className="article-more-card" key={relatedPost.slug}>
                  <div className="journal-row-category">{relatedPost.category}</div>
                  <h3 className="article-more-title">
                    <a href={buildPostPath(relatedPost)}>{relatedPost.title}</a>
                  </h3>
                  <p className="article-more-excerpt">{relatedPost.excerpt}</p>
                  <div className="article-more-footer">
                    <span>{formatPostDate(relatedPost.publishedAt)}</span>
                    <a href={buildPostPath(relatedPost)} className="journal-inline-link">
                      Read note <IconArrow size={12} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </EditorialLayout>
  );
}
