// https://atcoder.jp/contests/abc205/tasks/abc205_c

const main = input => {
  let [ A, B, C ] = input.split(' ').map(input => parseInt(input));

  if(C % 2 === 0) {
    if(Math.abs(A) > Math.abs(B)) {
      console.log('>');
    } else if(Math.abs(A) < Math.abs(B)) {
      console.log('<');
    } else {
      console.log('=');
    }
  } else {
    if(A > B) {
      console.log('>');
    } else if(A < B) {
      console.log('<');
    } else {
      console.log('=');
    }
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));