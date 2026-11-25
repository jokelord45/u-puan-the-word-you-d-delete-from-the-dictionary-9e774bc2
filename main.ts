// The Word You'd Delete From the Dictionary
// Writes the single word to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "thingamajig";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
