import { notFound } from "next/navigation";
import PageShell from "../../../components/PageShell";
import PageHead from "../../../components/PageHead";
import JsonLd from "../../../components/JsonLd";
import { posts, getPost } from "../../../lib/posts";
import { pageMetadata } from "../../../lib/seo";
import { articleSchema, breadcrumbSchema } from "../../../lib/schema";

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

export default function PostPage({ params }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <PageShell showContact>
      <JsonLd data={articleSchema(post)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <PageHead eyebrow={post.date} title={post.title} lead={post.description} />
      <article className="prose">
        {post.body.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </article>
    </PageShell>
  );
}
