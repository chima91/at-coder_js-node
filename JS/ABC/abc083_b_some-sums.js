// https://atcoder.jp/contests/abc083/tasks/abc083_b

const main = stdin => {
  const stdinArray = stdin.split(' ');
  const N = parseInt(stdinArray[0], 10);
  const A = parseInt(stdinArray[1], 10);
  const B = parseInt(stdinArray[2], 10);

  const reducer1 = (acc, cur) => acc + parseInt(cur);
  const nums = Array.from(new Array(N), (v, i) => ++i).filter(i => {
    let num = i.toString().split('').reduce(reducer1, 0);
    return (num >= A && num <= B)
  })

  const reducer2 = (acc, cur) => acc + cur;
  console.log('\n' + nums.reduce(reducer2, 0));
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));