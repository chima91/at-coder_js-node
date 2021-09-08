// https://atcoder.jp/contests/abc200/tasks/abc200_b

import { readFileSync } from "fs";

const input: string = readFileSync(0, 'utf-8');
let [ N, K ]: number[] = input.split(' ').map(x => parseInt(x, 10));

for(let i = 0; i < K; i++) {
  if(N % 200 === 0) {
    N /= 200;
  } else {
    N = N * 1000 + 200;
  }
}

console.log(N);