import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "I muted the group chat and my phone finally went quiet, and that's when it hit me — the quiet wasn't peace, it was everyone else finally getting to finish a sentence.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
console.log(joke);