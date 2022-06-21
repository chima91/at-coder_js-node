// % npx ts-node 250_a.ts

import * as fs from "fs";

const count = () => {
  let ans = 0;

  if (R - 1 >= 1) ans += 1;
  if (R + 1 <= H) ans += 1;
  if (C - 1 >= 1) ans += 1;
  if (C + 1 <= W) ans += 1;

  return ans;
};

const [first, second] = fs
  .readFileSync("/dev/stdin", "utf-8")
  .trim()
  .split("\n");

const [H, W] = first.split(" ").map(Number);
const [R, C] = second.split(" ").map(Number);

console.log(count());
