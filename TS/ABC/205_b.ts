// https://atcoder.jp/contests/abc205/tasks/abc205_b

import { readFileSync } from "fs";
const input = readFileSync(0, "utf8");
const [, rest] = input.split("\n");

const arr = rest.split(" ").map(Number);
const isPermutation = arr.sort((a, b) => a - b).every((element, i) => element === i + 1);

console.log(isPermutation? "Yes" : "No");