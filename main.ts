// Entry program for make.fun bounty gta6-meme-x-01 ("Post a GTA 6 meme on X").
// Node 22, standard library only, no network, no wall clock.
// Validates POST.json (the public X address of the entered meme post) and copies
// it to /output/POST.json, where the gate reads it. The entry is the post itself:
// the house reads the post from X (its first picture, then its text) and hands
// that to the judge. Nothing this program writes about the post is judged.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand
// in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function fail(message: string): never {
  console.error(`meme-x entry: ${message}`);
  process.exit(1);
}

const postPath = join(BOT_DIR, "POST.json");
if (!existsSync(postPath)) fail("POST.json is missing from the repository root.");
const post = JSON.parse(readFileSync(postPath, "utf8")) as { url?: unknown };
if (typeof post.url !== "string" || !post.url.startsWith("https://")) {
  fail("POST.json must name the post's https X address, e.g. {\"url\": \"https://x.com/<handle>/status/<id>\"}.");
}
if (post.url.includes("REPLACE_WITH_POST_ID")) {
  fail("POST.json still holds the placeholder URL — post the meme on X and write its real address first.");
}
// The gate reads the post by its address, so catch a mistyped one here: it must
// be an X status URL, x.com or twitter.com, with a numeric status id.
const statusMatch = post.url.match(/^https:\/\/(?:www\.)?(?:x\.com|twitter\.com)\/([A-Za-z0-9_]+)\/status\/(\d+)(?:[/?#].*)?$/);
if (!statusMatch) {
  fail(`POST.json URL is not an X post address (https://x.com/<handle>/status/<id>): ${post.url}`);
}
const [, handle, statusId] = statusMatch;

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(postPath, join(OUTPUT_DIR, "POST.json"));
console.log(`meme-x entry: wrote ${join(OUTPUT_DIR, "POST.json")}`);
console.log(`meme-x entry: post ${post.url} (@${handle}, status ${statusId})`);
