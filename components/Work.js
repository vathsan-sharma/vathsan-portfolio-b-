import Link from "next/link";
import { cases } from "../lib/cases";
import ToolLogos from "./ToolLogos";

export default function Work() {
  return (
    <section id="work" className="band" aria-label="Selected work">
      <p className="eyebrow">Selected work</p>
      <h2 className="chapter-title">Stories, not screenshots.</h2>
      <div className="cases">
        {cases.map((c) => (
          <article className="case" key={c.slug}>
            <h3>
              <Link href={`/work/${c.slug}`}>{c.name}</Link>
            </h3>
            <p>{c.summary}</p>
          </article>
        ))}
      </div>
      <ToolLogos />
    </section>
  );
}
