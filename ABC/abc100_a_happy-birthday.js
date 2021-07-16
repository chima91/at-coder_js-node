// https://atcoder.jp/contests/abc100/tasks/abc100_a

const main = input => {
  const [ A, B ] = input.split(' ').map(input => parseInt(input, 10));

  (A <= 8 && B <= 8) ? console.log('Yay!') : console.log(':(')
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));