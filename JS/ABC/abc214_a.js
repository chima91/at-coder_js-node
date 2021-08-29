// https://atcoder.jp/contests/abc214/tasks/abc214_a

const main = input => {
  const N = parseInt(input, 10);

  if(N >= 1 && N <= 125) {
    console.log(4);
  } else if(N >= 126 && N <= 211) {
    console.log(6);
  } else {
    console.log(8);
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));