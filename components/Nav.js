export default function Nav() {
  return (
    <header className="nav">
      <strong className="nav-name">Vathsan</strong>
      <ul>
        <li>
          <a href="#story">Story</a>
        </li>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#teaching">Teaching</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <a href="#contact" className="nav-cta">
        Book a call
      </a>
    </header>
  );
}
