// https://atcoder.jp/contests/abc213/tasks/abc213_b

const main = input => {
  const inputArray = input.split('\n');
  const N = inputArray[0];
  const Aarr = inputArray[1].split(' ').map(x => parseInt(x));

  let objArr = [];
  Aarr.forEach((item, index) => {
    objArr.push({
      i: index,
      num : item
    });
  })

  let sortedArr = objArr.sort((a, b) => a.num - b.num);

  console.log(sortedArr[N-2].i + 1);
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));