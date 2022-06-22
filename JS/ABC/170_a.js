const main = (input) => {
  const [x1, x2, x3, x4, x5] = input.split(" ").map(Number);
  const arr = [x1, x2, x3, x4, x5];

  for (i in arr) {
    if (arr[i] === 0) console.log(Number(i) + 1);
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf-8").trim());
