//

import { readFileSync } from "fs";

const N: number = parseInt(readFileSync(0, 'utf-8'));

if(N < 10) {
  console.log('000'+N);
} else if(N < 100) {
  console.log('00'+N);
} else if(N < 1000) {
  console.log('0'+N);
} else {
  console.log(N);
}