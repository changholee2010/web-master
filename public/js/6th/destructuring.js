// destructuring.js
const person = {
  name: "홍길동",
  age: 20,
};

let { name, age } = person; // 객체 dest....
// let name = person.name; // name: "홍길동"
// let age = person.age; // age: 20

const numAry = [10, 20, 30]; // 배열 dest....
let [n1, n2, n3] = numAry;
console.log(n1, n2, n3);

// 배열메소드: forEach(), map(): A -> A' , filter(), reduce()
const stdAry = [
  { sno: 100, name: "홍길동", score: 80 },
  { sno: 200, name: "김민수", score: 60 },
  { sno: 300, name: "박민규", score: 70 },
];
const newAry = stdAry.map((item) => {
  const { sno, name } = item; // 객체디스트럭쳐링
  return { sno, name };
});
console.log(newAry);
