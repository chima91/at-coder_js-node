// https://atcoder.jp/contests/abc206/tasks/abc206_a

const main = input => {
  let N = parseInt(input, 10);

  N = Math.floor((N * 108) / 100);
  if(N > 206) {
    console.log('\n' + ':(');
  } else if(N === 206) {
    console.log('\n' + 'so-so');
  } else {
    console.log('\n' + 'Yay!');
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));