// https://atcoder.jp/contests/arc012/tasks/arc012_2

const main = input => {
  let [N, va, vb, L] = input.trim().split(' ').map(x => parseInt(x));

  for(let i = 0; i < N; i++) {
    L = L / va * vb;
  }
  console.log(L);
};

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));