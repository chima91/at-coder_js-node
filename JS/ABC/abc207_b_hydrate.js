// https://atcoder.jp/contests/abc207/tasks/abc207_b

const main = input => {
  const A = parseInt(input.split(' ')[0], 10);
  const B = parseInt(input.split(' ')[1], 10);
  const C = parseInt(input.split(' ')[2], 10);
  const D = parseInt(input.split(' ')[3], 10);

  let blue = A;
  let red = 0;

  let answer = -1;
  for(let i = 1; i <= A; i++) {
    blue += B;
    red += C;
    if(blue <= red * D) {
      answer = i;
      break;
    }
  }
  console.log('\n' + answer);
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));