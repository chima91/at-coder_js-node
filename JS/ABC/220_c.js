const main = (input) => {
  const _input = input.trim().split("\n");
  const A = _input[1].split(" ").map((x) => BigInt(x));
  const X = BigInt(_input[2]);

  const sumA = A.reduce((a, c) => a + c);

  let k = (X / sumA) * BigInt(A.length);
  let sum = sumA * (X / sumA);

  let i = 0;
  while (sum <= X) {
    sum += A[i++];
    k++;
  }

  console.log(k.toString());
};

main(require("fs").readFileSync("/dev/stdin", "utf-8"));
