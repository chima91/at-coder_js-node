// https://atcoder.jp/contests/abc112/tasks/abc112_b

let input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
const [ N, T ] = input.shift().split(' ');

let costMin = 1000;
let answer = 0;

for(let i = 0; i < N; i++) {
  let [ c, t ] = input[i].split(' ').map(x => parseInt(x));
  if(t <= T) {
    if(c <= costMin) {
      costMin = c;
      answer = 1;
    }
  }
}

console.log(answer ? costMin : 'TLE');