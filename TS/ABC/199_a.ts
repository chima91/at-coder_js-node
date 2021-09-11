// https://atcoder.jp/contests/abc199/tasks/abc199_a

import { readFileSync } from "fs";

const input: string = readFileSync(0, 'utf-8');
const [A, B, C]: number[] = input.split(' ').map(x => parseInt(x, 10));

A**2 + B**2 < C**2 ? console.log('Yes') : console.log('No');