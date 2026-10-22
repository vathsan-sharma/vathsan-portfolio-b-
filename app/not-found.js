import PageShell from "../components/PageShell";
import PageHead from "../components/PageHead";

export const metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <PageShell showContact={false}>
      <PageHead
        eyebrow="404"
        title="Page not found."
        lead="The link may be out of date. Start again from the homepage or the work page."
      />
      <p className="page-links">
        <a className="pill pill-dark" href="/">
          Home
        </a>
        <a className="pill pill-line" href="/work">
          Work ›
        </a>
      </p>
    </PageShell>
  );
}
