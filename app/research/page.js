import PageShell from "../../components/PageShell";
import PageHead from "../../components/PageHead";
import JsonLd from "../../components/JsonLd";
import { papers } from "../../lib/papers";
import { pageMetadata } from "../../lib/seo";
import { breadcrumbSchema, paperSchema } from "../../lib/schema";

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
      {papers.map((paper) => (
        <JsonLd key={paper.slug} data={paperSchema(paper)} />
      ))}
      <PageHead
        eyebrow="Research"
        title="Research and papers."
        lead="Published and in-progress work on digital marketing, measurement and demand generation."
      />
      <section className="band" aria-label="Papers">
        {papers.length === 0 ? (
          <p className="body">Papers will be listed here.</p>
        ) : (
          <div className="cases">
            {papers.map((paper) => (
              <article className="case" key={paper.slug}>
                <p className="cap">
                  {paper.venue} · {paper.year}
                </p>
                <h2 className="paper-title">{paper.title}</h2>
                <p>{paper.summary}</p>
                {paper.coauthors && <p className="cap">With {paper.coauthors.join(", ")}</p>}
                <p className="paper-links">
                  {paper.pdf && <a href={paper.pdf}>Read PDF</a>}
                  {paper.url && (
                    <a href={paper.url} target="_blank" rel="noopener noreferrer">
                      View publisher page
                    </a>
                  )}
                </p>
              </article>
            ))}
          </div>
        )}
      </section>
    </PageShell>
  );
}
