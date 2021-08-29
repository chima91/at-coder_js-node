// https://atcoder.jp/contests/abc030/tasks/abc030_b

const main = input => {
  let [ n, m ] = input.trim().split(' ').map(input => parseFloat(input));
  if(n > 12) n -= 12;

  const nOneHour = 360/12;
  const mOneMinute = 360/60;

  const nAngle = (n * nOneHour) + (m/60 * nOneHour);
  const mAngle = m * mOneMinute;

  const angleSubtraction = Math.abs(nAngle - mAngle);

  if(angleSubtraction > 180) {
    console.log(360 - angleSubtraction);
  } else {
    console.log(angleSubtraction);
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));