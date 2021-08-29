// function main(input) {
//   const args = input.split(' ');  // String.prototype.split()は指定した区切り文字で引数を配列に分割する関数。
//   const a = parseInt(args[0], 10);  // parseInt()は文字列を整数に変換するグローバル関数。第2引数（基数, 底）は省略してもだいたい10になる
//   const b = parseInt(args[1], 10);

//   if ((a * b) % 2 === 0) {
//       console.log('\nEven');
//   } else {
//       console.log('\nOdd');
//   }
// }

// main(require('fs').readFileSync('/dev/stdin', 'utf8'));  // /dev/stdinは入力装置をファイルとして操作できるようにしたもの。



const main2 = () => {
  const a = process.argv[2];  // Nodeではコマンドライン引数をprocess.argv[index]で取得することができる。
  const b = process.argv[3];

  if(((a * b) % 2 === 0) && (a * b)) {
    console.log('even');
  } else if(((a * b) % 2 !== 0) && (a * b)) {
    console.log('odd');
  } else {
    console.log('コマンドライン引数に数値を入力してください。');
  }
}

main2();