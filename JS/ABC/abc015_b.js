// https://atcoder.jp/contests/abc015/tasks/abc015_2

const main = input => {
  let N = parseInt(input.split('\n')[0], 10);
  const bugNumArr = input.split('\n')[1].split(' ').map(x => parseInt(x, 10));

  let sum = 0;
  for(let value of bugNumArr) {
    if(value === 0) N--;
    sum += value;
  }

  console.log(Math.ceil(sum / N));
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));