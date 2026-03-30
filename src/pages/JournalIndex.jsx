import EditorialLayout from "../components/EditorialLayout";
import { IconArrow, IconPen, IconRadar, IconTerm } from "../components/Icons";
import { posts, formatPostDate } from "../content/posts";
import { buildPageTitle } from "../content/site";
import { usePageMetadata } from "../lib/metadata";
import { getBaseSchema, getJournalSchema } from "../lib/schema";
import {
  JOURNAL_INDEX_PATH,
  buildHomeSectionPath,
  buildJournalPostPath,
} from "../lib/routes";

const COVERAGE_AREAS = [
  "Build logs from live work",
  "Founder/operator notes",
  "Frontend and system decisions",
  "AI workflow breakdowns",
];

export default function JournalIndex() {
  const [featuredPost, ...archivePosts] = posts;
  const nextReadPost = archivePosts[0] ?? featuredPost;

  usePageMetadata({
    title: buildPageTitle("Journal"),
    description:
      "Founder-led notes on products, execution, frontend systems, AI workflows, and real build decisions from live work.",
    pathname: JOURNAL_INDEX_PATH,
    keywords: ["founder notes", "frontend systems", "AI workflows", "product breakdowns"],
    schema: [...getBaseSchema(), getJournalSchema()],
  });

  if (!featuredPost) {
    return (
      <EditorialLayout mainClassName="journal-page">
        <section className="journal-hero">
          <div className="wrap">
            <div className="journal-hero-grid">
              <div className="journal-hero-copy reveal revealed">
                <div className="eyebrow">
                  <IconPen /> Journal
                </div>
                <h1 className="journal-title">Operator notes, build logs, and technical essays.</h1>
                <p className="journal-body">
                  New notes are being prepared. The journal route is live and ready for future publishing.
                </p>
                <div className="journal-meta-row">
                  <a href={buildHomeSectionPath("work")} className="journal-inline-link">
                    Selected Work <IconArrow size={12} />
                  </a>
                  <a href={buildHomeSectionPath("contact")} className="journal-inline-link">
                    Start a project <IconArrow size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </EditorialLayout>
    );
  }

  return (
    <EditorialLayout mainClassName="journal-page">
      <section className="journal-hero">
        <div className="wrap">
          <div className="journal-hero-grid">
            <div className="journal-hero-copy reveal revealed">
              <div className="eyebrow">
                <IconPen /> Journal
              </div>
              <h1 className="journal-title">Operator notes, build logs, and technical essays.</h1>
              <p className="journal-body">
                A publishing layer for real execution notes. Product decisions, AI workflow
                writeups, frontend systems thinking, and founder-side lessons from live work.
              </p>
              <div className="journal-meta-row">
                <a href={buildHomeSectionPath("work")} className="journal-inline-link">
                  Selected Work <IconArrow size={12} />
                </a>
                <a href={buildHomeSectionPath("contact")} className="journal-inline-link">
                  Start a project <IconArrow size={12} />
                </a>
              </div>
            </div>

            <article className="journal-feature reveal revealed">
              <div className="journal-feature-head">
                <div className="eyebrow">
                  <IconTerm /> Latest Dispatch
                </div>
                <span className="journal-feature-date">{formatPostDate(featuredPost.publishedAt)}</span>
              </div>
              <div className="journal-feature-category">{featuredPost.category}</div>
              <h2 className="journal-feature-title">{featuredPost.title}</h2>
              <p className="journal-feature-excerpt">{featuredPost.excerpt}</p>
              <div className="journal-chip-row">
                {featuredPost.tags.map((tag) => (
                  <span className="journal-chip" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <a href={buildJournalPostPath(featuredPost.slug)} className="journal-feature-link">
                Read note <IconArrow size={12} />
              </a>
            </article>
          </div>
        </div>
      </section>

      <div className="hr" />

      <section className="sec journal-archive">
        <div className="wrap">
          <div className="journal-archive-grid">
            <div className="journal-list-wrap reveal revealed">
              <div className="sec-head journal-sec-head">
                <div className="eyebrow">
                  <IconRadar /> Archive
                </div>
                <h2 className="h2">Publishing from active systems.</h2>
                <p className="body">
                  Every note is meant to be useful to operators, founders, and teams shipping
                  real products. No generic trend filler. No listicle sludge.
                </p>
              </div>

              <div className="journal-list">
                {posts.map((post) => (
                  <article className="journal-row" key={post.slug}>
                    <div className="journal-row-date">{formatPostDate(post.publishedAt)}</div>
                    <div className="journal-row-main">
                      <div className="journal-row-category">{post.category}</div>
                      <h3 className="journal-row-title">
                        <a href={buildJournalPostPath(post.slug)}>{post.title}</a>
                      </h3>
                      <p className="journal-row-excerpt">{post.excerpt}</p>
                    </div>
                    <div className="journal-row-side">
                      <div className="journal-chip-row journal-chip-row-compact">
                        {post.tags.map((tag) => (
                          <span className="journal-chip" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="journal-row-read">{post.readingTime}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <aside className="journal-side reveal revealed">
              <div className="journal-side-panel">
                <div className="journal-side-label">// Coverage</div>
                <div className="journal-side-title">Built to scale into a real writing layer.</div>
                <div className="journal-side-body">
                  The journal handles active notes now. Future project or case-study pages can
                  sit beside it cleanly once deeper retrospectives are worth publishing.
                </div>
                <ul className="journal-side-list">
                  {COVERAGE_AREAS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="journal-side-panel">
                <div className="journal-side-label">// Internal Links</div>
                <div className="journal-side-links">
                  <a href={buildHomeSectionPath("signal")} className="journal-inline-link">
                    Signal layer <IconArrow size={12} />
                  </a>
                  <a href={buildHomeSectionPath("work")} className="journal-inline-link">
                    Product index <IconArrow size={12} />
                  </a>
                  <a href={buildJournalPostPath(nextReadPost.slug)} className="journal-inline-link">
                    Next read <IconArrow size={12} />
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </EditorialLayout>
  );
}
