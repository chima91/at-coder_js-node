// https://atcoder.jp/contests/abc086/tasks/abc086_b

const main = stdin => {
  let nums = stdin.split(' ');
  const consolidateNum = nums[0] + nums[1];

  if(Number.isInteger(Math.sqrt(consolidateNum))) {
    console.log('\nYes');
  } else {
    console.log('\nNo');
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));