// https://atcoder.jp/contests/abc110/tasks/abc110_b

import { readFileSync } from "fs";

const inputArr: string[] = readFileSync(0, 'utf-8').split('\n');
const [ N, M, X, Y ]: number[] = inputArr[0].split(' ').map(x => parseInt(x));
const xArr: number[] = inputArr[1].split(' ').map(x => parseInt(x));
const yArr: number[] = inputArr[2].split(' ').map(x => parseInt(x));

const isNotWar = (): boolean => {
  for(let Z = -100; Z <= 100; Z++) {
    let count = 0;

    if(X < Z && Z <= Y) count++;
    if(xArr.every(x => x < Z)) count++;
    if(yArr.every(y => Z <= y)) count++;

    if(count === 3) return true;
  }

  return false;
}

isNotWar() ? console.log('No War') : console.log('War');