import Link from "next/link";
import PageShell from "../../components/PageShell";
import PageHead from "../../components/PageHead";
import JsonLd from "../../components/JsonLd";
import { papers, categories } from "../../lib/papers";
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
          categories.map((group) => {
            const items = papers.filter((paper) => paper.category === group.id);
            if (items.length === 0) return null;
            return (
              <section key={group.id} className="paper-group" aria-labelledby={`group-${group.id}`}>
                <h2 id={`group-${group.id}`} className="paper-group-title">
                  {group.name}
                </h2>
                <p className="paper-group-desc">{group.description}</p>
                <ul className="paper-list">
                  {items.map((paper) => (
                    <li key={paper.slug}>
                      <Link className="paper-row" href={`/research/${paper.slug}`}>
                        <span className="paper-venue">{paper.venue}</span>
                        <span className="paper-row-title">{paper.title}</span>
                        <span className="paper-arrow" aria-hidden="true">›</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })
        )}
      </section>
    </PageShell>
  );
}
