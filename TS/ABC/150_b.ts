// https://atcoder.jp/contests/abc150/tasks/abc150_b

import { readFileSync } from "fs"

const S = readFileSync(0, 'utf-8').split('\n')[1];

let matchArr: any = S.match(/ABC/g);

if(matchArr) {
  console.log(matchArr.length);
} else {
  console.log(0);
}
