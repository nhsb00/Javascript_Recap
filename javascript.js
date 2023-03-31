// let answer = '';

// for (let i = 1; i <= 100; i++) {
//     answer += i + '\n';
// }

// console.log(answer);

//   readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n
//  ');
//   let input = fs.readFileSync('input.txt').toString().split('\n');
// console.log(input);

// const rl = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let input = [];
// rl.on('line'
//     , function (line) {
//  콘솔 입력 창에서 줄바꿈(Enter)를 입력할 때마다 호출
//         input.push(line);
//     }).on('close'
//         , function () {
//  콘솔 입력 창에서 Ctrl + C 혹은 Ctrl + D를 입력하면 호출(입력의 종료)
//             console.log(input);
//             process.exit();
//         });

/*
condition: 참 혹은 거짓을 반환하는 조건식
statement1: condition1이 참일 때 실행되는 구문
statement2: condition1이 거짓이고, condition2가 참일 때 실행되는 구문
statement3: condition1과 condition2가 거짓이고, condition3이 참일 때 실행되는 구문
statementN: 앞의 모든 조건문이 거짓일 때 실행되는 구문
*/
// if (condition1)
//     statement1
// else if (condition2)
//     statement2
// else if (condition3)
//     statement3
// ...
// else
// statementN

/*
- 초기문이 존재한다면 초기문이 먼저 실행됩니다.
- 조건문이 참이라면 블록 내부 코드가 실행되고, 거짓이면 반복문이 종료됩니다.
- 블록 내부 코드가 실행된 뒤에 증감문이 실행됩니다.
*/
// for (초기문; 조건문; 증감문) {
//     // statements
// }
// 1부터 100까지의 합 계산
// let summary = 0;
// for (let i = 1; i <= 100; i++) {
//     summary += i;
// }
// console.log(summary);

/*
- while문은 조건문이 참일 때 실행되는 반복문입니다.
- 블록 내부의 코드가 실행되기 전에 참 혹은 거짓을 판단합니다.
*/
// while (조건문) {
//     // 실행되는 코드 부분
// }

/*
Int -> String
*/
// let a = "777";
// let b = Number(a);
// console.log(b); // 777

/*
String -> Int
*/
// let a = 777;
// let b = String(a);
// console.log(b); // "777"

// Array.prototype.reduce();
/*
reduce() 메서드는 배열의 각 요소에 대해 reducer 함수를 실행한 뒤에 하나의 결과를 반환합니다.
reducer의 형태: (accumulator, currentValue) => (반환값)
- 배열의 각 원소를 하나씩 확인하며, 각 원소는 currentValue에 해당합니다.
- 반환값은 그 이후의 원소에 대하여 accumulator에 저장됩니다.
*/
// let data = [5, 2, 9, 8, 4];
// minValue 구하기 예제
// let minValue = data.reduce((a, b) => Math.min(a, b));
// console.log(minValue); // 2
// 원소의 합계 구하기 예제
// let summary = data.reduce((a, b) => a + b);
// console.log(summary); // 28

// let arr = [8, 1, 4, 5, 7];
// console.log(arr);
// arr = new Array(5).fill(0);
// console.log(arr);

// let mySet = new Set(); // 집합 객체 생성
// // 여러 개의 원소 삽입
// mySet.add(3);
// mySet.add(5);
// mySet.add(7);
// mySet.add(3);
// console.log(`원소의 개수: ${mySet.size}`);
// console.log(`원소 7을 포함하고 있는가? ${mySet.has(7)}`);
// // 원소 5 제거
// mySet.delete(5);
// // 원소를 하나씩 출력
// for (let item of mySet) console.log(item);

let x = 123.456;
console.log(x.toFixed(2));