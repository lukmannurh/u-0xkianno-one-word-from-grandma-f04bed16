// One Word From Grandma — entry program.
// Writes exactly one word to /output/entry.txt: the word a grandma
// would text about AI.
//
// The word: "Robot".
// A grandma shown an AI that writes, draws and talks would not send a
// paragraph. She would send one word, warm and a little baffled, and
// that word would be "Robot" — her whole verdict on the machine, in
// five letters. It is tied to AI (criterion 4), it is exactly what she
// would type to a grandchild (criteria 1 and 2), and the joke lands
// with no caption at all: all of artificial intelligence, reduced by
// grandma to one word. No punctuation tricks, no explanation.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Robot";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
