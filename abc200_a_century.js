// https://atcoder.jp/contests/abc200/tasks/abc200_a

const main = stdin => {
  const N = parseInt(stdin);

  console.log('\n' + Math.floor((N + 99) / 100));
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));