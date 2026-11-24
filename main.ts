// Seventeen Syllables of Debugging — a haiku about debugging.
// The program writes the haiku, three lines in 5-7-5 shape, to entry.txt.
// Deterministic: same bytes on every run, no input, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

// Syllable counts, verified by hand: line 1 = 5 (The-1 log-1 line-1
// stays-1 blank-1), line 2 = 7 (hours-1 of-1 prints-1 prove-1
// nothing-2 wrong-1), line 3 = 5 (the-1 bug-1 watched-1 me-1 work-1).
// Total 17 syllables, 85 characters including the trailing newline.
const lines: string[] = [
  "The log line stays blank",
  "hours of prints prove nothing wrong",
  "the bug watched me work",
];

const haiku: string = lines.join("\n") + "\n";

const outPath: string = process.argv[2]
  ? resolve(process.argv[2])
  : "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, haiku, "utf8");
