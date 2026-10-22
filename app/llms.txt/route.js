import { SITE_URL } from "../../lib/site";
import { cases } from "../../lib/cases";

// llms.txt: a plain-text summary for AI assistants and answer engines.
export function GET() {
  const caseLines = cases.map((c) => `- [${c.name}](${SITE_URL}/work/${c.slug}): ${c.summary}`);

  const body = [
    "# Vathsan Sharma",
    "",
    "> Senior full-stack digital marketer and demand generation specialist with 9+ years in paid media, more than $1.5M in managed ad spend, and a mechatronics engineering background. Based in Sri Lanka, working remotely.",
    "",
    "## Pages",
    `- [Home](${SITE_URL}/): Overview, key figures, and contact.`,
    `- [About](${SITE_URL}/about): Engineering background, the move into paid media, and credentials.`,
    `- [Journey](${SITE_URL}/journey): Engineering projects, the move into paid media, and teaching, in order.`,
    `- [Gallery](${SITE_URL}/gallery): Photos from speaking, panels, training and events.`,
    `- [Work](${SITE_URL}/work): Selected performance marketing case studies.`,
    `- [Teaching](${SITE_URL}/teaching): Certified training, conference panels, and visiting lectures.`,
    `- [FAQ](${SITE_URL}/faq): Short answers about experience, training, and contact.`,
    "",
    "## Case studies",
    ...caseLines,
    "",
    "## Contact",
    "- Email: vathsansharma@gmail.com",
    "- LinkedIn: https://linkedin.com/in/vathsan-sharma",
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
