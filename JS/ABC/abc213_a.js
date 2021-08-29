// https://atcoder.jp/contests/abc213/tasks/abc213_a

const main = input => {
  const [A, B] = input.split(' ').map(x => parseInt(x, 10));

  console.log(A ^ B);
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));