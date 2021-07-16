// https://atcoder.jp/contests/abc070/tasks/abc070_b

const main = input => {
  const [A, B, C, D] = input.trim().split(' ').map(x => parseInt(x));

  if(D <= B && C >= A) {
    console.log(D - C);
  } else if(D >= B && C <= A) {
    console.log(B - A);
  } else if(D > B && C <= B) {
    console.log(B - C);
  } else if(B > D && A <= D) {
    console.log(D - A);
  } else {
    console.log(0);
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));