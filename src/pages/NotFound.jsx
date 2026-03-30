import EditorialLayout from "../components/EditorialLayout";
import { IconArrow, IconRadar } from "../components/Icons";
import { buildPageTitle } from "../content/site";
import { usePageMetadata } from "../lib/metadata";
import { getBaseSchema } from "../lib/schema";
import { JOURNAL_INDEX_PATH, HOME_PATH } from "../lib/routes";

export default function NotFound() {
  usePageMetadata({
    title: buildPageTitle("Not Found"),
    description: "The page you requested is not available.",
    pathname: "/404/",
    robots: "noindex, nofollow",
    schema: getBaseSchema(),
  });

  return (
    <EditorialLayout mainClassName="journal-page">
      <section className="article-hero">
        <div className="wrap">
          <div className="article-hero-shell reveal revealed">
            <div className="eyebrow">
              <IconRadar /> Route Error
            </div>
            <h1 className="article-title">That route does not exist.</h1>
            <p className="article-dek">
              The page is missing, archived, or still waiting to be published into the site
              structure.
            </p>
            <div className="journal-meta-row">
              <a href={HOME_PATH} className="journal-inline-link">
                Return home <IconArrow size={12} />
              </a>
              <a href={JOURNAL_INDEX_PATH} className="journal-inline-link">
                Open journal <IconArrow size={12} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </EditorialLayout>
  );
}
