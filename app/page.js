import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Proof from "../components/Proof";
import StoryChapters from "../components/StoryChapters";
import Work from "../components/Work";
import Teaching from "../components/Teaching";
import Credentials from "../components/Credentials";
import Contact from "../components/Contact";
import JsonLd from "../components/JsonLd";
import { personSchema } from "../lib/schema";

export const metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main className="wrap" id="main">
      <JsonLd data={personSchema()} />
      <a className="skip-link" href="#story">
        Skip to content
      </a>
      <Nav />
      <Hero />
      <Proof />
      <StoryChapters />
      <Work />
      <Teaching />
      <Credentials />
      <Contact />
    </main>
  );
}
