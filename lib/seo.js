import { SITE_NAME } from "./site";

// The share image from app/opengraph-image.js. Every page sets it explicitly,
// because a page's openGraph object replaces the root one rather than merging.
const SHARE_IMAGE = "/opengraph-image";

// Metadata for one page. `path` is relative to the site root and resolves
// against metadataBase in app/layout.js.
export function pageMetadata({ title, description, path = "/" }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      type: "website",
      images: [SHARE_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SHARE_IMAGE],
    },
  };
}
