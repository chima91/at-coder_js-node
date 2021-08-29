// https://atcoder.jp/contests/abc204/tasks/abc204_a

const main = input => {
  const x = parseInt(input.split(' ')[0], 10);
  const y = parseInt(input.split(' ')[1], 10);

  if(x === y) {
    console.log(x);
  } else {
    console.log(3-x-y);
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));