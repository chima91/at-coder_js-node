// https://atcoder.jp/contests/abc209/tasks/abc209_b

const main = input => {
  const inputArray = input.split('\n');
  const [ N, X ] = inputArray[0].split(' ').map(input => parseInt(input, 10));
  const cost = inputArray[1].split(' ').map(input => parseInt(input, 10));

  const mapCost = cost.map((itemCost, index) => {
    if((index+1) % 2 === 0) {
      return itemCost = itemCost - 1;
    } else {
      return itemCost;
    }
  });

  const total = mapCost.reduce((sum, element) => {
    return sum + element;
  }, 0)

  if(total <= X) {
    console.log('\n' + 'Yes');
  } else {
    console.log('\n' + 'No');
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));