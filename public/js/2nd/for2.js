// for2.js
// 조건문 추가.
let sum = 0;
let sum2 = 0,
  sum3 = 0;

// 1 ~ 10 까지만 범위. => 2의 배수, 3의 배수 => 합.
for (let i = 1; i <= 100; i++) {
  let randomValue = parseInt(Math.random() * 10) + 1;
  if (randomValue % 2 == 0) {
    sum2 += randomValue;
  }
  if (randomValue % 3 == 0) {
    sum3 += randomValue;
  }
}
console.log(`2의 배수의 합은 ${sum2}, 3의 배수의 합은 ${sum3}`);

sum2 = sum3 = 0;
// 1 ~ 100 까지의 숫자중에서 2의 배수, 3의 배수 => 각각 저장.
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    sum2 += i;
  }
  if (i % 3 == 0) {
    sum3 += i;
  }
}
console.log(`2의 배수의 합은 ${sum2}, 3의 배수의 합은 ${sum3}`);

// 1 ~ 100 값중에서 3의 배수의 합을 구하도록.
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0) { // 3의 배수일 경우에만 sum을 누적.
    sum += i;
  }
}
console.log(`3의 배수의 합은 ${sum}`);

// 1 ~ 10 까지 합 => 합이 30보다 크면 출력하도록. => i의 값과 sum 출력.
sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
  if (sum >= 30) {
    console.log(`현재 i의 값은 => ${i}, sum은 ${sum}`);
  }
}

for (let i = 1; i <= 10; i++) {
  // 짝수일 경우에만 출력.
  if (i % 2 == 0) {
    console.log(`현재 i의 값은 => ${i}`);
  }
}