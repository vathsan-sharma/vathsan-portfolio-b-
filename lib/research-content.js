// Full body text of each paper, converted from the Word manuscripts by
// scripts-free extraction (see lib/research-content/*.json). Keyed by paper slug.
import benchmarkPublicationReadiness from "./research-content/benchmark-publication-readiness.json";
import expertDataQuality from "./research-content/expert-data-quality.json";
import benchmarkAdoptionDistribution from "./research-content/benchmark-adoption-distribution.json";
import holdTestedVideoAds from "./research-content/hold-tested-video-ads.json";
import holdTestedVideoAdsWorkingPaper from "./research-content/hold-tested-video-ads-working-paper.json";
import llmAsJudgeMarketingContent from "./research-content/llm-as-judge-marketing-content.json";
import aiMediatedDiscoveryB2b from "./research-content/ai-mediated-discovery-b2b.json";
import eyeBlinkCommunicationDevice from "./research-content/eye-blink-communication-device.json";

export const contentBySlug = {
  "benchmark-publication-readiness": benchmarkPublicationReadiness,
  "expert-data-quality": expertDataQuality,
  "benchmark-adoption-distribution": benchmarkAdoptionDistribution,
  "hold-tested-video-ads": holdTestedVideoAds,
  "hold-tested-video-ads-working-paper": holdTestedVideoAdsWorkingPaper,
  "llm-as-judge-marketing-content": llmAsJudgeMarketingContent,
  "ai-mediated-discovery-b2b": aiMediatedDiscoveryB2b,
  "eye-blink-communication-device": eyeBlinkCommunicationDevice,
};
