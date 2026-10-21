import PageShell from "../../components/PageShell";
import PageHead from "../../components/PageHead";
import JsonLd from "../../components/JsonLd";
import { faqs } from "../../lib/faq";
import { pageMetadata } from "../../lib/seo";
import { breadcrumbSchema, faqSchema } from "../../lib/schema";

export const metadata = pageMetadata({
  title: "FAQ",
  description:
    "Answers about Vathsan Sharma's paid media experience, engineering background, training, certifications, and how to get in touch.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <PageShell>
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ])}
      />
      <PageHead
        eyebrow="FAQ"
        title="Common questions."
        lead="Short answers about the work, the background, and how to get in touch."
      />
      <section className="prose faq" aria-label="Questions and answers">
        {faqs.map((faq) => (
          <div className="faq-item" key={faq.q}>
            <h2>{faq.q}</h2>
            <p>{faq.a}</p>
          </div>
        ))}
      </section>
    </PageShell>
  );
}
