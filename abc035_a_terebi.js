// https://atcoder.jp/contests/abc035/tasks/abc035_a

const GCD = (w, h) => {
  if(h === 0) {
    return w;
  } else {
    return GCD(h, w % h);
  }
}

const main = input => {
  let [ W, H ] = input.trim().split(' ').map(input => parseInt(input, 10));

  let width = W;
  let height = H;

  while(GCD(W, H) !== 1) {
    width = W / GCD(W, H);
    height = H / GCD(W, H);
    W /= GCD(W, H);
    H /= GCD(W, H);
  }

  console.log(`${width}:${height}`);
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));