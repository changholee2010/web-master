// function3.js

function sum(n1, n2) {
  return n1 + n2;
}

let result = sum(sum(10, 20), sum(12, 24));
console.log(`결과는 ${result}`);
