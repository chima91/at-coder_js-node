// https://atcoder.jp/contests/abc001/tasks/abc001_1

const main = input => {
  const inputArray = input.split('\n');
  const H1 = parseInt(inputArray[0], 10);
  const H2 = parseInt(inputArray[1], 10);

  console.log(H1 - H2);
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));