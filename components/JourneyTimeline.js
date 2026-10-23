import { timeline, projects } from "../lib/journey";

// The full journey as a vertical timeline, followed by the engineering projects.
export default function JourneyTimeline() {
  return (
    <section className="about-journey" aria-label="Journey">
      <p className="eyebrow">The journey</p>
      <ol className="timeline-v">
        {timeline.map((step) => (
          <li className="tl-item" key={step.title}>
            <span className="tl-dot" aria-hidden="true" />
            <div className="tl-card">
              <span className="tl-when">{step.when}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <h2 className="journey-heading">Engineering projects</h2>
      <ul className="project-grid">
        {projects.map((project) => (
          <li className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
