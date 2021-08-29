// https://atcoder.jp/contests/abc201/tasks/abc201_b

const main = input => {
  let inputArray = input.trim().split('\n');
  const N = inputArray.shift();

  let mountains = [];
  for(let i = 0; i < N; i++) {
    let s = inputArray[i].split(' ')[0];
    let t = inputArray[i].split(' ')[1];
    mountains.push({
      name: s,
      height: parseInt(t)
    });
  }

  console.log(mountains.sort((a, b) => b.height - a.height)[1].name);
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));