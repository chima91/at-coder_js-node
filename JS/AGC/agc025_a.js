// https://atcoder.jp/contests/agc025/tasks/agc025_a

const main = input => {
  const N = input.trim();
  const arrayN = N.split('').map(x => parseInt(x));
  const sum = arrayN.reduce((accum, current) => accum + current);

  if(N.match(/^10+$/)) {
    console.log(10);
  } else {
    console.log(sum);
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));