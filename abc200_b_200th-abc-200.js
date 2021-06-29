// https://atcoder.jp/contests/abc200/tasks/abc200_b

const main = stdin => {
  const stdinArray = stdin.split(' ');
  let N = parseInt(stdinArray[0], 10);
  const K = parseInt(stdinArray[1], 10);

  for(let i = 0; i < K; i++) {
    if((N % 200) === 0) {
      N /= 200;
    } else {
      N = (N * 1000) + 200;
    }
  }

  console.log('\n' + N);
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));