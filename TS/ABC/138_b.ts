// https://atcoder.jp/contests/abc138/tasks/abc138_b

import { readFileSync } from "fs";

let [ , A ] = readFileSync(0,'utf-8').split('\n');
let AArr = A.split(' ').map(x => parseInt(x));

const up = 1;
let down = 0;
for(let i = 0; i < AArr.length; i++) {
  down += (1 / AArr[i]);
}

console.log(up / down);