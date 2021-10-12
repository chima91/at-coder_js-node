// https://atcoder.jp/contests/abc106/tasks/abc106_b

import { readFileSync } from "fs";

const enumDivisors = (n: number) => {
  let dArr = [];
  for(let i = 1; i*i <= n; i++) {
    if(n % i === 0) {
      dArr.push(i);
      if(n/i !== i) dArr.push(n/i);
    }
  }
  return dArr;
}

const main = (input: number) => {
  let count = 0;
  for(let i = 1; i <= input; i+=2) {
    if(enumDivisors(i).length === 8) count++;
  }
  return count;
}

console.log(main(parseInt(readFileSync(0, 'utf-8'))));