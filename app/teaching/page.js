import PageShell from "../../components/PageShell";
import PageHead from "../../components/PageHead";
import Teaching from "../../components/Teaching";
import JsonLd from "../../components/JsonLd";
import { pageMetadata } from "../../lib/seo";
import { breadcrumbSchema } from "../../lib/schema";

export const metadata = pageMetadata({
  title: "Teaching",
  description:
    "Corporate digital marketing training for government bodies, NGOs, and Hatch, plus conference panels and visiting lectures.",
  path: "/teaching",
});

export default function TeachingPage() {
  return (
    <PageShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Teaching", path: "/teaching" },
        ])}
      />
      <PageHead
        eyebrow="Teaching"
        title="Teaching the next builders."
        lead="Certified training, conference panels, and visiting lectures on digital marketing."
      />
      <Teaching />
    </PageShell>
  );
}
