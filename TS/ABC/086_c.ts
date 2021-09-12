// https://atcoder.jp/contests/abc086/tasks/arc089_a

import { readFileSync } from "fs";

type Travel = {
  t: number,
  x: number,
  y: number,
}
const isValidParity = (p: Travel): boolean => {
  return (p.t % 2 === 0) === ((p.x + p.y) % 2 === 0)
}
const isValidDistance = (before: Travel, after: Travel): boolean => {
  const distance = Math.abs(before.x - after.x) + Math.abs(after.y - before.y)
  const timeDiff = Math.abs(before.t - after.t)
  return timeDiff - distance >= 0
}

const main = (input: string) => {
  const inputArr = input.split('\n')
  const N = Number(inputArr[0])
  const positions: Travel[] = [
      { t: 0, x: 0, y: 0 },
      ...inputArr
          .slice(1)
          .filter(line => line !== '')
          .map(line => {
          const splitted = line.split(' ')
          return {
              t: Number(splitted[0]),
              x: Number(splitted[1]),
              y: Number(splitted[2]),
          }
      })
  ]

  const isValidParityAll = positions.every(p => isValidParity(p))
  let isValidDistanceAll = true
  for(let i = 0; i < N; i++) {
      const before = positions[i]
      const after = positions[i+1]
      if(!isValidDistance(before, after)) {
        isValidDistanceAll = false;
        break;
      }
  }

  console.log(isValidParityAll && isValidDistanceAll ? 'Yes' : 'No')
}

main(readFileSync(0, 'utf-8'));