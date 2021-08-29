import * as fs from "fs";

const input: string = fs.readFileSync('/dev/stdin', 'utf-8').trim();
const arr: string[] = input.split('\n');
const N = arr.shift();

const existsSameValue = (array: string[]) => {
  const s = new Set(array);
  return array.length !== s.size;
}

existsSameValue(arr) ? console.log('Yes') : console.log('No');