// ajax.js
// 비동기방식 vs 동기방식
// Asynchronous Javascript And XML (Json)

setTimeout(function () {
  console.log("첫번째 함수.");

  setTimeout(function () {
    console.log("두번째 함수.");

    setTimeout(function () {
      console.log("세번째 함수.");
    }, 500);
  }, 2000);
}, 1000);
