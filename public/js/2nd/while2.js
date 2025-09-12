// while2.js
// 학생점수를 입력>> 
// while 반복을 활용해서 입력받은 학생의 총점수 구하기.
// 평균 => 총합/명
let sum = 0; // 점수의 합계.
let cnt = 0; // 학생카운트.
while (true) {
  let userValue = prompt("숫자를 입력하세요. 종료하려면 exit");
  if (userValue == 'exit') { // 종료조건.
    break;
  }
  sum += parseInt(userValue);
  cnt++;
}
console.log(`학생의 총점은 ${sum}, 평균은 ${sum/cnt}`);