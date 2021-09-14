// https://atcoder.jp/contests/abc162/tasks/abc162_b

import { readFileSync } from "fs";

const N: number = +readFileSync(0, 'utf-8');

let arr = [];
for(let i = 1; i <= N; i++) {
  if((i % 3 !== 0) && (i % 5 !== 0)) {
    arr.push(i);
  }
}

const sum = arr.reduce((accum, current) => accum += current);
console.log(sum);