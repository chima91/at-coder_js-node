const main = (input) => {
  const _input = input.trim().split("\n");
  const K = Number(_input[0]);
  const [A, B] = _input[1].split(" ").map((x) => parseInt(x, K));

  console.log(A * B);
};

main(require("fs").readFileSync("/dev/stdin", "utf-8"));
