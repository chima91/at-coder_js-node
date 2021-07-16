// https://atcoder.jp/contests/abc085/tasks/abc085_c

const main = stdin => {
  const stdinArray = stdin.trim().split(' ');
  const N = parseInt(stdinArray[0], 10);
  const Y = parseInt(stdinArray[1], 10);

  let result = '-1 -1 -1';

  for(let yukichi = 0; yukichi <= N; yukichi++) {
    for(let higuchi = 0; higuchi <= N; higuchi++) {
      if((yukichi + higuchi) > N) continue;

      let sum = (yukichi * 10000) + (higuchi * 5000) + ((N - yukichi - higuchi) * 1000);
      if(sum === Y) {
        result = `${yukichi} ${higuchi} ${N - yukichi - higuchi}`;
        break;
      }
    }
  }

  console.log('\n' + result);
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));