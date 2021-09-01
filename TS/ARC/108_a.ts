// https://atcoder.jp/contests/arc108/tasks/arc108_a

import * as fs from "fs";

const [ S, P ]: number[] = fs.readFileSync('/dev/stdin', 'utf-8').split(' ').map(x => parseFloat(x));

let answer: string = 'No';
for(let i: number = 1; i <= Math.sqrt(P); i++) {
  if((i**2 - S*i + P) === 0) {
    answer = 'Yes';
    break;
  }
}
console.log(answer);