// https://atcoder.jp/contests/abc208/tasks/abc208_a

const main = stdin => {
  const stdinArray = stdin.split(' ');
  const A = parseInt(stdinArray[0], 10);
  const B = parseInt(stdinArray[1], 10);

  if((A*1) <= B && (A*6) >= B) {
    console.log('\n' + 'Yes');
  } else {
    console.log('\n' + 'No');
  };
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));