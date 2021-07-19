// https://atcoder.jp/contests/abc154/tasks/abc154_a

const main = input => {
  const inputArray = input.trim().split('\n');
  const [S, T] = inputArray[0].split(' ');
  let [A, B] = inputArray[1].split(' ').map(x => parseInt(x));
  const U = inputArray[2];

  if(U === S) {
    console.log(A-1, B);
  } else {
    console.log(A, B-1);
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));