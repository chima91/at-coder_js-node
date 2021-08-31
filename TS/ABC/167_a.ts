// https://atcoder.jp/contests/abc167/tasks/abc167_a

import * as fs from "fs";

const input: string[] = fs.readFileSync('/dev/stdin', 'utf-8').split('\n');
const output = (x: string) => console.log(x);

const [S, T] = input;
S === T.slice(0, -1) ? output('Yes') : output('No');