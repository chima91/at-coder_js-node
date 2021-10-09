// https://atcoder.jp/contests/abc172/tasks/abc172_b

import { readFileSync } from "fs"

const [S, T]: string[] = readFileSync(0, 'utf-8').split('\n');
const SArr: string[] = S.split('');
const TArr: string[] = T.split('');

let count = 0;
for(let i=0; i < SArr.length; i++) {
  if(SArr[i] !== TArr[i]) count++;
}

console.log(count);