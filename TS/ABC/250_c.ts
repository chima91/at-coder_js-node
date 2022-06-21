// % npx ts-node 250_c.ts

import * as fs from "fs";

const main = (input: string) => {
  const lines = input.split("\n");
  const [N, Q] = lines[0].split(" ").map(Number);
  const a = Array(N);
  const pos = new Map<number, number>();

  for (let i = 0; i < N; i++) {
    a[i] = i + 1;
    pos.set(i + 1, i);
  }

  for (let i = 0; i < Q; i++) {
    const x = +lines[i + 1];
    const p = pos.get(x);

    if (p === N - 1) {
      const tmp = a[p];
      pos.set(a[p], p - 1);
      pos.set(a[p - 1], p);
      a[p] = a[p - 1];
      a[p - 1] = tmp;
    } else {
      const tmp = a[p!];
      pos.set(a[p!], p! + 1);
      pos.set(a[p! + 1], p!);
      a[p!] = a[p! + 1];
      a[p! + 1] = tmp;
    }
  }

  console.log(a.join(" "));
};

main(fs.readFileSync("/dev/stdin", "utf-8"));
