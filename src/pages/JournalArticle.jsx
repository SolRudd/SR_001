import EditorialLayout from "../components/EditorialLayout";
import { IconArrow, IconRadar, IconTerm } from "../components/Icons";
import { formatPostDate, getRelatedPosts } from "../content/posts";
import { buildPageTitle } from "../content/site";
import { usePageMetadata } from "../lib/metadata";
import {
  getBaseSchema,
  getJournalArticleSchema,
  getJournalFaqSchema,
  getJournalSchema,
} from "../lib/schema";
import {
  JOURNAL_INDEX_PATH,
  buildHomeSectionPath,
  buildJournalPostPath,
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
    case "list":
      return (
        <ul>
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
  const pageSchema = [...getBaseSchema(), getJournalSchema(), getJournalArticleSchema(post)];
  const faqSchema = getJournalFaqSchema(post);

  if (faqSchema) {
    pageSchema.push(faqSchema);
  }

  usePageMetadata({
    title: buildPageTitle(post.metaTitle ?? post.title),
    description: post.metaDescription ?? post.description,
    pathname: buildJournalPostPath(post.slug),
    type: "article",
    publishedAt: post.publishedAt,
    section: post.category,
    keywords: post.tags,
    schema: pageSchema,
  });

  return (
    <EditorialLayout mainClassName="journal-page">
      <section className="article-hero">
        <div className="wrap">
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
              <span>{post.readingTime}</span>
              <span>Indexable</span>
              <span>Founder-led</span>
            </div>
            <div className="journal-chip-row">
              {post.tags.map((tag) => (
                <span className="journal-chip" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
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
            </article>

            <aside className="article-side reveal revealed">
              <div className="journal-side-panel">
                <div className="journal-side-label">// Route</div>
                <div className="journal-side-title">Clean structure for future publishing.</div>
                <div className="journal-side-body">
                  Journal entries live at stable URLs now. Future case studies can extend into
                  a parallel {"`/projects/<slug>/`"} lane without rewriting the current system.
                </div>
              </div>

              <div className="journal-side-panel">
                <div className="journal-side-label">// Continue Reading</div>
                <div className="journal-side-links">
                  {relatedPosts.map((relatedPost) => (
                    <a
                      href={buildJournalPostPath(relatedPost.slug)}
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

              {post.references?.length ? (
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
                    <a href={buildJournalPostPath(relatedPost.slug)}>{relatedPost.title}</a>
                  </h3>
                  <p className="article-more-excerpt">{relatedPost.excerpt}</p>
                  <div className="article-more-footer">
                    <span>{formatPostDate(relatedPost.publishedAt)}</span>
                    <a href={buildJournalPostPath(relatedPost.slug)} className="journal-inline-link">
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
