// https://atcoder.jp/contests/agc010/tasks/agc010_a

const input = require('fs').readFileSync('/dev/stdin', 'utf-8');
const numArr = input.split('\n')[1].split(' ').map(x => parseInt(x));

const sum = numArr.reduce((curr, accum) => accum += curr);
sum % 2 === 0 ? console.log('YES') : console.log('NO');