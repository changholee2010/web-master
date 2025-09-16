// date.js
const now = new Date();
console.log(now.toLocaleDateString() + now.toLocaleTimeString());

let today = new Date('2025-09-14 10:30:30');
today.setFullYear(2024);
today.setMonth(9);
console.log(today.toLocaleDateString() + today.toLocaleTimeString());

console.log('월:' + (today.getMonth() + 1)); // 0,1,2,3, ... 11
console.log('일:' + today.getDate());
console.log('요일:' + today.getDay()); // 일요일(0), 월(1) ... 토(6)

// 날짜 입력 하면 '2025-11-12' => 요일정보를 반환해주는 함수.
function translateDay(dateStr) {
  let dayAry = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  // 날짜 -> 요일 반환.
  let today = new Date(dateStr);
  let day = today.getDay(); // 요일정보 (0 ~ 6)
  return dateStr + ' 은 ' + dayAry[day] + '입니다.';
}
console.log(translateDay('2025-09-16'));