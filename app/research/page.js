import Link from "next/link";
import PageShell from "../../components/PageShell";
import PageHead from "../../components/PageHead";
import JsonLd from "../../components/JsonLd";
import { papers } from "../../lib/papers";
import { pageMetadata } from "../../lib/seo";
import { breadcrumbSchema } from "../../lib/schema";

// Stay out of search until there is something to index, like the blog does.
export const metadata = {
  ...pageMetadata({
    title: "Research",
    description:
      "Research papers on digital marketing, performance measurement and demand generation by Vathsan Sharma.",
    path: "/research",
  }),
  robots: { index: papers.length > 0 },
};

export default function ResearchPage() {
  return (
    <PageShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Research", path: "/research" },
        ])}
      />
      <PageHead
        eyebrow="Research"
        title="Research and papers."
        lead="Published and in-progress work on digital marketing, measurement and demand generation."
      />
      <section className="band" aria-label="Papers">
        {papers.length === 0 ? (
          <p className="body">Papers will be listed here.</p>
        ) : (
          <ul className="paper-list">
            {papers.map((paper) => (
              <li key={paper.slug}>
                <Link className="paper-row" href={`/research/${paper.slug}`}>
                  <span className="paper-venue">{paper.venue}</span>
                  <span className="paper-row-title">{paper.title}</span>
                  <span className="paper-arrow" aria-hidden="true">›</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </PageShell>
  );
}
