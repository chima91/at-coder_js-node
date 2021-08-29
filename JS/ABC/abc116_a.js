// https://atcoder.jp/contests/abc116/tasks/abc116_a

const main = input => {
  const [ab, bc, ca] = input.trim().split(' ').map(x => parseInt(x));

  console.log(ab * bc / 2);
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));