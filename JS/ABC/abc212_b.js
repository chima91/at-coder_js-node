const main = input => {
  const inputArray = input.split('').map(x => parseInt(x));

  let answer = 'Strong';
  let count1 = 0;
  let count2 = 0;
  for(let i = 0; i < inputArray.length; i++) {
    if(inputArray[i+1] === inputArray[i]) count1++;
    if(inputArray[i+1] - inputArray[i] === 1 || inputArray[i+1] - inputArray[i] === -9) count2++;

    if(count1 === 3 || count2 === 3) answer = 'Weak';
  }

  console.log(answer);
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));