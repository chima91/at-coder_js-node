// % npx ts-node 250_b.ts

import * as fs from "fs";

const [N, A, B] = fs.readFileSync("/dev/stdin", "utf-8").split(" ").map(Number);

for (let i = 0; i < N * A; i++) {
  let line: string = "";
  for (let j = 0; j < N * B; j++) {
    if ((Math.floor(i / A) + Math.floor(j / B)) % 2 === 1) line += "#";
    else line += ".";
  }

  console.log(line);
}
