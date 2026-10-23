// One slow, looping line of logos. The list is rendered twice so the loop
// joins seamlessly; the second copy is hidden from screen readers.
export default function LogoMarquee({ label, items, className }) {
  return (
    <div className={`logo-block ${className}`}>
      <p className="eyebrow">{label}</p>
      <div className="marquee">
        <div className="marquee-track">
          <ul className="marquee-set">
            {items.map((item) => (
              <li key={item.name}>
                <img src={item.src} alt={`${item.name} logo`} loading="lazy" />
              </li>
            ))}
          </ul>
          <ul className="marquee-set" aria-hidden="true">
            {items.map((item) => (
              <li key={`${item.name}-copy`}>
                <img src={item.src} alt="" loading="lazy" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
