// https://atcoder.jp/contests/abc217/tasks/abc217_a

import { readFileSync } from "fs";

const input: string = readFileSync(0, 'utf-8');
const [ S, T ]: string[] = input.split(' ');

S < T ? console.log('Yes') : console.log('No');