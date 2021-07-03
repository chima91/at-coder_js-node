const main = stdin => {
  const stdinArray = stdin.split('\n');
  const N = parseInt(stdinArray[0], 10);
  const A = stdinArray[1].split(' ');
  const numbers = A.map(str => parseInt(str, 10));

  let count = 0;
  for(let i = 0; i < numbers.length; i++) {
    for(let j = i+1; j < numbers.length; j++) {
      if((numbers[i] - numbers[j]) % 200 === 0) count++;
    }
  }

  console.log('\n' + count);
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));