// https://atcoder.jp/contests/abc184/tasks/abc184_b

import { readFileSync } from "fs";

const input: string[] = readFileSync(0, 'utf-8').split('\n');
let X: number = +input[0].split(' ')[1];
const S: string[] = input[1].split('');

S.forEach(s => {
  if(s === 'o') {
    X++;
  } else if(s === 'x' && X !== 0) {
    X--;
  }
});

console.log(X);