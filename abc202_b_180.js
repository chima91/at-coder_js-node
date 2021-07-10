// https://atcoder.jp/contests/abc202/tasks/abc202_b

const main = input => {
  let S = input;

  S = S.split('').reverse().join('');
  if(S.match(/[6]/)) S = S.replace(/[6]/g, 'x');
  if(S.match(/[9]/)) S = S.replace(/[9]/g, '6');
  if(S.match(/[x]/)) S = S.replace(/[x]/g, '9');
  console.log('\n' + S);
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));