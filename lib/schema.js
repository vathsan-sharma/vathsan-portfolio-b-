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
      "Performance marketer and growth strategist with 9+ years in paid media, over $1.5M in managed ad spend, and a mechatronics engineering background.",
    email: PERSON.email,
    url: SITE_URL,
    image: `${SITE_URL}/images/portrait-cutout.png`,
    sameAs: [PERSON.linkedin],
    knowsAbout: PERSON.knowsAbout,
    alumniOf: { "@type": "CollegeOrUniversity", name: PERSON.alumniOf },
    address: { "@type": "PostalAddress", addressCountry: "LK" },
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
