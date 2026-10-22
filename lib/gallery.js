// Event photos, served from public/gallery/. Files are 960×1200 WebP.
// Add a caption field per photo when you want one shown on the page.
export const moments = Array.from({ length: 25 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return { src: `/gallery/moment-${n}.webp`, alt: `Event photo ${i + 1}` };
});

// Photos featured on the homepage.
export const featuredMoments = ["moment-20", "moment-06", "moment-25", "moment-24"].map((name) => {
  const n = name.replace("moment-", "");
  return { src: `/gallery/moment-${n}.webp`, alt: `Event photo ${Number(n)}` };
});
