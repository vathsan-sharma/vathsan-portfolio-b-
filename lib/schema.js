import { SITE_URL, PERSON } from "./site";

// Schema.org structured data. Each builder returns a plain object that
// components/JsonLd.js serialises into a <script type="application/ld+json">.

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: PERSON.name,
    description: "Portfolio of Vathsan Sharma: performance marketing case studies, teaching, and FAQ.",
    publisher: { "@id": `${SITE_URL}/#person` },
    inLanguage: "en",
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: PERSON.name,
    jobTitle: PERSON.jobTitle,
    description:
      "Research and performance marketing for AI, ML and technical products. 9+ years in paid media, $1.5M+ managed ad spend, with a background in computer science.",
    email: PERSON.email,
    url: SITE_URL,
    image: `${SITE_URL}/images/portrait-cutout.webp`,
    sameAs: [PERSON.linkedin],
    knowsAbout: PERSON.knowsAbout,
    alumniOf: { "@type": "CollegeOrUniversity", name: PERSON.alumniOf },
    address: { "@type": "PostalAddress", addressCountry: "LK" },
  };
}

export function paperSchema(paper) {
  return {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: paper.title,
    name: paper.title,
    isPartOf: { "@type": "CreativeWork", name: paper.venue },
    author: [
      { "@id": `${SITE_URL}/#person` },
      ...(paper.coauthors || []).map((name) => ({ "@type": "Person", name })),
    ],
    description: paper.summary,
    url: `${SITE_URL}/research/${paper.slug}`,
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export function articleSchema(post) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    url: `${SITE_URL}/blog/${post.slug}`,
    author: { "@id": `${SITE_URL}/#person` },
  };
}
