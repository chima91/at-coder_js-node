// https://atcoder.jp/contests/abc082/tasks/abc082_a

const main = input => {
  const [a, b] = input.split(' ').map(x => parseInt(x, 10));

  const mean = (a + b) / 2;
  console.log(`\n${Math.ceil(mean)}`);
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));