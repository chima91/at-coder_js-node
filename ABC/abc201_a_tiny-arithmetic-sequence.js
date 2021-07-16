// https://atcoder.jp/contests/abc201/tasks/abc201_a

const main = input => {
  let inputArray = input.split(' ').map(input => parseInt(input, 10));
  inputArray.sort((a, b) => a - b);

  let answer = 'No';
  if((inputArray[2] - inputArray[1]) === (inputArray[1] - inputArray[0])) answer = 'Yes';
  console.log(answer);
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));