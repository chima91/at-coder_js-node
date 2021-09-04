// https://atcoder.jp/contests/abc217/tasks/abc217_b

import { readFileSync } from "fs";

const input: string = readFileSync(0, 'utf-8');
const sArr: string[] = input.split('\n');

if(!sArr.includes('ABC')) {
  console.log('ABC');
} else if(!sArr.includes('ARC')) {
  console.log('ARC');
} else if(!sArr.includes('AGC')) {
  console.log('AGC');
} else {
  console.log('AHC');
}

