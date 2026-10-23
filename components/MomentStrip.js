import Image from "next/image";
import Link from "next/link";
import { stripSlots } from "../lib/gallery";

// Each slot stacks its photos and cross-fades between them. Slots start at
// different points in the cycle so the strip never changes all at once.
export default function MomentStrip() {
  return (
    <section className="moment-strip" aria-label="Photos from the journey">
      <div className="moment-row">
        {stripSlots.map((photos, slot) => (
          <figure className="moment" key={slot}>
            {photos.map((photo, i) => (
              <Image
                key={photo.src}
                className="photo-fade"
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 720px) 50vw, 240px"
                style={{ animationDelay: `${slot * 1.5 + i * 4}s` }}
              />
            ))}
          </figure>
        ))}
      </div>
      <p className="moment-link">
        <Link href="/gallery">See all photos ›</Link>
      </p>
    </section>
  );
}
