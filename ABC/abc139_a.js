// https://atcoder.jp/contests/abc139/tasks/abc139_a

const main = input => {
  const inputArr = input.split('\n');
  const SArr = inputArr[0].split('');
  const TArr = inputArr[1].split('');

  let count = 0;
  SArr.forEach(((s, index) => {
    if(s === TArr[index]) count++;
  }))

  console.log(count);
};

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));