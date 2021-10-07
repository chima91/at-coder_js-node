// https://atcoder.jp/contests/agc010/tasks/agc010_a

import { readFileSync } from "fs";

const input: string = readFileSync('/dev/stdin', 'utf-8');
const numArr: number[] = input.split('\n')[1].split(' ').map(x => parseInt(x));

const sum = numArr.reduce((accum, curr) => accum += curr);
(sum % 2 === 0) ? console.log('YES') : console.log('NO')