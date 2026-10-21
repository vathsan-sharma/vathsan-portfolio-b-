import Nav from "./Nav";
import Contact from "./Contact";

// Shared frame for inner pages: skip link, nav, page content, closing contact band.
export default function PageShell({ children, showContact = true }) {
  return (
    <main className="wrap" id="main">
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <Nav />
      <div id="content">{children}</div>
      {showContact && <Contact />}
    </main>
  );
}
