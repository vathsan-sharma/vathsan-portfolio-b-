// Case studies. Each one gets its own page at /work/[slug].
// `summary` is the short line from the homepage.
// `challenge`, `approach` and `results` stay null until confirmed. The case
// page only shows a section once its text is filled in. Results should be measurable, e.g. "116% lift in
// conversion value over six months".
export const cases = [
  {
    slug: "b2b-saas",
    name: "B2B SaaS",
    summary: "LinkedIn ads, content funnels, and automated lead nurture.",
    challenge: null,
    approach: null,
    results: null,
  },
  {
    slug: "edtech",
    name: "EdTech",
    summary: "Student enrolments through performance marketing and community.",
    challenge: null,
    approach: null,
    results: null,
  },
  {
    slug: "cloud-pos",
    name: "Cloud POS",
    summary: "B2B lead generation for retail and hospitality.",
    challenge: null,
    approach: null,
    results: null,
  },
];

export function getCase(slug) {
  return cases.find((c) => c.slug === slug);
}
