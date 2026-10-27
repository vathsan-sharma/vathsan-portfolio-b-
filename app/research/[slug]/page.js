import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "../../../components/PageShell";
import PageHead from "../../../components/PageHead";
import JsonLd from "../../../components/JsonLd";
import { papers, getPaper } from "../../../lib/papers";
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

export default function PaperPage({ params }) {
  const paper = getPaper(params.slug);
  if (!paper) notFound();

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

      <section className="band" aria-label="Abstract">
        <p className="eyebrow">Abstract</p>
        <p className="body paper-abstract">{paper.abstract}</p>

        {paper.status && <p className="paper-status">{paper.status}</p>}
        {paper.coauthors && <p className="cap">With {paper.coauthors.join(", ")}</p>}

        <p className="paper-links">
          {paper.pdf && <a href={paper.pdf}>Read the full PDF</a>}
          {paper.url && (
            <a href={paper.url} target="_blank" rel="noopener noreferrer">
              View publisher page
            </a>
          )}
          <Link href="/research">All research</Link>
        </p>
      </section>
    </PageShell>
  );
}
