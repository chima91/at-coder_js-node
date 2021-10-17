// https://atcoder.jp/contests/abc223/tasks/abc223_a

import { readFileSync } from "fs";

let X = parseInt(readFileSync(0, 'utf-8'));

let answer = 'No';
if(X !== 0) {
  for(let i = 1; i <= 10; i++) {
    if(X === 100 * i) answer='Yes';
  }
}
console.log(answer);