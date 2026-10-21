import { SITE_NAME } from "./site";

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
    },
  };
}
