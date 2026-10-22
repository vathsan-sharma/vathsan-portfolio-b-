import { SITE_URL } from "../lib/site";
import { cases } from "../lib/cases";
import { posts } from "../lib/posts";

export default function sitemap() {
  const staticPaths = ["/", "/about", "/journey", "/gallery", "/work", "/teaching", "/faq"];
  if (posts.length > 0) staticPaths.push("/blog");

  return [
    ...staticPaths.map((path) => ({ url: `${SITE_URL}${path}`, lastModified: new Date() })),
    ...cases.map((c) => ({ url: `${SITE_URL}/work/${c.slug}`, lastModified: new Date() })),
    ...posts.map((post) => ({ url: `${SITE_URL}/blog/${post.slug}`, lastModified: post.date })),
  ];
}
