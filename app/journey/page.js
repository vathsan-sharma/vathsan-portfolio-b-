import PageShell from "../../components/PageShell";
import PageHead from "../../components/PageHead";
import JsonLd from "../../components/JsonLd";
import { timeline, projects } from "../../lib/journey";
import { pageMetadata } from "../../lib/seo";
import { breadcrumbSchema } from "../../lib/schema";

export const metadata = pageMetadata({
  title: "Journey",
  description:
    "The engineering-to-marketing journey of Vathsan Sharma: robotics, a crop disease drone, a mechatronics degree, paid media, and teaching digital marketing.",
  path: "/journey",
});

export default function JourneyPage() {
  return (
    <PageShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Journey", path: "/journey" },
        ])}
      />
      <PageHead
        eyebrow="Journey"
        title="From machines to money."
        lead="The engineering projects, the move into performance marketing, and the teaching that followed."
      />

      <section className="journey" aria-label="Timeline">
        <h2 className="journey-heading">Timeline</h2>
        <ol className="journey-steps">
          {timeline.map((step) => (
            <li key={step.title}>
              <span className="journey-when">{step.when}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="journey" aria-label="Engineering projects">
        <h2 className="journey-heading">Engineering projects</h2>
        <ul className="project-list">
          {projects.map((project) => (
            <li key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.body}</p>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
