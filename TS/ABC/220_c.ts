// https://atcoder.jp/contests/abc220/tasks/abc220_c

import { readFileSync } from "fs";

const main = (input: string) => {
  const numArr = input.split('\n')[1].split(' ').map(x => BigInt(x));
  const X = BigInt(input.split('\n')[2]);

  const numArrSum = numArr.reduce((accum=0n, curr=0n) => accum += curr);

  let count1 = BigInt(X / numArrSum);
  let currSum = count1 * numArrSum;

  let count2 = 0n;
  for(let i = 0; i < numArr.length; i++) {
    currSum += numArr[i];
    if(currSum > X) {
      count2 = BigInt(i)+ 1n;
      break;
    }
  }

  const bigintAns = count1 * BigInt(numArr.length) + count2;
  console.log(String(bigintAns));
};

main(readFileSync(0, 'utf-8'));