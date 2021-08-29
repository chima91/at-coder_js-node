import * as fs from "fs";

const input: string = fs.readFileSync('/dev/stdin', 'utf-8').trim();
const [A, B]: number[] = input.split(' ').map(x => parseInt(x, 10));

(A <= 8 && B <= 8) ? console.log('Yay!') : console.log(':(')