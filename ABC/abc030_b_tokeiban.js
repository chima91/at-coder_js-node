// https://atcoder.jp/contests/abc030/tasks/abc030_b

const main = input => {
  let [ n, m ] = input.trim().split(' ').map(input => parseFloat(input));
  if(n > 12) n -= 12;

  const nOneMinute = 360/60;
  const nOneHour = 360/12;
  const mOneHour = 360/12;
  const mOneMinute = 360/12/60;

  const nAngle = (n * nOneHour) + (m * nOneMinute);
  const mAngle = (n * mOneHour) + (m * mOneMinute);

  console.log(n, m, nAngle, mAngle);

  // const angleSubtraction = Math.abs(nAngle - mAngle);

  // if(angleSubtraction > 180) {
  //   console.log(360 - angleSubtraction);
  // } else {
  //   console.log(angleSubtraction);
  // }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));