// https://atcoder.jp/contests/abc049/tasks/arc065_a

const main = stdin => {
  const splitReverseJoin = str => {
    return str.split('').reverse().join('');
    // Array.prototype.reverse()メソッドは、配列の要素の順番を反転させた配列を返す。
    // Array.prototype.join()メソッドは、配列の全要素を連結した文字列を返す。
  }

  const WORDS = ['dream', 'dreamer', 'erase', 'eraser'].map(splitReverseJoin);
  const S = splitReverseJoin(stdin.split('\n')[0]);

  let index = 0;

  while(true) {
    let w = WORDS.find(word => S.startsWith(word, index));
    // String.prototype.startsWith()メソッドは、文字列が指定された文字列で始まるかどうかをtrueかfalseで返す。
    if(!w) break;
    index += w.length;
  }

  if(S.length === index) {
    console.log('\n' + 'YES');
  } else {
    console.log('\n' + 'NO');
  }
};

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));
