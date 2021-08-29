// https://atcoder.jp/contests/abc148/tasks/abc148_c

const GCD = (a, b) => {
  if(b === 0) return a;
  else return GCD(b, a % b);
};

const main = input => {
  let [ A, B ] = input.split(' ').map(input => parseInt(input));

  console.log(A / GCD(A, B) * B);
};

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));