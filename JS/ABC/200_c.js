const main = (input) => {
  let [N, A] = input.split("\n");
  N = parseInt(N);
  A = A.split(" ").map((val) => parseInt(val) % 200);

  B = Array(200).fill(0);
  A.forEach((val) => B[val]++);
  res = B.reduce((total, val) => total + (val * (val - 1)) / 2, 0);

  console.log(res);
};

main(require("fs").readFileSync("/dev/stdin", "utf-8"));
