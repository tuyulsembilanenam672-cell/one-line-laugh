import { mkdirSync, writeFileSync } from "node:fs";

// One funny line: a single sentence, at most 200 characters.
const JOKE =
  "My printer only works when I don't need it, which makes it the most emotionally unavailable thing in my house.";

// Write the line to /output/entry.txt with no trailing newline, so the
// file holds exactly one line.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");

// Log the code-point count (spread counts code points, not UTF-16 units).
console.log(`Wrote ${[...JOKE].length} code points to /output/entry.txt`);
