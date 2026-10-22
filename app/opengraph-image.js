import { ImageResponse } from "next/og";

export const alt = "Vathsan Sharma · Senior full-stack digital marketer and demand generation specialist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Social share card, generated at build time so it stays in sync with the site copy.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#000000",
          color: "#f5f5f7",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 26, color: "#86868b", letterSpacing: 2, textTransform: "uppercase" }}>
          Full-stack digital marketing · Demand generation
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, fontWeight: 600, lineHeight: 1, letterSpacing: -2 }}>
            Vathsan Sharma
          </div>
          <div style={{ marginTop: 28, fontSize: 36, color: "#86868b", lineHeight: 1.25 }}>
            I once taught robots to follow a line. Now I build campaigns that follow the customer.
          </div>
        </div>
        <div style={{ fontSize: 24, color: "#86868b" }}>www.vathsansharma.com</div>
      </div>
    ),
    { ...size }
  );
}
