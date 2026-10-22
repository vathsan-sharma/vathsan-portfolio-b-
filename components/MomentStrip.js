import Image from "next/image";
import Link from "next/link";
import { featuredMoments } from "../lib/gallery";

export default function MomentStrip() {
  return (
    <section className="moment-strip" aria-label="Photos from the journey">
      <div className="moment-row">
        {featuredMoments.map((photo) => (
          <figure className="moment" key={photo.src}>
            <Image
              src={photo.src}
              alt={photo.alt}
              width={960}
              height={1200}
              sizes="(max-width: 720px) 50vw, 240px"
            />
          </figure>
        ))}
      </div>
      <p className="moment-link">
        <Link href="/gallery">See all photos ›</Link>
      </p>
    </section>
  );
}
