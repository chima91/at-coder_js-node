// https://atcoder.jp/contests/abc035/tasks/abc035_a

const [W, H] = require('fs').readFileSync('/dev/stdin', 'utf-8').split(' ').map(x => parseInt(x));
console.log(W * 3 === H * 4 ? '4:3' : '16:9');