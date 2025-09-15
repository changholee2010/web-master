// function.js
// 함수: 코드의 묶음.
// 반복되는 기능.
// 전역(global) 변수.
let n1 = 10;
let n2 = 20; // 변경가능.
//var n3 = 300;
const n3 = 3.14; // 변경불가.
n2 = 22;
// n3 = 33;

{
  let n2 = 2;
  console.log(`${n2}`);
}
//var n3 = 400;

console.log(`${n2}`);

function varFunc() {
  let n1 = 100;
  n1 = 20;
  console.log(`local=> ${n1}`);
}
console.log(`global=> ${n1}`);
varFunc(); // 함수호출.

// 10 + 5, 콘솔출력 : 기능을 정의.
function sum(n1, n2) { // sum함수의 지역(local).
  let result = n1 + n2;
  console.log(`결과는 ${result}`);
}
let num1 = 10,
  num2 = 7;
console.log(num1);
sum(num1, num2);