export default function Nav() {
  return (
    <header className="nav">
      <a href="/" className="nav-name">
        Vathsan
      </a>
      <ul>
        <li>
          <a href="/about">Story</a>
        </li>
        <li>
          <a href="/work">Work</a>
        </li>
        <li>
          <a href="/teaching">Teaching</a>
        </li>
        <li>
          <a href="/research">Research</a>
        </li>
        <li>
          <a href="/faq">FAQ</a>
        </li>
      </ul>
      <a href="mailto:vathsansharma@gmail.com?subject=Book%20a%20call" className="nav-cta">
        Book a call
      </a>
    </header>
  );
}
