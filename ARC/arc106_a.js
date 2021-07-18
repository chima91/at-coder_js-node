// https://atcoder.jp/contests/arc106/tasks/arc106_a

const main = input => {
  const N = BigInt(input.trim());

  try {
    for(let a = 1; a <= 37; a++) {
      for(let b = 1; b <= 25; b++) {
        if((3n**BigInt(a) + 5n**BigInt(b)) == N) {
          console.log(a, b);
          throw new Error('aaaaa');
        }
      }
    }
    console.log(-1);
  } catch {
    const x = 1;
  }
};

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));