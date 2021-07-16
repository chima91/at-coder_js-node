// https://atcoder.jp/contests/abc062/tasks/abc062_a

const main = input => {
  const [ x, y ] = input.split(' ').map(input => parseInt(input));

  const groupNumber = [0, 1, 3, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1];
  if(groupNumber[x] === groupNumber[y]) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));