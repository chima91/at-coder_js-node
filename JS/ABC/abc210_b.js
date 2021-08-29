// https://atcoder.jp/contests/abc210/tasks/abc210_b

const main = input => {
  const [ N, S ] = input.split('\n');

  if(S.indexOf('1') % 2 == 0) {
    console.log('Takahashi');
  } else {
    console.log('Aoki');
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));