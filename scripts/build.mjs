import { cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(".");
const output = resolve(root, "dist");
const assets = [
  "index.html",
  "compare-init.js",
  "instagram-guide.js",
  "practice-01.js",
  "setup-exercise.js",
  "hyperframes-practice-01.js",
  "hyperframes-practice-02.js",
  "hyperframes-practice-03.js",
  "hyperframes-practice-04.js",
  "hyperframes-shorts-showcase.js",
  "exercise-03-making-of.js",
  "letscoding_lounge_making_of.html"
];

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const asset of assets) {
  await cp(resolve(root, asset), resolve(output, asset), { recursive: true });
}
