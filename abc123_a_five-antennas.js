// https://atcoder.jp/contests/abc123/tasks/abc123_a

const main = input => {
  let inputArray = input.trim().split('\n');
  let k = parseInt(inputArray.pop());

  console.log(inputArray.pop() - inputArray.shift() > k ? ':(' : 'Yay!');
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));