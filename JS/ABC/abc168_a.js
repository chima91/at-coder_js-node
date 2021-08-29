// https://atcoder.jp/contests/abc168/tasks/abc168_a

const main = input => {
  const N = parseInt(input.trim());

  switch(N % 10) {
    case 2:
    case 4:
    case 5:
    case 7:
    case 9:
      console.log('hon');
      break;
    case 0:
    case 1:
    case 6:
    case 8:
      console.log('pon');
      break;
    case 3:
      console.log('bon');
      break;
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));