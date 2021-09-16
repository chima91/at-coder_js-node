// https://atcoder.jp/contests/arc017/tasks/arc017_1

import { readFileSync } from "fs";

const isPrime = (num: number): boolean => {
  if(num === 1) return false;
  for(let i = 2; i*i <= num; i++) {
    if(num % i === 0) return false;
  }
  return true;
}

const main = (input: number) => {
  isPrime(input) ? console.log('YES') : console.log('NO');
}

const N: number = parseInt(readFileSync(0, 'utf-8'), 10);
main(N);