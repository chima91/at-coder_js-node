const main = (input) => {
  const [A, B, C] = input.split(" ").map(Number);

  for (let i = A; i <= B; i++) {
    if (i % C === 0) {
      console.log(i);
      return;
    }
  }

  console.log(-1);
};

main(require("fs").readFileSync("/dev/stdin", "utf-8"));
