import { mkdirSync, writeFileSync } from "node:fs";

const haiku =
  ["One print slows the race", "the crash I chased all week long", "now queues behind it"].join(
    "\n",
  ) + "\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", haiku, "utf8");
