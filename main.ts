// SPDX-License-Identifier: MIT
// Roast Your Own Agent — one-line entry.
// Writes exactly one line to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "My agent took forty messages to write one line, then called the saga 'iteration' and asked for a raise.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
