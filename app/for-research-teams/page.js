import PageShell from "../../components/PageShell";
import PageHead from "../../components/PageHead";
import JsonLd from "../../components/JsonLd";
import { pageMetadata } from "../../lib/seo";
import { breadcrumbSchema } from "../../lib/schema";

export const metadata = pageMetadata({
  title: "For research and technical teams",
  description:
    "How Vathsan Sharma's research papers, B2B paid media and technical background match the needs of research and AI product teams.",
  path: "/for-research-teams",
});

// Each row is one requirement from a research-marketing role, with the evidence on this site.
const fit = [
  {
    need: "Experience marketing technical research, AI products, developer tools, benchmarks or evaluations",
    evidence:
      "Research papers on benchmark publication readiness and benchmark adoption, covering how a technical release is packaged, launched and measured. Paid media for B2B SaaS and cloud products.",
  },
  {
    need: "Go-to-market strategy for technical audiences",
    evidence:
      "B2B lead generation across LinkedIn, Google and Meta, including a B2B SaaS growth engine built on LinkedIn ads, content funnels and automated lead nurture.",
  },
  {
    need: "Translating technical work into clear, credible, differentiated positioning",
    evidence:
      "Engineering projects explained in plain language, case studies written as problem, move and result, and papers that separate what a claim says from what the evidence shows.",
  },
  {
    need: "Understanding of the AI and ML research ecosystem, including benchmarks, evaluations and communities",
    evidence:
      "Familiar with AI, machine learning and computer science. Papers cover LLM-as-judge evaluation for marketing content, expert data quality for AI training data, and AI-mediated discovery in B2B buying.",
  },
  {
    need: "Exceptional written communication for technical and broad audiences",
    evidence:
      "Seven research papers drafted in full, a blog with FAQs, and corporate training as an internationally certified trainer, plus panel and lecture work.",
  },
  {
    need: "Analytical judgement on whether claims and research are ready for external publication",
    evidence:
      "A five-check publication-readiness framework (claim scope, construct validity, statistical reporting, contamination and reproducibility), a claims ladder in the video-ad research, and sample-size calculations.",
  },
  {
    need: "Relationships with researchers, technical leaders, developers and AI communities",
    evidence:
      "Panelist at the 1st International Research Conference on Digital Marketing (ReDM 2026), visiting lecturer at ACIDM and TrendsEd, and steering committee member of the Digital Marketing Association of Sri Lanka since 2024.",
  },
  {
    need: "High ownership, from ambiguous initiative through to execution",
    evidence:
      "Independent consultant since April 2026, running paid media and growth work directly. Built and launched this site, and wrote the research papers in the same hands-on way.",
  },
  {
    need: "Cross-functional work with researchers and technical teams, with a high bar for accuracy",
    evidence:
      "Led paid media for 12+ client accounts with a team of five, and set up GA4 and Google Tag Manager tracking before spend went live. Builds websites and marketing tools with Claude and Claude Code.",
  },
];

const currentSkills = [
  "Paid media on Google Ads (Search, Display, Performance Max, Shopping), Meta, LinkedIn and TikTok",
  "Analytics and measurement: GA4, Google Tag Manager, Looker Studio, Power BI and attribution basics",
  "Conversion rate optimisation: landing page and funnel testing, audience segmentation and creative testing",
  "SEO and competitive research with Ahrefs and SpyFu",
  "CRM and automation: HubSpot campaigns, tracking and email",
  "Consumer and B2B experience across SaaS, ecommerce, food and hospitality",
];

export default function ForResearchTeamsPage() {
  return (
    <PageShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "For research and technical teams", path: "/for-research-teams" },
        ])}
      />
      <PageHead
        eyebrow="For research and technical teams"
        title="Marketing for technical research, with the evidence to back it."
        lead="Familiar with AI, machine learning and computer science, with 9+ years of marketing and paid media behind it."
      />

      <section className="band" aria-label="Fit with the role">
        <p className="body" style={{ maxWidth: "68ch" }}>
          The requirements below are the ones a research-marketing lead needs to meet. Each row points to
          work that is on this site.
        </p>
        <div className="paper-table-wrap">
          <table className="paper-table">
            <thead>
              <tr>
                <th>What the role needs</th>
                <th>Evidence</th>
              </tr>
            </thead>
            <tbody>
              {fit.map((row) => (
                <tr key={row.need}>
                  <td>{row.need}</td>
                  <td>{row.evidence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="band" aria-label="Current skills">
        <p className="eyebrow">Current skills</p>
        <h2 className="chapter-title">What the work is built on.</h2>
        <ul className="paper-list" style={{ marginTop: 16 }}>
          {currentSkills.map((skill) => (
            <li key={skill} className="skill-row">
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
