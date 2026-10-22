import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Proof from "../components/Proof";
import StoryChapters from "../components/StoryChapters";
import Work from "../components/Work";
import Speaking from "../components/Speaking";
import MomentStrip from "../components/MomentStrip";
import Credentials from "../components/Credentials";
import Contact from "../components/Contact";
import JsonLd from "../components/JsonLd";
import { personSchema, websiteSchema } from "../lib/schema";

export const metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

export default function Home() {
  return (
    <main className="wrap" id="main">
      <JsonLd data={personSchema()} />
      <JsonLd data={websiteSchema()} />
      <a className="skip-link" href="#story">
        Skip to content
      </a>
      <Nav />
      <Hero />
      <Proof />
      <StoryChapters />
      <Work />
      <Speaking />
      <MomentStrip />
      <Credentials />
      <Contact />
    </main>
  );
}
