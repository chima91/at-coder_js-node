// https://atcoder.jp/contests/abc088/tasks/abc088_a

const main = stdin => {
  const stdinArray = stdin.split('\n');
  const amountOfPayment = parseInt(stdinArray[0], 10);
  const oneYenCoinNum = parseInt(stdinArray[1], 10);

  let count = 0;
  for(let fiveHundredCoinNum = 0; fiveHundredCoinNum <= 20; fiveHundredCoinNum++) {
    if((amountOfPayment % (500 * fiveHundredCoinNum)) <= oneYenCoinNum) count++;
  }

  if(count >= 1) {
    console.log('\nYes');
  } else {
    console.log('\nNo');
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));