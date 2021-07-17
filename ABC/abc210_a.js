// https://atcoder.jp/contests/abc210/tasks/abc210_a

const main = input => {
  let [ N, A, X, Y ] = input.split(' ').map(input => parseInt(input));

  if(N > A) {
    console.log(A * X + (N - A) * Y);
  } else {
    console.log(N * X);
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));