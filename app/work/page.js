import Link from "next/link";
import PageShell from "../../components/PageShell";
import PageHead from "../../components/PageHead";
import JsonLd from "../../components/JsonLd";
import { cases } from "../../lib/cases";
import { pageMetadata } from "../../lib/seo";
import { breadcrumbSchema } from "../../lib/schema";

export const metadata = pageMetadata({
  title: "Work",
  description:
    "Selected performance marketing work for B2B SaaS, EdTech, and Cloud POS businesses.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <PageShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
        ])}
      />
      <PageHead
        eyebrow="Selected work"
        title="Stories, not screenshots."
        lead="Performance marketing case studies, with the approach behind each one."
      />
      <section className="section-wrap" aria-label="Case studies">
        <div className="cases">
          {cases.map((c) => (
            <article className="case" key={c.slug}>
              <h2>
                <Link href={`/work/${c.slug}`}>{c.name}</Link>
              </h2>
              <p>{c.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
