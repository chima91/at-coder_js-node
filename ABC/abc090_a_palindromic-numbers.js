// https://atcoder.jp/contests/abc090/tasks/abc090_b

const main = input => {
  const [A, B] = input.split(' ').map(x => parseInt(x, 10));

  let count = 0;
  for(let i = A; i <= B; i++) {
    if(i == String(i).split('').reverse().join('')) count++;
    // console.log(i, String(i).split('').reverse().join(''));
  }
  console.log(`\n${count}`);
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));