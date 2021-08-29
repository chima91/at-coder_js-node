// https://atcoder.jp/contests/arc119/tasks/arc119_a

const main = input => {
  const N = BigInt(input.trim());

  let a = 0n;
  let b = 0n;
  let c = 0n;

  let answer = N;

  for(b; b < 60n; b++) {
    a = N / (2n**b);
    c = N - (a * (2n**b));
    if(a + b + c < answer) answer = a + b + c;
  }

  console.log(parseInt(answer));
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));