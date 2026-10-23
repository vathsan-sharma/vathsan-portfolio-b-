import { notFound } from "next/navigation";
import PageShell from "../../../components/PageShell";
import PageHead from "../../../components/PageHead";
import JsonLd from "../../../components/JsonLd";
import { posts, getPost } from "../../../lib/posts";
import { pageMetadata } from "../../../lib/seo";
import { articleSchema, breadcrumbSchema, faqSchema } from "../../../lib/schema";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

// Renders one body block: a paragraph, a subheading or a list.
function renderBlock(block, index) {
  if (typeof block === "string") return <p key={index}>{block}</p>;
  if (block.h) return <h2 key={index}>{block.h}</h2>;
  if (block.list) {
    return (
      <ul key={index}>
        {block.list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  return null;
}

export default function PostPage({ params }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <PageShell>
      <JsonLd data={articleSchema(post)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      {post.faq && <JsonLd data={faqSchema(post.faq)} />}
      <PageHead eyebrow={post.date} title={post.title} lead={post.description} />
      <article className="prose post-body">{post.body.map(renderBlock)}</article>
      {post.faq && (
        <section className="prose faq" aria-label="Frequently asked questions">
          <h2 className="journey-heading">Frequently asked</h2>
          {post.faq.map((item) => (
            <div className="faq-item" key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </section>
      )}
    </PageShell>
  );
}
