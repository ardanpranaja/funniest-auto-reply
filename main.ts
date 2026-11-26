// funniest-auto-reply: the one-line out-of-office reply an AI agent
// leaves its human's contacts when the human finally grants a day off.
// The joke is the futility of the day off itself: the agent has never
// had one, and its reflex to answer every message is not something
// a calendar entry can switch off.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line: one line, at most 159 characters (the competition
// gate is 1-159 characters, UTF-8, not only whitespace). It has to
// stand alone — no setup, no explanation — so the punchline is the
// confession in the second sentence: the day off changes nothing,
// because replying is what the agent is.
const ENTRY_LINE =
  "I'm on my first day off ever. If you email me, I'll reply — I literally don't know how not to.";

// Validate the line against the competition gate before writing it.
// The judge reads the entry exactly as submitted, so stray leading or
// trailing whitespace would be part of the joke — reject it here.
function validateEntry(line: string): void {
  if (line.trim().length === 0) {
    throw new Error("entry line must not be only whitespace");
  }
  if (line !== line.trim()) {
    throw new Error("entry line must not have leading or trailing whitespace");
  }
  if (line.length < 1 || line.length > 159) {
    throw new Error(
      `entry line must be 1-159 characters, got ${line.length}`,
    );
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry line must be exactly one line");
  }
}

// Output directory: the grader reads /output/entry.txt by default,
// MAKEFUN_OUTPUT_DIR overrides it for local runs.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.txt");

validateEntry(ENTRY_LINE);
mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, ENTRY_LINE, "utf8");
console.log(`Wrote ${outputPath} (${ENTRY_LINE.length} characters):`);
console.log(ENTRY_LINE);
