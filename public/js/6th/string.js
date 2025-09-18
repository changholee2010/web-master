// string.js
let name = "Hong";
let age = 20;
let result = "";
let obj = {
  name: "홍길동",
  bt: "o",
  show() {
    return this.name + this.bt;
  },
};

if (age >= 20) {
  result = "성인";
} else {
  result = "미성년";
}

result = age >= 20 ? "성인" : "미성년";

console.log(`내 이름은 ${name == "Hong"}, ${age >= 20 ? "성인" : "미성년"}`);

// indexOf('매개값')
let idx = "Hello, World".indexOf("W"); // 7 반환.

idx = "김성태, 박명식, 홍길동".indexOf("박명석"); // -1 반환.

let myFriends = ["김성태", "박명식", "홍길동"];

myFriends.forEach((item, idx, ary) => {
  if (item.indexOf("박") == 0) {
    console.log(item);
  }
});
// 원시데이터형. string, number, boolean,
// stack/ heap

// 문자열 <-> 문자객체 new String("Hello");

console.log("pizza, orange, cereals".slice(-7).toUpperCase());
console.log("pizza, orange, cereals".substring(0, 5).toLowerCase());

// charAt()
console.log("Hello, World".charAt(7));

// replace()
console.log("Hello, World".replace("W", "w"));

// trim()
console.log("      Hello     ".trim());

// 1번. 성별판별 함수.
function getGender(no) {
  // 주민번호의 성별(뒷자리7중에 1번째 값) => 1,3 남/ 2,4 여
  let pos = -1; // 성별위치.
  pos = no.length == 14 ? 7 : 6;
  console.log(no.charAt(pos));
  if (no.charAt(pos) == 1 || no.charAt(pos) == 3) {
    //
  }
}
const numAry = ["990101-1237874", "030303-3234545", "9803042324567"];
numAry.forEach((item) => {
  getGender(item);
});
// 2번. 사용자 아이디 확인.
function getId(mail) {
  // 메일주소에서 아이디 부분을 반환.
  let pos = mail.indexOf("@");
  mail.substring(0, pos);
}
const emails = [
  "ldubarrye@oracle.com",
  "aschlag7@smugmug.com",
  "hiffe2@wiley.com",
  "usteptoe0@marketwatch.com",
];
emails.forEach((item) => {
  getId(item);
});
