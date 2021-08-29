// https://atcoder.jp/contests/abc207/tasks/abc207_a

const main = input => {
  const A = parseInt(input.split(' ')[0], 10);
  const B = parseInt(input.split(' ')[1], 10);
  const C = parseInt(input.split(' ')[2], 10);

  console.log('\n' + Math.max(A+B, B+C, C+A));
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));