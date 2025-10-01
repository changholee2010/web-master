// todo.js

function newElement() {
  let txt = document.getElementById("myInput").value;
  // 생성할 html
  let cloned = document.querySelector("#myUL>li").cloneNode(true); // 복제.
  let spand = cloned.querySelector("span");
  // cloned.className = "btn btn-primay checked"; 클래스관리.
  cloned.classList.toggle("checked"); // cloned.classList.add("checked");
  cloned.innerHTML = txt;
  cloned.appendChild(spand);
  console.log(cloned);
  document.querySelector("#myUL").appendChild(cloned);
}

document.querySelectorAll("span.close").forEach((item) => {
  item.addEventListener(
    "click",
    function (e) {
      // e.stopPropagation(); //이벤트의 전파 차단.
      alert("close click");
    },
    true // bubbling(하->상), capturing(상->하)
  );
});

document.querySelectorAll("ul>li").forEach((item) => {
  item.addEventListener(
    "click",
    function (e) {
      e.stopPropagation(); //이벤트의 전파 차단. vs. e.preventDefault (기본기능 차단)
      alert("list click");
    },
    true
  );
});
