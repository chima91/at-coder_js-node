const main = (input) => {
  const _input = input.split("\n");
  const [X, N] = _input[0].split(" ").map(Number);
  const p = _input[1].split(" ").map(Number);

  for (let d = 0; d < X + 1; d++) {
    for (let s of [-1, 1]) {
      ans = X + d * s;
      if (!p.includes(ans)) {
        console.log(ans);
        return;
      }
    }
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf-8"));
