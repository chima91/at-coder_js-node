// https://atcoder.jp/contests/abc208/tasks/abc208_b

const main = stdin => {
  let P = parseInt(stdin, 10);

  const factorial = num => (num === 0) ? 1 : (num * factorial(num - 1));

  let answer = 0;
  for(let i = 10; i > 0; i--) {
    while(factorial(i) <= P) {
      answer++;
      P -= factorial(i)
    }
  }
  console.log('\n' + answer)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));