import * as fs from "fs";

const input: string[] = fs.readFileSync('/dev/stdin', 'utf-8').split(' ');
const A: number = +input[0];
const B: number = +input[1];

const res: number = A - B * 2;

if(res > 0) {
  console.log(res);
} else {
  console.log(0);
}