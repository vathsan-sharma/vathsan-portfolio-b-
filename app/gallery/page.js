import Image from "next/image";
import PageShell from "../../components/PageShell";
import PageHead from "../../components/PageHead";
import JsonLd from "../../components/JsonLd";
import { moments } from "../../lib/gallery";
import { pageMetadata } from "../../lib/seo";
import { breadcrumbSchema } from "../../lib/schema";

export const metadata = pageMetadata({
  title: "Gallery",
  description:
    "Photos from speaking, panels, training sessions, and events across the engineering and marketing journey.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <PageShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ])}
      />
      <PageHead
        eyebrow="Gallery"
        title="In the room."
        lead="Speaking, panels, training and events from the journey."
      />
      <section className="gallery-grid" aria-label="Photo gallery">
        {moments.map((photo, i) => (
          <figure className="gallery-item" key={photo.src}>
            <Image
              src={photo.src}
              alt={photo.alt}
              width={960}
              height={1200}
              sizes="(max-width: 720px) 50vw, 300px"
              priority={i < 4}
            />
          </figure>
        ))}
      </section>
    </PageShell>
  );
}
