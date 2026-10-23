// Event photos, served from public/gallery/. Files are 960×1200 WebP.
// Add a caption field per photo when you want one shown on the page.
export const moments = Array.from({ length: 25 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return { src: `/gallery/moment-${n}.webp`, alt: `Event photo ${i + 1}` };
});

// Homepage strip: each slot cross-fades through its photos.
const photo = (n) => ({
  src: `/gallery/moment-${String(n).padStart(2, "0")}.webp`,
  alt: `Event photo ${n}`,
});

export const stripSlots = [
  [photo(20), photo(22), photo(1)],
  [photo(6), photo(5), photo(9)],
  [photo(25), photo(19), photo(18)],
  [photo(24), photo(21), photo(14)],
];
