// https://atcoder.jp/contests/abc224/tasks/abc224_a

import { readFileSync } from "fs";

let S = readFileSync(0, 'utf-8').trim();

const two = S.substr(S.length-2);
const three = S.substr(S.length-3);

if(two == 'er') {
  console.log('er');
} else {
  console.log('ist');
}
