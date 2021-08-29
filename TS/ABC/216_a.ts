import * as fs from "fs";

const input: string = fs.readFileSync('/dev/stdin', 'utf-8').trim();
const [X, Y]: number[] = input.split('.').map(x => parseInt(x, 10));

if(Y >= 0 && Y <= 2) {
  console.log(`${X}-`);
} else if(Y >= 3 && Y <= 6) {
  console.log(`${X}`);
} else {
  console.log(`${X}+`);
}