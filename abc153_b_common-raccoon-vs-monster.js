// https://atcoder.jp/contests/abc153/tasks/abc153_b

const main = input => {
  const inputArray = input.split('\n');
  const [ H, N ] = inputArray[0].split(' ').map(input => parseInt(input, 10));
  let A = inputArray[1].split(' ').map(input => parseInt(input, 10));

  const sumA = A.reduce((sum, current) => sum + current);

  if(sumA >= H) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));