// https://atcoder.jp/contests/abc045/tasks/abc045_a

const main = input => {
  const [a, b, h] = input.trim().split('\n').map(x => parseInt(x, 10));

  console.log((a + b) * h / 2);
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));