// https://atcoder.jp/contests/abc003/tasks/abc003_1

import * as fs from "fs";

const input: string = fs.readFileSync('/dev/stdin', 'utf-8').trim();
const N: number = +input;

let sum: number = 0;
for(let i = 1; i <= N; i++) {
  sum += i * 10000;
}

console.log(sum / N);