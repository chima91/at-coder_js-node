// https://atcoder.jp/contests/abc086/tasks/arc089_a

const main = stdin => {
  const stdinArray = stdin.split('\n');
  const N = parseInt(stdinArray[0], 10);
  const nums = stdinArray.slice(1, N+1);

  console.log(nums);

  if(true) {
    console.log('\nYes');
  } else {
    console.log('\nNo');
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));