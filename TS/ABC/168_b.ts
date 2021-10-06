// https://atcoder.jp/contests/abc168/tasks/abc168_b

import { readFileSync } from "fs";

const input = readFileSync(0, 'utf-8');
const K: number = +input.split('\n')[0];
const S: string = input.split('\n')[1];

if(S.length <= K) {
  console.log(S);
} else {
  console.log(S.substr(0, K) + '...');
}