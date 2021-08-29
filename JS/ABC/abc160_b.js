// https://atcoder.jp/contests/abc160/tasks/abc160_b

const main = input => {
  const money = input;

  const count500 = money / 500;
  const count5 = (money % 500) / 5;

  console.log(Math.floor(count500) * 1000 + Math.floor(count5) * 5);
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));