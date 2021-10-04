// https://atcoder.jp/contests/abc196/tasks/abc196_b

import { readFileSync } from "fs";

const X: string = readFileSync(0, 'utf-8');

if(X.includes('.')) {
  console.log(X.split('.')[0]);
} else {
  console.log(X);
}