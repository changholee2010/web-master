/*
 * test2.js
 */

let friend1 = {
  name: "박규태",
  height: 175
}

let friend2 = {
  name: "김민식",
  height: 180
}

// 박규태가 김민식보다 크냐?
// 박규태가 크다 vs. 박규태가 작다.
if (friend1.height > friend2.height) {
  console.log(friend1.name + '(이)가 크다');
}
if (friend1.height == friend2.height) {
  console.log('두사람의 키가 같다');
}
if (friend1.height < friend2.height) {
  console.log(friend2.name + '(이)가 크다');
}