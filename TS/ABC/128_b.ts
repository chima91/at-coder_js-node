// https://atcoder.jp/contests/abc128/tasks/abc128_b

import { readFileSync } from "fs";

const main = (input: string) => {
  const inputArr: string[] = input.split('\n');
  const N: number = parseInt(inputArr.shift()!);

  let restaurants: {
    id: number,
    cityName: string,
    point: number
  }[] = [];
  for(let i = 0; i < N; i++) {
    restaurants.push({
      id: i+1,
      cityName: inputArr[i].split(' ')[0],
      point: +inputArr[i].split(' ')[1]
    })
  }

  restaurants.sort((a, b) => {
    if(a.cityName !== b.cityName) {
      if(a.cityName > b.cityName) {
        return 1;
      } else {
        return -1;
      }
    } else {
      return (a.point - b.point) * -1;
    }
  })

  restaurants.forEach(restaurant => {
    console.log(restaurant.id);
  })
}

main(readFileSync(0, 'utf-8'));