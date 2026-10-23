// Blog posts. The index, post pages, sitemap, llms.txt and structured data all
// read from this list.
//
// {
//   slug: "url-friendly-slug",
//   title: "Question-style title that matches how people search",
//   description: "Direct answer in one or two sentences, shown in search results.",
//   date: "2026-10-05",                     // ISO date
//   body: [
//     "A paragraph.",                       // plain paragraph
//     { h: "A subheading" },                // section heading
//     { list: ["Item one", "Item two"] },   // bulleted list
//   ],
//   faq: [{ q: "Question?", a: "Answer." }], // optional, marked up for search engines
// }
export const posts = [
  {
    slug: "what-is-demand-generation",
    title: "What is demand generation, and how is it different from lead generation?",
    description:
      "Demand generation builds interest in a problem and a brand over time. Lead generation captures people who are ready to act now. Most growing companies need both, in the right order.",
    date: "2026-10-05",
    body: [
      "Demand generation is the work of making people aware of a problem, helping them understand that they have it, and showing your business as a credible answer. It usually runs over weeks or months, and it reaches people who are not yet looking to buy.",
      { h: "How it differs from lead generation" },
      "Lead generation is the capture step: a form, a booking or a trial sign-up. It works best with people who already know they need something. Demand generation fills the top of that pipeline, so there are more people to capture later.",
      { h: "What a demand generation programme usually includes" },
      {
        list: [
          "Content that answers the questions buyers ask before they speak to sales",
          "Paid and organic reach on the channels where the buyer already spends time",
          "Retargeting and email to keep the brand in mind between visits",
          "Shared reporting between marketing and sales, so the effect on pipeline is visible",
        ],
      },
      { h: "How to tell if it is working" },
      "Look past the lead count. Watch branded search volume, the share of inbound leads that mention a specific problem, and how many deals start from a source you can trace back to a piece of content or a campaign. Those signals move before revenue does.",
      "A practical first step: write down the five questions your best customers asked before buying, then check whether your website answers each one in plain language.",
    ],
    faq: [
      {
        q: "Is demand generation the same as marketing?",
        a: "Demand generation is one part of marketing. It focuses on creating interest and pipeline, while brand, product and retention marketing cover other parts.",
      },
      {
        q: "How long does demand generation take to work?",
        a: "Most programmes need several months before the effect shows clearly in pipeline, because buyers research over a longer period than a single campaign lasts.",
      },
    ],
  },
  {
    slug: "engineering-mindset-for-performance-marketing",
    title: "What does an engineering background bring to performance marketing?",
    description:
      "An engineering mindset helps marketers test one variable at a time, measure outputs, and treat campaigns as systems. Here is how that thinking shows up in everyday ad work.",
    date: "2026-10-09",
    body: [
      "Engineering trains you to ask what is actually happening inside a system, and to check it instead of assuming. Performance marketing rewards the same habit. An ad account is a system of bids, audiences, creative and landing pages, and any one part can fail quietly.",
      { h: "Change one variable at a time" },
      "A line-following robot is tuned by changing one parameter and watching the result. Ad tests work the same way. If you change the headline, the audience and the bid in the same week, you will not know which change moved the cost per lead. Test one thing, let it run long enough to read, then move on.",
      { h: "Build feedback loops before you build features" },
      "Good engineers put sensors in before they add new features. In marketing, that means conversion tracking, consistent UTM tags and a clear definition of a qualified lead. If the measurement is wrong, every decision made from it is wrong too.",
      { h: "Treat the funnel as a system" },
      "A leak in one stage shows up as a problem somewhere else. High clicks with few sign-ups usually point to the landing page, not the ad. Map each stage, give it a metric, and check the weakest link first.",
      "The habit that matters most is writing down what you expect to happen before you test. It keeps you honest when the result disagrees with your instinct.",
    ],
    faq: [
      {
        q: "Do you need an engineering degree to run paid ads well?",
        a: "No. Paid ads reward clear testing, accurate tracking and patience. Engineering habits help, but any marketer can learn the same discipline.",
      },
      {
        q: "What is the most common measurement mistake in paid media?",
        a: "Counting clicks or form views as leads, then optimising for them. Define the conversion that matters to the business and track that.",
      },
    ],
  },
  {
    slug: "how-to-structure-google-ads-for-b2b-saas",
    title: "How should you structure a Google Ads account for a B2B SaaS company?",
    description:
      "Split campaigns by search intent, not by product features. Keep brand and non-brand traffic apart, name everything consistently, and track a qualified conversion so the account learns what good looks like.",
    date: "2026-10-13",
    body: [
      "Many B2B SaaS accounts that struggle are organised around the company's org chart rather than the buyer's search intent. A sensible structure starts from the questions buyers actually type.",
      { h: "Separate brand from non-brand" },
      "Brand campaigns capture people already searching for your company. Non-brand campaigns find people searching for the problem. Keep them apart, so cheap brand clicks do not hide what it really costs to win new users.",
      { h: "Group keywords by intent" },
      {
        list: [
          "Problem terms: people describing a pain they have",
          "Solution terms: people comparing ways to solve it",
          "Competitor terms: people evaluating alternatives, handled with clear and accurate claims",
        ],
      },
      { h: "Pick a conversion that means something" },
      "A demo request or a qualified trial start is usually better than a page view. If your sales team rejects most of the leads, the account is optimising for the wrong thing. Feed back qualified outcomes where you can, so bidding learns from them.",
      { h: "Name everything so you can read it later" },
      "Use one pattern for campaign and ad group names, such as region, intent and product. Six months later, you will be glad you did.",
      "Start small, give each campaign enough data to judge, and only then increase the budget.",
    ],
    faq: [
      {
        q: "Should B2B SaaS use broad match keywords?",
        a: "Broad match can work with strong conversion data and a good list of negative keywords. Without them, it often spends on loosely related searches. Start with phrase and exact match, then widen with care.",
      },
      {
        q: "How many campaigns does a B2B SaaS account need?",
        a: "As many as there are distinct intents and audiences that need different messages. More campaigns are not better on their own; each one needs enough data to learn from.",
      },
    ],
  },
  {
    slug: "when-do-linkedin-ads-work-for-b2b",
    title: "When do LinkedIn ads make sense for B2B lead generation?",
    description:
      "LinkedIn ads work best when job title, seniority and company are the targeting that matters, and the offer is worth a professional's time. They are rarely the cheapest channel, so judge them on quality.",
    date: "2026-10-16",
    body: [
      "LinkedIn is one of the most precise paid channels for reaching people by job title, seniority, company size and industry. That precision costs more per click than most channels, so it makes sense when the buyer is hard to reach any other way.",
      { h: "Good fits" },
      {
        list: [
          "Enterprise or mid-market sales, where one account is worth a lot",
          "Products bought by a group, such as finance, operations or IT teams",
          "Offers that suit a professional audience, such as a guide, a benchmark or a webinar",
        ],
      },
      { h: "Poor fits" },
      "Low-price consumer products, high-volume self-serve sign-ups and offers that are only a discount rarely pay back on LinkedIn. People there are networking and learning, so match the offer to that mindset.",
      { h: "Judge the channel on quality" },
      "Compare cost per opportunity, not cost per lead. A cheap lead that never becomes a conversation is expensive. Ask sales which LinkedIn leads they took seriously, and measure against that.",
      "Creative matters more than people expect. Speak to a specific job problem in the first line, and keep the call to action low-friction, such as a document download or a short event sign-up.",
    ],
    faq: [
      {
        q: "What is a good starting budget for LinkedIn ads?",
        a: "Set a test budget you can run long enough to read results, usually several weeks, and judge it on opportunities rather than clicks.",
      },
      {
        q: "Are LinkedIn ads better than Google Ads for B2B?",
        a: "They do different jobs. Google Ads captures people already searching for a solution. LinkedIn reaches people by role before they search, which suits longer sales cycles.",
      },
    ],
  },
  {
    slug: "how-to-find-where-your-funnel-leaks",
    title: "How do you find where your marketing funnel is leaking?",
    description:
      "Work backwards from revenue, measure the conversion rate between each stage, and fix the biggest drop first. Many leaks sit in the handoff between marketing and sales, not in the ads.",
    date: "2026-10-19",
    body: [
      "A funnel leaks when people drop out between stages more than they should. The leak is rarely where the team is looking. Teams often blame the ads, when the real drop is on the landing page or in the first sales reply.",
      { h: "Step 1: map the stages" },
      "Write each stage in plain words: saw the ad, visited the page, started the form, booked a call, attended, became a customer. Keep the list short and honest.",
      { h: "Step 2: measure each handoff" },
      "Calculate the conversion rate between every pair of stages for the same period. Compare with your own past numbers before comparing with any benchmark, since businesses differ widely.",
      { h: "Step 3: fix the biggest, cheapest drop first" },
      {
        list: [
          "Ad to page: does the page deliver what the ad promised in the first screen?",
          "Page to form: is the form longer than the value you offer?",
          "Lead to call: how fast is the first reply, and does it answer the question that was asked?",
          "Call to customer: is the offer clear, and is the next step obvious?",
        ],
      },
      { h: "Watch for hidden leaks" },
      "Lead scoring rules that reject good leads, slow follow-up and tracking gaps all look like demand problems. Check the tracking first.",
      "Measure the same stages again after each change. A funnel is a system, so one fix often reveals the next leak.",
    ],
    faq: [
      {
        q: "What is a good conversion rate for a landing page?",
        a: "It depends on the offer, the traffic source and the price. Track your own trend over time and test changes rather than copying a single benchmark.",
      },
      {
        q: "How often should I review my funnel?",
        a: "Review the key conversion rates every week or two for active campaigns, and do a deeper review each month.",
      },
    ],
  },
  {
    slug: "last-click-vs-data-driven-attribution",
    title: "What is the difference between last-click and data-driven attribution?",
    description:
      "Attribution decides how credit for a sale is shared across the touchpoints that led to it. Last-click gives all the credit to the final step, while data-driven models spread credit based on patterns in your conversions.",
    date: "2026-10-22",
    body: [
      "A customer rarely buys after one ad. They might see a post, search for your brand, read an article and then click a retargeting ad. Attribution is the rule that decides which touchpoint gets the credit.",
      { h: "Last-click" },
      "Last-click gives all the credit to the final interaction before a conversion. It is simple and easy to explain, but it undervalues the channels that start the journey, such as social or content.",
      { h: "First-click and linear" },
      "First-click credits the first touch. Linear splits the credit evenly across every touch. Both are blunt, but they can show what starts demand and what supports it.",
      { h: "Data-driven" },
      "Data-driven models use your own conversion data to estimate how much each touchpoint contributed. They need enough conversions to learn from, so small accounts often cannot use them well.",
      { h: "What to do in practice" },
      "Pick one model for day-to-day optimisation, check another for the broader view, and never treat any model as the full truth. Attribution estimates the story; it does not prove cause.",
    ],
    faq: [
      {
        q: "Which attribution model should I use?",
        a: "Use the model your platform supports reliably and that matches how your customers buy. Compare two models to see how much the answer changes.",
      },
      {
        q: "Does attribution show cause?",
        a: "No. It assigns credit based on rules or patterns. Controlled experiments are the way to measure whether a channel actually causes results.",
      },
    ],
  },
  {
    slug: "what-to-track-first-with-google-tag-manager",
    title: "What should you track first with Google Tag Manager?",
    description:
      "Start with the conversions that matter to the business: form submissions, bookings and purchases. Then add scroll depth and key clicks, and keep a simple naming system so the setup stays readable.",
    date: "2026-10-23",
    body: [
      "Google Tag Manager lets you add and change tracking without editing the website every time. That flexibility is useful, but it also makes it easy to end up with a tangle of tags that nobody understands.",
      { h: "Track business outcomes first" },
      {
        list: [
          "Form submissions and booking confirmations",
          "Purchases or trial starts, with the value where relevant",
          "Phone and email clicks, if those are real contact routes",
        ],
      },
      { h: "Then add the signals that explain behaviour" },
      "Scroll depth, outbound clicks and video plays help explain why a page converts or does not. Add them only when someone will actually read the data.",
      { h: "Keep the setup readable" },
      "Name triggers and tags with one consistent pattern, such as event type and page. Use preview mode before publishing, and keep a short log of every change.",
      { h: "Check the data before you trust it" },
      "Compare tag counts with your own records for a few days. Small gaps are normal. Large ones usually mean a broken trigger or a duplicate tag.",
    ],
    faq: [
      {
        q: "Do I need a developer to set up Google Tag Manager?",
        a: "Basic setups can be done by a marketer. A developer helps with data layers, consent handling and custom events that depend on the site's code.",
      },
      {
        q: "Is Google Tag Manager free?",
        a: "The core tool is free. The real costs are the time to set it up well and any paid analytics or data tools connected to it.",
      },
    ],
  },
];

export function getPost(slug) {
  return posts.find((post) => post.slug === slug);
}
