import { notFound } from "next/navigation";
import PageShell from "../../../components/PageShell";
import PageHead from "../../../components/PageHead";
import JsonLd from "../../../components/JsonLd";
import { cases, getCase } from "../../../lib/cases";
import { pageMetadata } from "../../../lib/seo";
import { breadcrumbSchema } from "../../../lib/schema";

const sections = [
  { key: "challenge", title: "The challenge" },
  { key: "approach", title: "The approach" },
  { key: "results", title: "The results" },
];

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const item = getCase(params.slug);
  if (!item) return {};
  return pageMetadata({
    title: `${item.name} case study`,
    description: `${item.summary} Read the ${item.name} case study by Vathsan Sharma.`,
    path: `/work/${item.slug}`,
  });
}

export default function CasePage({ params }) {
  const item = getCase(params.slug);
  if (!item) notFound();

  return (
    <PageShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
          { name: item.name, path: `/work/${item.slug}` },
        ])}
      />
      <PageHead eyebrow="Case study" title={item.name} lead={item.summary} />
      <section className="prose" aria-label="Case study details">
        {sections
          .filter((s) => item[s.key])
          .map((s) => (
            <div className="case-section" key={s.key}>
              <h2>{s.title}</h2>
              <p>{item[s.key]}</p>
            </div>
          ))}
      </section>
    </PageShell>
  );
}
