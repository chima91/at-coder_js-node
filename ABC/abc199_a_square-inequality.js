// https://atcoder.jp/contests/abc199/tasks/abc199_a

const main = input => {
  const [A, B, C] = input.split(' ').map(x => parseInt(x, 10));

  let answer = 'No';
  if((A**2 + B**2) < C**2) answer = 'Yes';

  console.log(`\n${answer}`);
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));