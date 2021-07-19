// https://atcoder.jp/contests/abc203/tasks/abc203_b

const main = input => {
  const [N,K] = input.trim().split(' ').map(x => parseInt(x));

  let answer = 0;
  for(let i = 1; i <= N; i++) {
    for(let j = 1; j <= K; j++) {
      answer += 100*i + j;
    }
  }
  console.log(answer);
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));