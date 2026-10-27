// The canonical domain. NEXT_PUBLIC_SITE_URL overrides it, e.g. for a staging copy.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.vathsansharma.com").replace(/\/$/, "");

export const SITE_NAME = "Vathsan Sharma";

export const PERSON = {
  name: "Vathsan Sharma",
  jobTitle: "Senior full-stack digital marketer and demand generation specialist",
  email: "vathsansharma@gmail.com",
  linkedin: "https://linkedin.com/in/vathsan-sharma",
  location: "Sri Lanka (Remote)",
  alumniOf: "Sri Lanka Technological Campus",
  knowsAbout: [
    "Paid media",
    "Performance marketing",
    "Google Ads",
    "Meta Ads",
    "LinkedIn Ads",
    "Growth strategy",
    "Marketing training",
    "AI evaluation",
    "Benchmark design",
    "Marketing measurement",
    "Video advertising",
    "Generative engine optimisation",
    "Embedded sensing prototypes",
  ],
};
