// https://atcoder.jp/contests/agc054/editorial/2165

const main = input => {
  let [N, S] = input.trim().split('\n');
  N = parseInt(N);
  S = S.split('');

  let answer = -1;

  if(S[0] !== S[N-1]) {
    answer = 1;
  } else {
    for(let i = 1; i < N-1; i++) {
      if(S[0] !== S[i] && S[0] !== S[i+1]) {
        answer = 2;
        break;
      }
    }
  }

  console.log(answer);
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));