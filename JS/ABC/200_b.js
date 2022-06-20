function main(input) {
  const _input = input.split(" ");
  let N = parseInt(_input[0]);
  const K = parseInt(_input[1]);

  for (let i = 0; i < K; i++) {
    N = N % 200 === 0 ? N / 200 : Number(`${N}200`);
  }
  console.log(N);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
