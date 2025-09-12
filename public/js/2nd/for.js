// for.js
// 반복문.

let sum = 0;

sum = sum + 1; // sum(1) = sum(0) + 1;
sum = sum + 2; // 3
sum = sum + 3; // 6
sum = sum + 4; // 10
// ....
sum = sum + 10;

sum = 0;
// 3 * 1 = 3
// 3 * 2 = 6
// ...
// 3 * 9 = 27
// <table>
// <thead><tr><th>dfdsf</th></tr></thead>
// <tbody><tr><td>dfldsl</td></tr></tbody>
// </table>
document.writeln(`<table class='table table-striped'>`);
document.writeln(`<thead>
                    <tr>
                      <th>단수</th>
                      <th></th>
                      <th>배수</th>
                      <th></th>
                      <th>결과</th>
                    </tr>
                  </thead>
                  <tbody>`);
for (let i = 1; i <= 9; i = i + 1) { // for 문.
  document.writeln(`<tr>
                      <td> 3 </td>
                      <td> * </td>
                      <td> ${i} </td>
                      <td> = </td>
                      <td>${3 * i}</td>
                    </tr>`);
}
document.writeln(`</tbody></table>`);