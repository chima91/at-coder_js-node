// https://atcoder.jp/contests/abc025/tasks/abc025_b

const main = input => {
  let inputArr = input.trim().split('\n');
  let [N, A, B] = inputArr.shift().split(' ').map(x => parseInt(x, 10));

  const moves = [];
  inputArr.forEach(item => {
    moves.push({
      direction: item.split(' ')[0],
      distance: parseInt(item.split(' ')[1])
    });
  });

  let position = 0;

  moves.forEach(item => {
    if(item.distance < A) {
      item.direction === 'West' ? position += (A * -1) : position += A;
    } else if(item.distance > B) {
      item.direction === 'West' ? position += (B * -1) : position += B;
    } else {
      item.direction === 'West' ? position += (item.distance * -1) : position += item.distance;
    }
  })

  if(position > 0) {
    console.log('East', position);
  } else if(position < 0) {
    console.log('West', Math.abs(position));
  } else {
    console.log(0);
  }
};

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));