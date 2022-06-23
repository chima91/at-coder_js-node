const main = (input) => {
  const [[N, K], A, ...XY] = input
    .split("\n")
    .map((item) => item.split(" ").map(Number));

  let ans = 0;
  for (let i = 0; i < N; i++) {
    let b = 10 ** 18;
    for (let j of A) {
      j -= 1;
      b = Math.min(
        b,
        Math.sqrt((XY[i][0] - XY[j][0]) ** 2 + (XY[i][1] - XY[j][1]) ** 2)
      );
    }
    ans = Math.max(ans, b);
  }
  console.log(ans);
};

main(require("fs").readFileSync("/dev/stdin", "utf-8"));
