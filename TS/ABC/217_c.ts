// https://atcoder.jp/contests/abc217/tasks/abc217_c

import { readFileSync } from "fs";

const input: string = readFileSync(0, 'utf-8');
const N: number = +input.split('\n')[0];
const pArr: number[] = input.split('\n')[1].split(' ').map(x => parseInt(x, 10));

let qArr: number[] = [];
for(let i = 1; i <= N; i++) {
  qArr[pArr[i-1]] = i;
}
const dummy = qArr.shift();
const answer = qArr.join(' ');
console.log(answer);