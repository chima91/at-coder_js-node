// https://atcoder.jp/contests/arc067/tasks/arc067_a

import { readFileSync } from "fs";

const main = (num: number) => {
  let obj: any = {};

  for(let i = 2; i <= num; i++) {
    let copyI = i;
    for(let divisor = 2; divisor*divisor <= copyI; divisor++) {
      if(copyI % divisor === 0) {
        let expo = 0;
        while(copyI % divisor === 0) {
          expo++;
          copyI /= divisor;
        }

        obj[divisor] ? obj[divisor]+=expo : obj[divisor]=expo;
      }
    }

    if(copyI !== 1) obj[copyI] ? obj[copyI]++ : obj[copyI]=1;
  }

  let answer = 1;
  let mod = 1000000007;
  for(let prop in obj) {
    answer = (answer * (obj[prop]+1)) % mod;
  }
  console.log(answer);
}

const N: number = parseInt(readFileSync(0, 'utf-8'));
main(N);