import PageShell from "../../components/PageShell";
import PageHead from "../../components/PageHead";
import StoryChapters from "../../components/StoryChapters";
import JourneyTimeline from "../../components/JourneyTimeline";
import Credentials from "../../components/Credentials";
import JsonLd from "../../components/JsonLd";
import { pageMetadata } from "../../lib/seo";
import { breadcrumbSchema } from "../../lib/schema";

export const metadata = pageMetadata({
  title: "About",
  description:
    "The story of Vathsan Sharma: from building robots and drones in mechatronics to running paid media budgets and training marketers.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHead
        eyebrow="About"
        title="From robots to revenue."
        lead="A mechatronics engineer who moved into performance marketing, then into teaching it."
      />
      <StoryChapters />
      <JourneyTimeline />
      <p className="section-wrap" style={{ textAlign: "center" }}>
        <a className="pill pill-line" href="/gallery">
          See the photos ›
        </a>
      </p>
      <Credentials />
    </PageShell>
  );
}
