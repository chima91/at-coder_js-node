// https://atcoder.jp/contests/abc005/tasks/abc005_2

const main = input => {
  const takoArr = input.split('\n').map(x => parseInt(x, 10));
  const N = takoArr.shift();

  const answer = takoArr.sort((a, b) => a - b)[0];

  console.log(answer);
};

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));