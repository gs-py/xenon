/**
 * Client logos for the "Our Clients" marquee. The optimized PNGs live in
 * `src/assets/clients/`; Vite resolves + hashes them via the glob below, so
 * adding a logo is just: drop the file in that folder and add a row here.
 */

const logoModules = import.meta.glob("../assets/clients/*.png", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const logos: Record<string, string> = {};
for (const [path, url] of Object.entries(logoModules)) {
  logos[path.split("/").pop() as string] = url;
}

export interface Client {
  id: string;
  /** Display / alt-text name. */
  name: string;
  /** Resolved logo URL. */
  logo: string;
}

/** Ordered logo list with display names (file → brand). */
const entries: { file: string; name: string }[] = [
  { file: "impress.png", name: "Impress Build" },
  { file: "green-vista.png", name: "Green Vista" },
  { file: "desiign-narrator.png", name: "Desiign Narrator" },
  { file: "a-concept.png", name: "A Concept" },
  { file: "arabian-frontrunner.png", name: "Arabian Frontrunner" },
  { file: "consult-valiant.png", name: "Consult Valiant" },
  { file: "propweb.png", name: "Propweb" },
  { file: "ashpower.png", name: "Ashpower" },
  { file: "adnox.png", name: "Adnox" },
  { file: "amh.png", name: "AMH" },
  { file: "bayroot.png", name: "Bayroot" },
  { file: "bloombiz.png", name: "Bloombiz" },
  { file: "fresho.png", name: "Fresho" },
  { file: "gulfstar.png", name: "Gulfstar" },
  { file: "munch-bees.png", name: "Munch Bees" },
  { file: "palm-tree.png", name: "Palm Tree" },
  { file: "qasba.png", name: "Qasba" },
  { file: "tanwood.png", name: "Tanwood" },
  { file: "varsha-carpentry.png", name: "Varsha Carpentry" },
  { file: "wafa.png", name: "Wafa" },
];

export const clients: Client[] = entries
  .filter((e) => logos[e.file])
  .map((e) => ({
    id: e.file.replace(/\.png$/, ""),
    name: e.name,
    logo: logos[e.file],
  }));
