// https://atcoder.jp/contests/arc026/tasks/arc026_2

import { readFileSync } from "fs";

const getDivisorsArr = (num: number) => {
  let divisorArr = [0];

  for(let i = 1; i*i <= num; i++) {
    if(num % i === 0) {
      divisorArr.push(i);
      if(num/i !== i) divisorArr.push(num/i);
    }
  }

  return divisorArr;
};

const main = (input: number) => {
  let divisorsSum = getDivisorsArr(input).reduce((accum, curr) => accum += curr);

  if((divisorsSum-input) > input) {
    console.log('Abundant');
  } else if((divisorsSum-input) === input) {
    console.log('Perfect');
  } else {
    console.log('Deficient');
  }
}

main(parseInt(readFileSync(0, 'utf-8')));