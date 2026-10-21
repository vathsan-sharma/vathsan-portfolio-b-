import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">Performance marketer and growth strategist</p>
        <h1 id="hero-title" className="hero-title">
          I once taught <strong>robots</strong> to follow a line.
        </h1>
        <p className="lead">
          Now I build campaigns that follow the <strong>customer.</strong>
        </p>
        <div className="ctas">
          <a className="pill pill-dark" href="#contact">
            Book a call
          </a>
          <a className="pill pill-line" href="#story">
            Read the story ›
          </a>
        </div>
      </div>
      <Image
        className="hero-photo"
        src="/images/portrait-cutout.png"
        alt="Vathsan Sharma, arms folded, smiling"
        width={1080}
        height={1080}
        priority
      />
    </section>
  );
}
