// https://atcoder.jp/contests/abc015/tasks/abc015_2

const main = input => {
  let N = parseInt(input.split('\n')[0], 10);
  const bugNumArr = input.split('\n')[1].split(' ').map(x => parseInt(x, 10));

  let sum = 0;
  bugNumArr.forEach(item => {
    if(item === 0) N--;
    sum += item;
  })

  console.log(Math.ceil(sum / N));
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));