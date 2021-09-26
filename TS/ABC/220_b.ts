//

import { readFileSync } from "fs";

const main = (input: string) => {
  const K = parseInt(input.split('\n')[0]);
  const [A, B] = input.split('\n')[1].split(' ').map(x => parseInt(x, K));

  console.log(A * B);
};

main(readFileSync(0, 'utf-8'));