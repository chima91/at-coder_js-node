function main(input) {
  const T = "oxx".repeat(10 ** 5);
  const reg = new RegExp(input);

  if (reg.test(T)) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf-8").trim());
