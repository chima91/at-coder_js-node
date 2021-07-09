// https://atcoder.jp/contests/abc203/tasks/abc203_a

const main = input => {
  const inputArray = input.split(' ').map(input => parseInt(input, 10));
  let [ a, b, c ] = inputArray;

  if(a === b) {
    console.log(c);
  } else if (b === c) {
    console.log(a);
  } else if(c === a) {
    console.log(b);
  } else {
    console.log(0);
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));