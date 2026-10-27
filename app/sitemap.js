import { SITE_URL } from "../lib/site";
import { cases } from "../lib/cases";
import { posts } from "../lib/posts";
import { papers } from "../lib/papers";

export default function sitemap() {
  const staticPaths = ["/", "/about", "/journey", "/gallery", "/work", "/teaching", "/faq", "/for-research-teams"];
  if (posts.length > 0) staticPaths.push("/blog");
  if (papers.length > 0) staticPaths.push("/research");

  return [
    // The homepage canonical has no trailing slash, so the sitemap must match it exactly.
    ...staticPaths.map((path) => ({ url: path === "/" ? SITE_URL : `${SITE_URL}${path}`, lastModified: new Date() })),
    ...cases.map((c) => ({ url: `${SITE_URL}/work/${c.slug}`, lastModified: new Date() })),
    ...posts.map((post) => ({ url: `${SITE_URL}/blog/${post.slug}`, lastModified: post.date })),
    ...papers.map((paper) => ({ url: `${SITE_URL}/research/${paper.slug}`, lastModified: new Date() })),
  ];
}
