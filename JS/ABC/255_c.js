const main = (input) => {
  let [X, A, D, N] = input.split(" ").map(BigInt);

  let l, r, ans;

  if (D >= 0n) {
    l = A;
    r = A + D * (N - 1n);
  } else {
    r = A;
    l = A + D * (N - 1n);
    D = -D;
  }

  if (X <= l) {
    ans = l - X;
  } else if (X >= r) {
    ans = X - r;
  } else {
    let b = (X - l) % D;
    let c = D - b;
    ans = b < c ? b : c;
  }

  console.log(ans.toString());
};

main(require("fs").readFileSync("/dev/stdin", "utf-8"));
