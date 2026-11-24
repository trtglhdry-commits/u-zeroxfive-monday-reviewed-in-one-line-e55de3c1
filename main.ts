// Monday, Reviewed in One Line
// Writes a single original one-line review of the entrant's own Monday,
// under 200 characters, to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "Monday gave my inbox 47 unread emails, a 9 a.m. meeting about a meeting, and a coffee that tasted like it had already given up.";

// One line, 127 characters: concrete Monday details (inbox, meeting, coffee)
// with the joke landing on the last clause, nothing else in the file.
// The program writes exactly that line plus a trailing newline, every run.

// Gate: the entry must be 1–200 characters, a single line, not only whitespace.
if (
  [...REVIEW].length < 1 ||
  [...REVIEW].length > 200 ||
  REVIEW.includes("\n") ||
  REVIEW.trim().length === 0
) {
  throw new Error("review violates the entry gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), REVIEW + "\n", "utf8");
