// https://atcoder.jp/contests/abc177/tasks/abc177_a

const main = input => {
  const [ D, T, S ] = input.split(' ').map(input => parseInt(input, 10));

  let time = D / S;
  if(time <= T) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));