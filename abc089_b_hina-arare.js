// https://atcoder.jp/contests/abc089/tasks/abc089_b

const main = input => {
  const inputArray = input.split('\n');
  const N = parseInt(inputArray[0], 10);
  const S = inputArray[1].split(' ');

  const countP = S.filter(s => s === 'P').length;
  const countW = S.filter(s => s === 'W').length;
  const countG = S.filter(s => s === 'G').length;
  const countY = S.filter(s => s === 'Y').length;

  if(countP && countW && countG && countY) {
    console.log('Four')
  } else {
    console.log('Three')
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));