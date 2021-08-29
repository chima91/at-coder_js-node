// https://atcoder.jp/contests/arc053/tasks/arc053_a

const main = input => {
  const [H, W] = input.trim().split(' ').map(x => parseInt(x));

  console.log(H*(W-1) + W*(H-1));
};

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));