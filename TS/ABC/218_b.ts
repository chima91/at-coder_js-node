import { readFileSync } from "fs";

const input: string = readFileSync(0, 'utf-8');
const numArr: number[] = input.split(' ').map(x => parseInt(x, 10));

let answer = '';
for(let i = 0; i < 26; i++) {
  switch(numArr[i]) {
    case 1:
      answer += 'a';
      break;
    case 2:
      answer += 'b';
      break;
    case 3:
      answer += 'c';
      break;
    case 4:
      answer += 'd';
      break;
    case 5:
      answer += 'e';
      break;
    case 6:
      answer += 'f';
      break;
    case 7:
      answer += 'g';
      break;
    case 8:
      answer += 'h';
      break;
    case 9:
      answer += 'i';
      break;
    case 10:
      answer += 'j';
      break;
    case 11:
      answer += 'k';
      break;
    case 12:
      answer += 'l';
      break;
    case 13:
      answer += 'm';
      break;
    case 14:
      answer += 'n';
      break;
    case 15:
      answer += 'o';
      break;
    case 16:
      answer += 'p';
      break;
    case 17:
      answer += 'q';
      break;
    case 18:
      answer += 'r';
      break;
    case 19:
      answer += 's';
      break;
    case 20:
      answer += 't';
      break;
    case 21:
      answer += 'u';
      break;
    case 22:
      answer += 'v';
      break;
    case 23:
      answer += 'w';
      break;
    case 24:
      answer += 'x';
      break;
    case 25:
      answer += 'y';
      break;
    case 26:
      answer += 'z';
      break;
  }
}

console.log(answer);