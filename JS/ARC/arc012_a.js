// https://atcoder.jp/contests/arc012/tasks/arc012_1

const main = input => {
  const day = input.trim();

  let answer = 0;
  switch(day) {
    case 'Monday':
      answer = 5;
      break;
    case 'Tuesday':
      answer = 4;
      break;
    case 'Wednesday':
      answer = 3;
      break;
    case 'Thursday':
      answer = 2;
      break;
    case 'Friday':
      answer = 1;
      break;
    default:
      answer = 0;
  }

  console.log(answer);
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));