// https://atcoder.jp/contests/abc184/tasks/abc184_b

const main = input => {
  let [N, X] = input.split('\n')[0].split(' ').map(x => parseInt(x, 10));
  const S = input.split('\n')[1].split('');

  S.forEach(s => {
    if(s === 'o') {
      X++;
    } else if(s === 'x' && X !== 0) {
      X--;
    }
  });

  console.log(X);
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));