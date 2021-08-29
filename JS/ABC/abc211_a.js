// https://atcoder.jp/contests/abc211/tasks/abc211_a

const main = input => {
  const [A, B] = input.split(' ').map(x => parseInt(x));

  console.log((A - B) / 3 + B);
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));