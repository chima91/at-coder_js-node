// https://atcoder.jp/contests/arc031/tasks/arc031_1

const main = input => {
  const NAME = input.trim();

  let answer = 'NO';
  if(NAME === NAME.split('').reverse().join('')) answer = 'YES';
  console.log(answer);
};

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));