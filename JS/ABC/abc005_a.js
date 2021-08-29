// https://atcoder.jp/contests/abc005/tasks/abc005_1

const main = input => {
  const [x, y] = input.split(' ');

  console.log(Math.floor(y / x));
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));