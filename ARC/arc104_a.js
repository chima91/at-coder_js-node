// https://atcoder.jp/contests/arc104/tasks/arc104_a

const main = input => {
  const [ A, B ] = input.split(' ').map(x => parseInt(x));

  const X = (A+B) / 2;
  const Y = (A-B) / 2;

  console.log(X, Y);
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));