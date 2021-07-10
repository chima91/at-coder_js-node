// https://atcoder.jp/contests/abc209/tasks/abc209_a

const main = input => {
  const inputArray = input.split(' ').map(input => parseInt(input, 10));
  let [ A, B ] = inputArray;

  let count = 0;
  for(let i = A; i <= B; i++) {
    count++;
  }
  console.log(count);
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));