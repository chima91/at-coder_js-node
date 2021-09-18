// https://atcoder.jp/contests/abc110/tasks/abc110_b

import { readFileSync } from "fs";

const X: number = +readFileSync(0, 'utf-8');

if(X < 40) {
  console.log(40 - X);
} else if(X < 70) {
  console.log(70 - X);
} else if(X < 90) {
  console.log(90 - X);
} else {
  console.log('expert');
}