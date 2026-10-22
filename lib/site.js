// Order: an explicit NEXT_PUBLIC_SITE_URL, then Vercel's production domain
// (set automatically on Vercel builds), then localhost for local development.
const deployedUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || deployedUrl).replace(/\/$/, "");

export const SITE_NAME = "Vathsan Sharma";

export const PERSON = {
  name: "Vathsan Sharma",
  jobTitle: "Performance marketer and growth strategist",
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
  ],
};
