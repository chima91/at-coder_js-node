// https://atcoder.jp/contests/abc128/tasks/abc128_b

const main = input => {
  const inputArray = input.trim().split('\n');
  const N = parseInt(inputArray.shift());
  let restaurants = [];
  for(let i = 0; i < N; i++) {
    restaurants.push({
      id: i+1,
      city: inputArray[i].split(' ')[0],
      point: inputArray[i].split(' ')[1]
    })
  }

  restaurants.sort((a, b) => {
    if(a.city !== b.city) {
      if(a.city > b.city) {
        return 1;
      } else {
        return -1;
      }
    } else {
      return (a.point - b.point) * -1;
    }
  });

  restaurants.forEach(r => {
    console.log(r.id);
  })
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));