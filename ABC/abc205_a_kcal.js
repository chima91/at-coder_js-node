// https://atcoder.jp/contests/abc205/tasks/abc205_a

const main = input => {
  let A = parseInt(input.split(' ')[0], 10);
  let B = parseInt(input.split(' ')[1], 10);

  console.log('\n' + (A / 100) * B);
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));