// https://atcoder.jp/contests/abc117/tasks/abc117_b

import { readFileSync } from "fs";

let [N, L]: string[] = readFileSync(0,'utf-8').split('\n');
const LArr: number[] = L.split(' ').map(x => parseInt(x));

let max = 0;
LArr.forEach(l => {
  if(l > max) max = l;
});

const sum = LArr.reduce((accum, curr) => accum += curr);
2*max < sum ? console.log('Yes') : console.log('No');