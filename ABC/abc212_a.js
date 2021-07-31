const main = input => {
  const [ A, B ] = input.split(' ').map(x => parseInt(x));

  let answer = 'Alloy';
  if(A > 0 && B === 0) {
    answer = 'Gold';
  } else if(B > 0 && A === 0) {
    answer = 'Silver';
  }

  console.log(answer);
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));