// https://atcoder.jp/contests/abc081/tasks/abc081_b

const main = (stdin) => {
  let nums = stdin.split('\n')[1].split(' ').map(num => parseInt(num, 10));

  let count = 0;

  while(nums.every(num => num % 2 === 0)) {
    count++;
    nums = nums.map(num => num / 2);
  }

  return count;
}

const result = main(require('fs').readFileSync('/dev/stdin', 'utf-8'));
console.log('\n' + result);

