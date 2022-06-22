const main = (input) => {
  const [X, Y] = input.split(" ").map(Number);

  for (let a = 0; a <= X; a++) {
    let b = X - a;
    if (2 * a + 4 * b === Y) {
      console.log("Yes");
      return;
    }
  }

  console.log("No");
};

main(require("fs").readFileSync("/dev/stdin", "utf-8"));
