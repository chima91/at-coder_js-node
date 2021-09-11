import { readFileSync } from "fs";

const input: string = readFileSync(0, 'utf-8');
const N: number = +input.split('\n')[0];
const S: string[] = input.split('\n')[1].split('');

S[N-1] === 'o' ? console.log('Yes') : console.log('No');