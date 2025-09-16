// calendar.js
// 매개값으로 년, 월 활용.
let yyyy = 2025,
  mm = 12;

let holidays = [15, 24]

// 날짜 지정하기.
let today = new Date();
today.setFullYear(yyyy); // 년도 지정.
today.setMonth(mm - 1); // 월 지정.
today.setDate(1); // 1일 지정.
// 1일의 위치구하기.
let spaces = today.getDay(); // 공란의 갯수.
// 이번달 말일 구하기
today.setMonth(mm);
let lastDate = new Date(today.getTime() - (1000 * 60 * 60 * 24));
lastDate = lastDate.getDate();
// 캡션.
let caption = document.createElement('caption');
caption.innerHTML = `${yyyy}년/ ${mm}월`;
document.querySelector('table').appendChild(caption);
// 공란계산.
let tr = document.createElement('tr');
for (let s = 0; s < spaces; s++) {
  let td = document.createElement('td');
  tr.appendChild(td);
}
// 날짜계산.
for (let d = 1; d <= lastDate; d++) {
  let td = document.createElement('td');
  td.innerHTML = d;
  tr.appendChild(td);
  if ((d + spaces) % 7 == 0) { // 새로운 줄 생성.
    td.setAttribute('class', 'saturday'); // attribute 지정.
    document.querySelector('tbody').appendChild(tr);
    tr = document.createElement('tr');
  } else if ((d + spaces) % 7 == 1) { // attribute 지정.
    td.setAttribute('class', 'sunday');
  }
}
document.querySelector('tbody').appendChild(tr);