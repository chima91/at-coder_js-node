// https://atcoder.jp/contests/abc135/tasks/abc135_a

const main = input => {
  const [ A, B ] = input.split(' ').map(x => parseInt(x));

  if(A % 2 !== B % 2) {
    console.log('IMPOSSIBLE');
  } else {
    console.log((A + B) / 2);
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));