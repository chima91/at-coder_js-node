const main = stdin => {
  const stdinArray = stdin.split(' ');
  const A = parseInt(stdinArray[0], 10),
        B = parseInt(stdinArray[1], 10),
        C = parseInt(stdinArray[2], 10),
        D = parseInt(stdinArray[3], 10);

  if((A + B) > (C + D)) {
    console.log('\nLeft');
  } else if((A + B) === (C + D)) {
    console.log('\nBalanced');
  } else {
    console.log('\nRight');
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));