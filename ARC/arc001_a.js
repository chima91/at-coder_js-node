// https://atcoder.jp/contests/arc001/tasks/arc001_1

const main = input => {
  const inputArray = input.split('\n');
  const N = parseInt(inputArray[0]);
  let c = inputArray[1].split('').map(c => parseInt(c));

  const count1 = c.filter(c => c === 1).length;
  const count2 = c.filter(c => c === 2).length;
  const count3 = c.filter(c => c === 3).length;
  const count4 = c.filter(c => c === 4).length;

  console.log(`${Math.max(count1, count2, count3, count4)} ${Math.min(count1, count2, count3, count4)}`);
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));