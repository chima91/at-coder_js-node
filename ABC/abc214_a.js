const main = input => {
  const [A, B, C] = input.trim().split(' ').map(x => parseInt(x));

  (A + B + 1 >= C) ? console.log(B + C) : console.log(B + (A + B + 1));
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));