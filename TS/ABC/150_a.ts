// https://atcoder.jp/contests/abc150/tasks/abc150_a

import { readFileSync } from "fs";

const input: string = readFileSync(0, 'utf-8');
const [ K, X ]: number[] = input.split(' ').map(x => parseInt(x, 10));

(500 * K) >= X ? console.log('Yes') : console.log('No');