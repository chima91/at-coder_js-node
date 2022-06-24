const main = (input) => {
  const _input = input.trim().split("\n");
  const N = Number(_input[0]);
  const A = _input[1].split(/\s+/).map((i) => i - 0);

  for (let i = 0; i < 2001; i++) {
    if (!A.includes(i)) {
      console.log(i);
      return;
    }
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf-8"));
