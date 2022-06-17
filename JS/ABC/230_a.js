function main(input) {
  let N = parseInt(input, 10);
  if (N < 42) {
    console.log("AGC" + ("000" + N).slice(-3));
  } else {
    console.log("AGC" + ("000" + (N + 1)).slice(-3));
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
