// https://atcoder.jp/contests/abc211/tasks/abc211_b

const main = input => {
  const S = input.split('\n');

  let answer = 'No';
  if(S.every((value, index, self) => self.indexOf(value) === index)) answer = 'Yes';
  console.log(answer);
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));