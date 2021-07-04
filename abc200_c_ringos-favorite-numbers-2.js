const main = stdin => {
  const stdinArray = stdin.split('\n');
  const A = stdinArray[1].split(' ');
  const numbers = A.map(str => parseInt(str, 10));

  let count = 0;
  let obj = {};
  numbers.forEach(number => {
    number = +number % 200;
    if(!obj[number]) obj[number] = 0;
    count += obj[number];
    obj[number]++;
  })

  console.log('\n' + count);
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));