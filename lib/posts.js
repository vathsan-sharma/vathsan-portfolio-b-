// Blog posts. Add an entry to publish one; the index, post page, sitemap and
// Article structured data all read from this list.
//
// {
//   slug: "url-friendly-slug",
//   title: "Question-style title that matches how people search",
//   description: "One-sentence answer shown in search results.",
//   date: "2026-01-15",          // ISO date
//   body: ["Paragraph one.", "Paragraph two."],
// }
export const posts = [];

export function getPost(slug) {
  return posts.find((post) => post.slug === slug);
}
