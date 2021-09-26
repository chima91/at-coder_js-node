//

import { readFileSync } from "fs";

const main = (input: string) => {
  const [A, B, C] = input.split(' ').map(x => parseInt(x));

  let ans = -1;
  for(let c = 1; c <= 1000; c++) {
    if(C*c >= A && C*c <= B) {
      ans = C*c;
      break;
    }
  }

  console.log(ans);
};

main(readFileSync(0, 'utf-8'));