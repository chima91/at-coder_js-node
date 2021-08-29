// https://atcoder.jp/contests/abc188/editorial

const main = input => {
  let [ X, Y ] = input.split(' ').map(input => parseInt(input));

  if(Math.abs(X - Y) < 3) console.log('Yes');
  else console.log('No');
};

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));