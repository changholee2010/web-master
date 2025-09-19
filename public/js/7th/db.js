// db.js

// 추가버튼.
document.forms["postForm"].addEventListener("submit", function (e) {
  e.preventDefault();
  let title = document.querySelector('[name="title"]').value; // 입력값(title)
  let author = document.querySelector('[name="author"]').value; // 입력값(author)
  if (!title || !author) {
    alert("내용, 작성자 입력해주세요.");
    return;
  }
  // ajax. 요청방식:post
  fetch("http://localhost:3000/posts", {
    method: "post",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({ title, author }),
  })
    .then((response) => response.json())
    .then((result) => {
      let div = document.createElement("div");
      for (let prop in result) {
        let span = document.createElement("span"); // span 생성.
        span.innerHTML = result[prop];
        span.setAttribute("class", "data-" + prop);
        div.appendChild(span);
      }
      container.appendChild(div);
    })
    .catch((err) => console.log(err));
});

// 게시글목록.
const container = document.querySelector("#data-container");
fetch("http://localhost:3000/posts") // json문자열 데이터.
  .then((response) => response.json())
  .then((result) => {
    // 게시글 건수만큼 row 생성.
    result.forEach((item) => {
      let div = document.createElement("div");
      for (let prop in item) {
        let span = document.createElement("span"); // span 생성.
        span.innerHTML = item[prop];
        span.setAttribute("class", "data-" + prop);
        div.appendChild(span);
      }
      container.appendChild(div);
    });
  })
  .catch((err) => console.log(err));
