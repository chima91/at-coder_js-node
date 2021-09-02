// https://atcoder.jp/contests/agc030/tasks/agc030_a

import * as fs from "fs";

const main = (input: string) => {
  const [A, B, C]: number[] = input.trim().split(' ').map(x => parseInt(x));

  (A + B + 1 >= C) ? console.log(B + C) : console.log(B + (A + B + 1));
}

main(fs.readFileSync('/dev/stdin', 'utf-8'));