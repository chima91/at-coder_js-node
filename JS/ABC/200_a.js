const main = (input) => {
  const N = parseInt(input, 10);

  const ans = Math.ceil(N / 100);
  console.log(ans);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
