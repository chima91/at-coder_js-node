// https://atcoder.jp/contests/abc110/tasks/abc110_b

import { readFileSync } from "fs";

const inputArr: string[] = readFileSync(0, 'utf-8').split('\n');
const [ S1, S2, S3 ]: string[] = inputArr;
const T: number[] = inputArr[3].split('').map(x => parseInt(x));

let answer = '';
T.forEach(item => {
  if(item === 1) {
    answer += S1;
  } else if(item === 2) {
    answer += S2;
  } else {
    answer += S3
  }
})

console.log(answer);

