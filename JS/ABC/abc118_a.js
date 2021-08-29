// https://atcoder.jp/contests/abc118/tasks/abc118_a

const main = input => {
  const [A, B] = input.trim().split(' ').map(x => parseInt(x));

  if(B % A === 0) {
    console.log(A + B);
  } else {
    console.log(B - A);
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));