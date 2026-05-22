import fs from "fs";
import path from "path";

const BASE_URL = "https://www.xone13.com";
const OUT_DIR = path.resolve(process.cwd(), "dist");

// Assuming blogs are static for now, you could also fetch this if it were dynamic
const routes = [
  { url: "/", changefreq: "weekly", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/services", changefreq: "weekly", priority: 0.9 }, // assuming services page might exist
  { url: "/packages", changefreq: "monthly", priority: 0.9 },
  { url: "/blogs", changefreq: "daily", priority: 0.8 },
];

function generateSitemap() {
  const currentDate = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes
    .map((route) => {
      return `
  <url>
    <loc>${BASE_URL}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
  </url>`;
    })
    .join("")}

</urlset>`;

  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  fs.writeFileSync(path.join(OUT_DIR, "sitemap.xml"), sitemap, "utf8");
  console.log("✅ Sitemap generated successfully!");
}

generateSitemap();
