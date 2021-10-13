// https://atcoder.jp/contests/arc032/tasks/arc032_1

import { readFileSync } from "fs";

const isPrime = (n: number) => {
  for(let i = 2; i*i < n; i++) {
    if(n % i === 0) return false;
  }
  return true;
}

const main = (input: number) => {
  const inputArr = [...Array(input)].map((_, i) => i+1)
  const sum = inputArr.reduce((accur, curr) => accur += curr);

  if(sum === 1) {
    console.log('BOWWOW');
  } else if(!isPrime(sum)) {
    console.log('BOWWOW')
  } else {
    console.log('WANWAN');
  }
}

main(parseInt(readFileSync(0, 'utf-8')));