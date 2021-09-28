// https://atcoder.jp/contests/abc198/tasks/abc198_b

import { readFileSync } from "fs";

const main = (input: string) => {
  let N = input.trim();

  let answer = 'No';
  for(let i = 0; i < 10; i++) {
    let str = '0'.repeat(i) + N;
    if(str == str.split('').reverse().join('')) {
      answer = 'Yes';
      break;
    }
  }

  console.log(answer);
}

main(readFileSync(0, 'utf-8'));