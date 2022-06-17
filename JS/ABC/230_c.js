function main(input) {
  const [[N, A, B], [P, Q, R, S]] = input
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map((str) => BigInt(str)));

  for (let i = P; i <= Q; i++) {
    let ans = "";
    for (let j = R; j <= S; j++) {
      ans += A + B == i + j || A - B == i - j ? "#" : ".";
    }
    console.log(ans);
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
