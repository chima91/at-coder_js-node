// https://atcoder.jp/contests/abc057/tasks/abc057_c

import { readFileSync } from "fs";

const calcDigitLength = (num: number) => {
  let length = 0;
  while(num >= 1) {
    length++;
    num /= 10;
  }
  return length;
}

const main = (input: number) => {
  // 十分大きい値で初期化
  let answer = 10**10;

  for(let A = 1; A*A <= input; A++) {
    if(input % A === 0) {
      let B = input / A;
      let F = Math.max(calcDigitLength(A), calcDigitLength(B));
      answer = Math.min(answer, F);
    }
  }

  console.log(answer);
}

main(parseInt(readFileSync(0, 'utf-8'), 10));