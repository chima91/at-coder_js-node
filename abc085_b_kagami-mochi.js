// https://atcoder.jp/contests/abc085/tasks/abc085_b

const main = stdin => {
  const stdinArray = stdin.split('\n');
  const nums = stdinArray.slice(1, (stdinArray.length - 1));

  console.log('\n' + nums.filter((num, index) => nums.indexOf(num) === index).length);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));