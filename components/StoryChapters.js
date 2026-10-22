import Chapter from "./Chapter";

// The two story chapters, shared by the homepage and the About page.
export default function StoryChapters() {
  return (
    <>
      <Chapter
        id="story"
        tone="black"
        label="2016 · Robots, drones, fixing the line"
        title={
          <>
            Before campaigns, <strong>I built machines.</strong>
          </>
        }
        body="I taught line-following robots, programmed robotic arms, and designed a mechanical funnel that caught newspapers falling mid-run at a printing plant. My final-year drone detects crop disease, and an eye-blink device helped partially paralysed users send messages."
      />

      <Chapter
        tone="white"
        label="2021 · Budgets that pay back"
        title={<>Ran budgets that had to pay back.</>}
        body="At Surge Global I owned a Germany-based cybersecurity account running $500K+ a year across Google, Meta, and LinkedIn. One SaaS client saw a 116% lift in conversion value in six months."
        tiles={[
          { num: "$500K+", cap: "a year, one account" },
          { num: "116%", cap: "conversion value" },
          { num: "15%", cap: "lead lift, one quarter" },
        ]}
      />
    </>
  );
}
