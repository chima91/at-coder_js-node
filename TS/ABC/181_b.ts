// https://atcoder.jp/contests/abc181/tasks/abc181_b

import { readFileSync } from "fs";

let numArr = readFileSync(0, 'utf-8').split('\n');
const N = numArr.shift();

let result = 0;
for(let i = 0; i < Number(N); i++) {
  let [A, B] = numArr[i].split(' ').map(x => parseInt(x));
  result += B * (B + 1) / 2 - A * (A - 1) / 2;
}

console.log(result);