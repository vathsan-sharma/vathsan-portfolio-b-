// Research papers. Each paper gets its own page at /research/<slug>, and the
// /research list, the homepage teaser, the sitemap and the structured data all
// read from this list. Dates are deliberately not shown on the site.
//
// {
//   slug: "url-friendly-slug",
//   title: "Full paper title",
//   venue: "Where it sits, e.g. Independent research",
//   summary: "One or two sentences shown on the list.",
//   abstract: "Full abstract, shown on the paper's page.",
//   status: "Optional note, e.g. a working paper's status.",
//   pdf: "/papers/file-name.pdf",       // optional: a PDF in public/papers/
//   url: "https://doi.org/...",         // optional: a publisher or DOI link
//   coauthors: ["Name"],                // optional
// }
//
// Leave the list empty until the papers are ready to publish.
// The groups on the /research list, in the order they appear.
export const categories = [
  {
    id: "ai-evaluation",
    name: "AI evaluation and data",
    description: "How benchmarks, expert data and automated judges should be measured and trusted.",
  },
  {
    id: "marketing",
    name: "Marketing and measurement",
    description: "Attention, buyer discovery and how marketing results are measured.",
  },
  {
    id: "engineering",
    name: "Engineering prototypes",
    description: "Hardware and sensing prototypes built for real-world problems.",
  },
];

export function getPaper(slug) {
  return papers.find((paper) => paper.slug === slug);
}

export const papers = [
  {
    slug: "benchmark-publication-readiness",
    category: "ai-evaluation",
    title: "Publication Readiness for AI Benchmarks: A Claims-Evidence Framework",
    seoTitle: "Publication readiness for AI benchmarks",
    venue: "Independent research",
    summary:
      "A five-check framework that links every headline benchmark claim to the evidence needed to defend it.",
    abstract:
      "Benchmarks shape how the AI field measures progress, yet many are released with claims that outrun their evidence. A leaderboard score without a confidence interval, a test set with unexamined overlap with training data, or a methodology section that omits the grading rubric can each mislead researchers, buyers and the press. This paper proposes a publication-readiness framework that links every headline claim to the evidence needed to defend it. The framework has five checks: claim scope, construct validity, statistical reporting, contamination and reproducibility. We describe how each check works, what failure looks like, and how a non-specialist reviewer can run the checks alongside the research team. We illustrate the framework with anonymised examples from a multi-stage review process in a performance-marketing environment, where the same discipline of claim-to-evidence tracing was applied to client reporting. The paper is written for research marketers, benchmark maintainers and technical leads who must decide whether a result is ready to launch.",
  },
  {
    slug: "expert-data-quality",
    category: "ai-evaluation",
    title: "Expert Data Quality in Specialised Domains: Measuring Agreement, Calibration and Drift",
    seoTitle: "Expert data quality in specialised domains",
    venue: "Independent research",
    summary:
      "A quality framework for expert-labelled data built on three measurements: agreement, calibration and drift.",
    abstract:
      "Frontier models increasingly depend on expert-labelled data in domains such as law, medicine, finance and software engineering. In these domains, a label is only as good as the expert who wrote it, and expert judgement is noisy, expensive and unevenly distributed. This paper sets out a quality framework for expert-generated data built on three measurements: agreement between independent experts, calibration of individual experts against gold items, and drift in quality over time. We explain how each measurement is computed, which statistic suits which task type, and how the results should drive decisions about expert selection, retraining and the removal of data. We also describe how to communicate data quality to research audiences without overstating what agreement statistics can show. The paper is written for research leads, data operations teams and marketers who must explain why a dataset can be trusted.",
  },
  {
    slug: "benchmark-adoption-distribution",
    category: "ai-evaluation",
    title: "Getting Benchmarks Adopted: A Distribution Framework for Technical AI Research",
    seoTitle: "Getting benchmarks adopted",
    venue: "Independent research",
    summary:
      "A distribution framework that treats adoption of a research release as five observable, designable steps.",
    abstract:
      "A rigorous benchmark that nobody uses has limited value. Research impact depends on whether researchers, developers and AI labs can find a release, understand what it measures, reproduce its results and build on it. This paper proposes a distribution framework for technical AI research, covering audience mapping, packaging, launch sequencing and impact measurement. The framework treats adoption as a set of observable steps, each of which can be designed and measured: discovery, comprehension, trial, citation and reuse. We describe the artefacts that support each step, the channels most relevant to each audience, and the metrics that distinguish genuine uptake from attention. We also set out a feedback loop that returns ecosystem signals to the research team. The paper is written for research marketers, benchmark maintainers and technical leads who are responsible for what happens after publication.",
  },
  {
    slug: "hold-tested-video-ads",
    category: "marketing",
    title: "Hold-Tested Video Ads: Evidence on Attention, Claims Law and a Measurable Positioning for Short-Form Product Films",
    seoTitle: "Hold-tested video ads: attention and claims",
    venue: "Independent research",
    summary:
      "Argues that a short-form film can honestly earn the next few seconds of attention, and sets out how to test it.",
    abstract:
      "Advertisers increasingly want video that viewers keep watching, and some studios have begun to sell that promise as “unskippable” ads. This paper examines whether such a promise can be made honestly. It makes three arguments. First, skippability is a property of the media placement, not of the creative, so a claim that people will not skip describes a platform setting rather than a creative outcome. Second, the attention evidence supports a narrower and more defensible idea: short, brand-early, product-forward films that earn the next few seconds of attention, measured through a hold rate the client can verify. Third, a small studio can test this idea with its own ad accounts before making any public performance claim. The paper reviews placement formats, the available attention research, the legal and platform constraints on claims, and the gap in the market. It proposes a measurement protocol with a sample-size calculation and a claim ladder that separates what can be said now from what must wait for data. Where evidence is second-hand or vendor-supplied, the paper says so. The paper is intended as a decision document for a studio owner and as an example of evidence-graded research for a marketing audience.",
  },
  {
    slug: "hold-tested-video-ads-working-paper",
    category: "marketing",
    title: "Hold-Tested Video Ads: An Ongoing Study of Attention, Claims and Measurable Positioning for Short-Form Product Films",
    seoTitle: "Hold-tested video ads: an ongoing study",
    venue: "MBA research, working paper",
    summary:
      "An ongoing controlled study of whether a brand-early opening holds attention better than a problem-led one.",
    status:
      "Working paper for an ongoing study. The design is set out, and the empirical phase has not started, so no results are reported yet.",
    abstract:
      "Short-form video advertisers increasingly want films that viewers keep watching, and some studios now market this as “unskippable” advertising. This study asks whether the claim can be supported and, if not, what narrower position the evidence allows. The study proposes three linked questions. First, does an opening that shows the brand and product interface in the first two seconds produce a higher three-second play rate than a problem-led opening, on non-skippable placements? Second, does the same effect hold for a combined hold measure in a B2B-oriented audience? Third, which claims about attention can a small studio make on its own evidence, and which must wait? The design is a within-account, controlled comparison of the first five seconds of otherwise identical films, run on a studio’s own accounts. The analysis will use two-proportion tests and bootstrapped confidence intervals, with the primary metric fixed in advance. The expected contribution is a tested, evidence-graded framework for claims about attention in short-form video, and a measured answer to a question that currently rests on vendor claims.",
  },
  {
    slug: "llm-as-judge-marketing-content",
    category: "ai-evaluation",
    title: "LLM-as-Judge for Marketing Content: Reliability, Bias and a Validation Protocol",
    seoTitle: "LLM-as-judge for marketing content",
    venue: "Independent research",
    summary:
      "A four-stage protocol for checking whether an AI model's score of marketing copy can be trusted before a human reviews it.",
    abstract:
      "Marketing teams increasingly use large language models to score ad copy, landing page text and email drafts before human review. The appeal is speed and cost. The risk is that a model’s score looks objective while reflecting position effects, length preferences, self-preference for its own style, or a rubric that does not match what the business values. This paper examines the reliability of language models as judges of marketing content and proposes a validation protocol that a marketing team can run before trusting any automated score. The protocol has four stages: rubric definition tied to a business outcome, human gold-standard labelling, agreement measurement between the model and human reviewers, and bias testing across position, length and source attribution. The paper explains the statistics appropriate to each stage, the failure modes that most often appear in practice, and the decisions a team should make based on the results. Empirical results from a live dataset are not yet available; the paper specifies the protocol and the hypotheses it tests, and marks where the team’s own data is required.",
  },
  {
    slug: "ai-mediated-discovery-b2b",
    category: "marketing",
    title: "AI-Mediated Discovery in B2B Buying: Implications for Content Strategy and Measurement",
    seoTitle: "AI-mediated discovery in B2B buying",
    venue: "Independent research",
    summary:
      "Argues that AI answer engines change B2B buying, and proposes how to measure visibility when clicks no longer tell the story.",
    abstract:
      "Business buyers increasingly begin their research with AI answer engines rather than search results pages or vendor websites. When a buyer asks a model to compare suppliers, the model synthesises sources, selects a few brands to name, and often answers without a click. This paper examines what that shift means for B2B content strategy and for the measurement systems marketers rely on. It argues that three things change: the unit of competition moves from ranking to inclusion, the value of content shifts toward being cited and summarised accurately, and attribution models built around clicks lose visibility into a growing share of the buyer’s research. The paper reviews the emerging literature on generative engine optimisation, sets out a framework for auditing AI-mediated visibility, and proposes a measurement approach that combines citation sampling, branded search trends, direct traffic and self-reported attribution. The empirical component, a sampled audit of AI answers for a defined set of buying queries, is specified but not yet run. Claims about the size of the shift are presented as hypotheses, not findings.",
  },
  {
    slug: "eye-blink-communication-device",
    category: "engineering",
    title: "An Infrared Eye-Blink Communication Device for Partially Paralysed Users: Design, Decoding Scheme and Preliminary Evaluation",
    seoTitle: "Infrared eye-blink communication device",
    venue: "Independent research",
    summary:
      "A low-cost infrared device that turns blink patterns into messages, so a user with limited movement can make a request at any time.",
    abstract:
      "Partially paralysed people often depend on caregivers to request basic needs, and many needs arise between scheduled care times. Scheduled routines such as meals and medication cover predictable needs, but they do not support unscheduled requests, such as a drink at 9 a.m. This paper describes an infrared eye-blink communication device that maps blink patterns to pre-defined messages, so that a user with limited voluntary movement can signal a request at any time. The device uses an infrared emitter and receiver aimed at the eye, a microcontroller that counts and times blinks, and a fixed mapping from blink sequences to messages. The paper presents the sensing principle, the decoding scheme, and a preliminary evaluation with [TO FILL: number] healthy volunteers. The evaluation measures per-code detection accuracy, false triggers, and decoding latency. The results are preliminary. They establish that the signalling principle works under controlled conditions and identify the work needed before any clinical use.",
  },
  {
    slug: "wildlife-early-warning-prototype",
    category: "engineering",
    title: "An Infrared and Seismic Early-Warning Prototype for Wildlife Crossings on Sri Lankan Highways: Design and Controlled Evaluation",
    seoTitle: "Wildlife early-warning prototype for highways",
    venue: "Independent research",
    summary:
      "A two-sensor prototype that detects large animals near Sri Lankan highways and alerts drivers, tested in a controlled setup.",
    abstract:
      "Wild animals crossing highways are a recurring hazard in Sri Lanka, and collisions with elephants and deer endanger drivers, passengers and the animals themselves. Conventional mitigation, such as fencing and signage, is costly to maintain across long road lengths and does not warn drivers in real time. This paper describes a low-cost early-warning prototype that combines two sensing modalities: an infrared beam-break sensor array to detect crossing events, and a geophone to detect the ground vibration produced by large animals moving nearby. An Arduino handles sensor sampling and thresholding, and a Raspberry Pi performs event fusion and alert generation. The paper presents the design, the detection logic that combines the two modalities, and a controlled evaluation using staged crossings and recorded vibration signatures. The evaluation measures detection rate, false-alarm rate and alert latency. The results are preliminary and establish feasibility under controlled conditions. They do not establish performance on a live road, which requires field trials.",
  },
];
