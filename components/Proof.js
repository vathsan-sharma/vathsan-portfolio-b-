const figures = [
  { num: "9+", cap: "years in paid media" },
  { num: "$1.5M+", cap: "ad spend managed" },
  { num: "200+", cap: "clients served" },
];

export default function Proof() {
  return (
    <section className="proof" aria-label="Key figures">
      {figures.map((f) => (
        <div key={f.cap}>
          <p className="num">{f.num}</p>
          <p className="cap">{f.cap}</p>
        </div>
      ))}
    </section>
  );
}
