// https://atcoder.jp/contests/abc054/tasks/abc054_a

const main = input => {
  let [ A, B ] = input.trim().split(' ').map(input => parseInt(input, 10));

  if(A === 1) A = 14;
  if(B === 1) B = 14;

  if(A > B) {
    console.log('Alice' + '\n');
  } else if(A < B) {
    console.log('Bob' + '\n');
  } else {
    console.log('Draw' + '\n');
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));