import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">Research and performance marketing for AI, ML and technical work</p>
        <h1 id="hero-title" className="hero-title">
          I once taught <strong>robots</strong> to follow a line.
        </h1>
        <p className="lead">
          Now I build campaigns that follow the <strong>customer.</strong>
        </p>
        <div className="ctas">
          <a className="pill pill-dark" href="mailto:vathsansharma@gmail.com?subject=Book%20a%20call">
            Book a call
          </a>
          <a className="pill pill-line" href="/about">
            Read the story ›
          </a>
        </div>
      </div>
      <Image
        className="hero-photo"
        src="/images/portrait-cutout.webp"
        alt="Vathsan Sharma, arms folded, smiling"
        width={1080}
        height={1080}
        sizes="(max-width: 719px) 82vw, 520px"
        priority
      />
    </section>
  );
}
