// https://atcoder.jp/contests/abc225/tasks/abc225_a

import { readFileSync } from "fs";

const S = readFileSync(0, 'utf-8');
const S1 = S.split('')[0];
const S2 = S.split('')[1];
const S3 = S.split('')[2];

if(S1 === S2 && S2 === S3) {
  console.log(1);
} else if (S1 === S2 || S2 === S3 || S3 === S1) {
  console.log(3);
} else {
  console.log(6);
}