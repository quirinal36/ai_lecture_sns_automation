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
  "exercise01/aside-request.png",
  "exercise01/image_01(before).png",
  "exercise01/image_01(after).png",
  "exercise01/image_02(before).png",
  "exercise01/image_02(after).png",
  "exercise01/image_03(before).png",
  "exercise01/image_03(after).png"
];

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const asset of assets) {
  await cp(resolve(root, asset), resolve(output, asset), { recursive: true });
}
