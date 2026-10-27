import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "../../../components/PageShell";
import PageHead from "../../../components/PageHead";
import JsonLd from "../../../components/JsonLd";
import { papers, getPaper } from "../../../lib/papers";
import { contentBySlug } from "../../../lib/research-content";
import { pageMetadata } from "../../../lib/seo";
import { breadcrumbSchema, paperSchema } from "../../../lib/schema";

export function generateStaticParams() {
  return papers.map((paper) => ({ slug: paper.slug }));
}

export function generateMetadata({ params }) {
  const paper = getPaper(params.slug);
  if (!paper) return {};
  return pageMetadata({
    title: paper.seoTitle || paper.title,
    description: paper.summary,
    path: `/research/${paper.slug}`,
  });
}

// Renders one block of the paper body. Headings keep the page outline: the
// page title is the H1, sections are H2, and sub-sections are H3.
function Block({ block }) {
  if (block.type === "h2") return <h2 className="paper-h2">{block.text}</h2>;
  if (block.type === "h3") return <h3 className="paper-h3">{block.text}</h3>;
  if (block.type === "table") {
    const [head, ...rest] = block.rows;
    return (
      <div className="paper-table-wrap">
        <table className="paper-table">
          <thead>
            <tr>
              {head.map((cell, i) => (
                <th key={i}>{cell}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rest.map((row, r) => (
              <tr key={r}>
                {row.map((cell, i) => (
                  <td key={i}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return <p className="paper-p">{block.text}</p>;
}

export default function PaperPage({ params }) {
  const paper = getPaper(params.slug);
  if (!paper) notFound();
  const body = contentBySlug[paper.slug] || [];

  return (
    <PageShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Research", path: "/research" },
          { name: paper.title, path: `/research/${paper.slug}` },
        ])}
      />
      <JsonLd data={paperSchema(paper)} />
      <PageHead eyebrow={paper.venue} title={paper.title} lead={paper.summary} />

      <article className="band paper-body" aria-label="Paper">
        {paper.status && <p className="paper-status">{paper.status}</p>}
        {paper.coauthors && <p className="cap">With {paper.coauthors.join(", ")}</p>}

        {body.map((block, i) => (
          <Block key={i} block={block} />
        ))}

        <p className="paper-links">
          {paper.pdf && <a href={paper.pdf}>Read the full PDF</a>}
          {paper.url && (
            <a href={paper.url} target="_blank" rel="noopener noreferrer">
              View publisher page
            </a>
          )}
          <Link href="/research">All research</Link>
        </p>
      </article>
    </PageShell>
  );
}
