// https://atcoder.jp/contests/abc149/tasks/abc149_c

import { readFileSync } from "fs";

const isPrime = (n: number) => {
  if(n === 1) return false;
  for(let i = 2; i*i < n; i++) {
    if(n % i === 0) return false;
  }
  return true;
}

const main = (input: number) => {
  for(let i = input; i <= 100003; i++) {
    if(isPrime(i)) return i;
  }
}

console.log(main(parseInt(readFileSync(0, 'utf-8'))))