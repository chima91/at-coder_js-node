// https://atcoder.jp/contests/abc222/tasks/abc222_b

import { readFileSync } from "fs";

const inputArr = readFileSync(0, 'utf-8').split('\n');
const [N,P] = inputArr[0].split(' ').map(x => parseInt(x));
const aArr = inputArr[1].split(' ').map(x => parseInt(x));

let count = 0;
aArr.forEach(a => {
  if(a < P) count++;
})

console.log(count);