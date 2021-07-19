// https://atcoder.jp/contests/abc206/tasks/abc206_b

const main = input => {
  const N = parseInt(input.trim());

  let sum = 0;
  for(let i = 1; i <= N; i++) {
    sum += i;
    if(sum >= N) {
      console.log(i);
      break;
    }
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));