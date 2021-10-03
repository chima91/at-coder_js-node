// https://atcoder.jp/contests/abc142/tasks/abc142_d

import { readFileSync } from "fs";

// 素因数分解
const primeFactorize = (num: number) => {
  let obj: any = {};
  for(let i = 2; i*i <= num; i++) {
    if((num % i) !== 0) continue;
    let expo = 0;
    while(num % i === 0) {
      expo++;
      num /= i;
    }

    obj[i] ? obj[i]+=expo : obj[i]=expo;
  }

  if(num !== 1) obj[num] ? obj[num]++ : obj[num]=1;

  return obj;
};

// 最大公約数
const GCD = (a: number, b: number): number => {
  if(b === 0) return a;
  return GCD(b, a%b);
}

const main = (input1: number, input2: number) => {
  let gcd = GCD(input1, input2);
  let primeFactorizeResult = primeFactorize(gcd);
  console.log(Object.keys(primeFactorizeResult).length + 1);
}

const [A, B] = readFileSync(0, 'utf-8').split(' ').map(x => parseInt(x));
main(A, B);