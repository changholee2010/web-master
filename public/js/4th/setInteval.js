// setInteval.js
document.querySelector("table").remove();

// sample data.
let str = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat dignissimos dolor corrupti at velit error numquam incidunt veniam laudantium placeat sint enim, laboriosam distinctio. Maiores magnam quidem repellat repudiandae quam.`;
let strAry = str.split(" "); // 구분자(' ')를 기준으로 문자열  배열로 생성.
const outer = document.querySelector("div.outer");
// 화면 출력.
strAry.forEach(function (item, idx, ary) {
  let div = document.createElement("div");
  div.innerText = item;
  div.setAttribute("class", "inner"); // <div class='inner'>Lorem</div>
  outer.appendChild(div);
});

let timing = 60;
let time_remaing = true; //  초기값을 true 선언.

// 이벤트(찾기 버튼 클릭하면 alert('클릭'))
document.querySelector("#search_word") //
  .addEventListener("click", function () {
    let search = document.querySelector('#user_value').value;
    // [div,div,div......div]
    // 삭제할 값을 찾아서 "같은 값이 있습니다"/ "찾는 값이 없습니다"
    // 사용자 입력값을 비워주기. 
    let is_exist = false;
    document.querySelectorAll('div.inner') //
      .forEach(function (item) {
        //  입력값이 div의 innerText값과 같은지 비교.
        if (item.innerHTML == search) {
          item.remove();
          is_exist = true;
        }
      });
    if (is_exist) {
      alert("같은 값이 있습니다");
    } else {
      alert("찾는 값이 없습니다");
    }
    document.querySelector('#user_value').value = '';

    // alert('성공')/ alert('실패');
    if (time_remaing && document.querySelectorAll('div.inner').length == 0) {
      alert('성공');
    }

  });

let job = setInterval(function () {
  console.log(timing--); // timing++
  document.querySelector('#remaing').innerText = timing + "초";
  if (timing < 5) {
    if (!document.querySelector('#remaing').classList.contains('blinking-span')) {
      document.querySelector('#remaing').classList.add('blinking-span');
    }
  }
  // timing--;
  if (timing <= 0) {
    time_remaing = false; // 시간종료.
    document.querySelector('#remaing').innerText = '시간종료';
    document.querySelector('#remaing').classList.remove('blinking-span');
    document.querySelector('#user_value').disabled = true;
    clearInterval(job);
  }
}, 1000);