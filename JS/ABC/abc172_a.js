// https://atcoder.jp/contests/abc172/tasks/abc172_a

const main = input => {
  const num = parseInt(input);
  console.log(num + num**2 + num**3);
};

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));