const cases = [
  { name: "B2B SaaS", text: "LinkedIn ads, content funnels, and automated lead nurture." },
  { name: "EdTech", text: "Student enrolments through performance marketing and community." },
  { name: "Cloud POS", text: "B2B lead generation for retail and hospitality." },
];

export default function Work() {
  return (
    <section id="work" className="band" aria-label="Selected work">
      <p className="eyebrow">Selected work</p>
      <h2 className="chapter-title">Stories, not screenshots.</h2>
      <div className="cases">
        {cases.map((c) => (
          <article className="case" key={c.name}>
            <h3>{c.name}</h3>
            <p>{c.text}</p>
          </article>
        ))}
      </div>
      <p className="fine">
        <span className="placeholder">
          Also: courier logistics, premium restaurant, student visa consultancy, ZipDJ. [Confirm client
          permission]
        </span>
      </p>
    </section>
  );
}
