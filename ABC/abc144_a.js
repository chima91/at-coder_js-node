// https://atcoder.jp/contests/abc144/tasks/abc144_a

const main = input => {
  const [A, B] = input.split(' ').map(x => parseInt(x));

  let answer = -1;
  if(A <= 9 && B <= 9) {
    answer = A * B;
  }

  console.log(answer);
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));