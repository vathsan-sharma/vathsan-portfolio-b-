import { SITE_URL } from "../../lib/site";
import { cases } from "../../lib/cases";
import { papers } from "../../lib/papers";

// llms.txt: a plain-text summary for AI assistants and answer engines.
export function GET() {
  const caseLines = cases.map((c) => `- [${c.name}](${SITE_URL}/work/${c.slug}): ${c.summary}`);
  const paperLines = papers.map((p) => `- [${p.title}](${SITE_URL}/research/${p.slug}): ${p.summary}`);

  const body = [
    "# Vathsan Sharma",
    "",
    "> Research and performance marketing for AI, ML and technical products. 9+ years in paid media, $1.5M+ managed ad spend, with a background in computer science. Based in Sri Lanka, working remotely.",
    "",
    "## Pages",
    `- [Home](${SITE_URL}/): Overview, key figures, and contact.`,
    `- [About](${SITE_URL}/about): Engineering background, the move into paid media, and credentials.`,
    `- [Journey](${SITE_URL}/journey): Engineering projects, the move into paid media, and teaching, in order.`,
    `- [Gallery](${SITE_URL}/gallery): Photos from speaking, panels, training and events.`,
    `- [Work](${SITE_URL}/work): Selected performance marketing case studies.`,
    `- [Teaching](${SITE_URL}/teaching): Certified training, conference panels, and visiting lectures.`,
    `- [FAQ](${SITE_URL}/faq): Short answers about experience, training, and contact.`,
    `- [Research](${SITE_URL}/research): Research papers on AI evaluation, marketing measurement, and engineering prototypes.`,
    `- [For research and technical teams](${SITE_URL}/for-research-teams): How the background matches the needs of research and AI product teams.`,
    "",
    "## Case studies",
    ...caseLines,
    "",
    "## Research papers",
    ...paperLines,
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
