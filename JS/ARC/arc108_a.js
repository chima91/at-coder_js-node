// https://atcoder.jp/contests/arc108/tasks/arc108_a

const main = input => {
  const [ S, P ] = input.trim().split(' ').map(input => parseFloat(input));

  let answer = 'No';
  for(let i = 1; i <= Math.sqrt(P); i++) {
    if((i**2 - S*i + P) == 0) {
      answer = 'Yes';
      break;
    }
  }
  console.log(answer);
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));