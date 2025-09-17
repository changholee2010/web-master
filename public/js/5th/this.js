// this.js

// 1) 함수에서 window객체 가리킴. 
// 2) 이벤트에서 이벤트를 받는 대상 가리킴.
// 3) 객체에서 객체를 가리킴.

function sum(n1, n2) {
  // console.log(this);
  return n1 + n2;
}
sum(1, 2);

document.querySelector('table') //
  .addEventListener('click', function (e) {
    console.log(e.target);
    console.log(this);
  })

const obj = {
  name: "Hong",
  show: function () {
    console.log(this);
    return `이름은 ${this.name}`;
  }
}
// obj.show();

let json = `[{"id":"user01","birth":"2025-05-01","phone":"010-1111-2222"},
             {"id":"user02","birth":"2025-02-01","phone":"010-1111-3333"},
             {"id":"user03","birth":"2025-07-01","phone":"010-1111-4444"}]`;

let data = JSON.parse(json, (key, val) => {
  console.log(key, val);
  if (key == 'birth') {
    return new Date(val);
  }
  return val;
});
// console.log('data:', data);