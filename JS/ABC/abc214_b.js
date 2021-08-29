const main = input => {
  const [S, T] = input.trim().split(' ').map(x => parseInt(x));

  let count = 0;

  for(let a = 0; a < 101; a++) {
    for(let b = 0; b < 101; b++) {
      for(let c = 0; c < 101; c++) {
        if((a + b + c) <= S && (a * b * c) <= T) count++;
      }
    }
  }

  console.log(count);
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));