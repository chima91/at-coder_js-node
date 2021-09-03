// https://atcoder.jp/contests/abc086/tasks/abc086_b

import * as fs from "fs";

const main = (input: string) => {
  const nums: string[] = input.split(' ');
  const consolidateNum: string = nums[0] + nums[1];

  Number.isInteger(Math.sqrt(+consolidateNum)) ? console.log('Yes') : console.log('No');
}

main(fs.readFileSync('/dev/stdin', 'utf-8'));