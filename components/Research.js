import Link from "next/link";
import { papers } from "../lib/papers";

// Homepage teaser. Renders nothing until there are papers to show.
export default function Research() {
  if (papers.length === 0) return null;
  const latest = papers.slice(0, 3);
  return (
    <section id="research" className="band" aria-label="Research">
      <p className="eyebrow">Research</p>
      <h2 className="chapter-title">Work worth reading.</h2>
      <div className="cases">
        {latest.map((paper) => (
          <article className="case" key={paper.slug}>
            <p className="cap">
              {paper.venue} · {paper.year}
            </p>
            <h3>
              <Link href={`/research#${paper.slug}`}>{paper.title}</Link>
            </h3>
          </article>
        ))}
      </div>
      <p className="fine">
        <Link href="/research">All research</Link>
      </p>
    </section>
  );
}
