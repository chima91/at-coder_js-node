// https://atcoder.jp/contests/abc161/tasks/abc161_b

const main = input => {
  const inputArray = input.trim().split('\n');
  const [ N, M ] = inputArray[0].split(' ').map(x => parseInt(x));
  let A = inputArray[1].split(' ').map(x => parseInt(x));

  let answer = 'No';
  const sum = A.reduce((accum, curr) => accum + curr);
  if(A.sort((a,b) => b - a)[M-1] >= sum / (4*M)) {
    answer = 'Yes';
  }
  console.log(answer);
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));