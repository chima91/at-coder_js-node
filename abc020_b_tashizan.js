// https://atcoder.jp/contests/abc020/tasks/abc020_b

const main = stdin => {
  const input = stdin.trim().split('\n')
  const [A, B] = input[0].trim().split(' ')
  console.log(parseInt(A + B) * 2)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"))