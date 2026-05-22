import fs from "fs";
import path from "path";

const BASE_URL = "https://www.xone13.com";
const OUT_DIR = path.resolve(process.cwd(), "dist");

function generateRobotsTxt() {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`;

  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  fs.writeFileSync(path.join(OUT_DIR, "robots.txt"), robotsTxt, "utf8");
  console.log("✅ robots.txt generated successfully!");
}

generateRobotsTxt();
