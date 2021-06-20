const main = stdin => {
  const stdinArray = stdin.split('\n');
  const N = parseInt(stdinArray[0], 10);
  const cards = stdinArray[1].split(' ').map(card => parseInt(card, 10));

  let aliceScore = 0;
  let bobScore = 0

  cards.sort((a, b) => (a < b ? 1 : -1)).forEach((score, drawOrder) => {
    (drawOrder % 2 === 0) ? aliceScore += score : bobScore += score;
  })

  console.log('\n' + (aliceScore - bobScore));
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));
