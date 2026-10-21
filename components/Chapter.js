/**
 * One story chapter. `tone` is "black" or "white" for the band colour.
 * Pass `slot` for a photo or diagram placeholder, or `tiles` for stat tiles.
 */
export default function Chapter({ id, tone = "white", label, title, body, slot, tiles }) {
  return (
    <section id={id} className={`band ${tone}`} aria-label={label}>
      <p className="eyebrow">{label}</p>
      <h2 className="chapter-title">{title}</h2>
      <p className="body">{body}</p>
      {tiles && (
        <div className="tiles">
          {tiles.map((t) => (
            <div className="tile" key={t.cap}>
              <p className="num">{t.num}</p>
              <p className="cap">{t.cap}</p>
            </div>
          ))}
        </div>
      )}
      {slot && <div className="slot">{slot}</div>}
    </section>
  );
}
