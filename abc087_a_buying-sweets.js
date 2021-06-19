const main = stdin => {
  const stdinArray = stdin.split('\n');
  const money = parseInt(stdinArray[0], 10);
  const cakeCost = parseInt(stdinArray[1], 10);
  const donutCost = parseInt(stdinArray[2], 10);

  for(let i = 1; i < 10000; i++) {
    let sum = cakeCost + (donutCost * i);
    if(sum > money) return (money - sum + donutCost);
  }
};

const result = main(require('fs').readFileSync('/dev/stdin', 'utf-8'));
console.log('\n' + result);