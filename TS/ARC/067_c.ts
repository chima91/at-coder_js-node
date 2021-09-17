// https://atcoder.jp/contests/arc067/tasks/arc067_a

import { readFileSync } from "fs";

const factorialize = (n: number): number => {
  if(n === 0) return 1;
  return n * factorialize(n-1);
}

const primeFactorize = (num: number) => {
  let arr = [];

  for(let i = 2; i*i <= num; i++) {
    if(num % i !== 0) continue;

    let ex = 0;
    while(num % i === 0) {
      ex++;
      num /= i;
    }
    arr.push({
      primeFactor: i,
      exponent: ex
    });
  }

  if(num !== 1) arr.push({
    primeFactor: num,
    exponent: 1
  })

  let primeFactorNum = 1;
  for(let j = 0; j < arr.length; j++) {
    primeFactorNum *= arr[j].exponent + 1;
  }
  return primeFactorNum;
}

const N: number = parseInt(readFileSync(0, 'utf-8'));
const divisorNum = primeFactorize(factorialize(N));
console.log(divisorNum);