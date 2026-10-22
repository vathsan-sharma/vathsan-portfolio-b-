import Link from "next/link";
import PageShell from "../../components/PageShell";
import PageHead from "../../components/PageHead";
import JsonLd from "../../components/JsonLd";
import { posts } from "../../lib/posts";
import { pageMetadata } from "../../lib/seo";
import { breadcrumbSchema } from "../../lib/schema";

// Stay out of search until there is something to index.
export const metadata = {
  ...pageMetadata({
    title: "Blog",
    description: "Practical answers on paid media, performance marketing, and growth.",
    path: "/blog",
  }),
  robots: { index: posts.length > 0 },
};

export default function BlogPage() {
  return (
    <PageShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <PageHead
        eyebrow="Blog"
        title="Practical answers."
        lead="Short, specific answers to the questions marketers ask about paid media and growth."
      />
      <section className="prose" aria-label="Posts">
        {posts.length === 0 ? (
          <p className="placeholder">Posts coming soon.</p>
        ) : (
          <ul className="post-list">
            {posts.map((post) => (
              <li key={post.slug}>
                <time dateTime={post.date}>{post.date}</time>
                <h2>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p>{post.description}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </PageShell>
  );
}
