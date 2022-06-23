const main = (input) => {
  // const _input = input.split("\n");
  // const [R, C] = _input[0].split(" ");
  // const [A11, A12] = _input[1].split(" ");
  // const [A21, A22] = _input[2].split(" ");

  // const arr = [
  //   [A11, A12],
  //   [A21, A22],
  // ];

  const [[R, C], ...A] = input
    .trim()
    .split("\n")
    .map((x) => x.split(" ").map(Number));

  console.log(A[R - 1][C - 1]);
};

main(require("fs").readFileSync("/dev/stdin", "utf-8"));
