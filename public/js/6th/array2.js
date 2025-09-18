// array2.js
const xhtp = new XMLHttpRequest();
xhtp.open("get", "../5th/data.json");
xhtp.send();

xhtp.onload = function () {
  console.log(JSON.parse(xhtp.responseText));
  // filter, map => 여자사원 => 사번, 이름(성+이름), 급여
  const employees = JSON.parse(xhtp.responseText);
  employees
    .filter((item) => item.gender == "Female")
    .map(({ id, first_name, last_name, salary }) => ({
      id,
      name: `${last_name} ${first_name}`,
      salary,
    }))
    .forEach(({ id, name, salary }) =>
      console.log(`사번: ${id}, 이름: ${name}, 급여: ${salary}`)
    );
};
