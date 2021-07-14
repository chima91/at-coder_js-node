// https://atcoder.jp/contests/abc084/tasks/abc084_b

const main = input => {
  const inputArray = input.split('\n');
  const [ A, B ] = inputArray[0].split(' ').map(input => parseInt(input, 10));
  const S = inputArray[1];

  let answer = 'No';

  const regex = /^\d{1,5}-\d{1,5}$/;
  if((regex.test(S)) && (S.indexOf('-') === (A+1)-1)) answer = 'Yes';

  console.log(`\n${answer}`);
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));