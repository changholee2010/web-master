// db.js

// 이벤트.
document.querySelector('div.container>form') //
  .addEventListener('submit', function (e) {
    e.preventDefault(); // 기본 기능 차단.
    addPost();
  });

// 글등록.
function addPost() {
  const title = document.querySelector('input[name="title"]').value; // 속성선택자.
  const author = document.querySelector('input[name="author"]').value;
  const xhtp = new XMLHttpRequest();
  xhtp.open('post', 'http://localhost:3000/posts');
  // 요청헤더: 컨텐트 형식 지정.
  xhtp.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
  xhtp.send(JSON.stringify({
    title: title,
    author: author
  }));
  xhtp.onload = function () {
    let result = JSON.parse(xhtp.responseText);
    let div = makeRow(result);
    document.querySelector('#data-container').appendChild(div);
    // 초기화.
    document.querySelector('input[name="title"]').value = '';
    document.querySelector('input[name="author"]').value = '';
  }
}

// 게시글 한건에 대한 row 생성하는 함수.
function makeRow(post) {
  let fields = ['id', 'title', 'author'];
  let div = document.createElement('div');
  for (let i = 0; i < fields.length; i++) {
    let span = document.createElement('span');
    span.innerHTML = post[fields[i]];
    span.setAttribute('class', 'data-' + fields[i]);
    div.appendChild(span);
  };
  return div; // <div><span data-id>93ea</span>*3</div>
}

// 글목록.
const xhtp = new XMLHttpRequest();
xhtp.open('get', 'http://localhost:3000/posts'); // 서버의 요청할 페이지 지정.
xhtp.send(); // 실제 요청.
xhtp.onload = function () {
  let data = JSON.parse(xhtp.responseText);
  // 글목록 건수 => data
  data.forEach(function (item, idx, ary) {
    let div = makeRow(item);
    document.querySelector('#data-container').appendChild(div);
  });
}