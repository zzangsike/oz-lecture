let num1 = 10;
let num2 = 20;

//console.log(num1);
//console.log(num2);

let sum = 10 + 20;
let sub = 20 - 10;
let multi = 10 * 10;
let div = 10 / 2;
let remain = 10 % 3;
let expon = 2 ** 3;

console.log("sum", sum);
console.log("sub", sub);
console.log("multi", multi);
console.log("div", div);
console.log("remain", remain);
console.log("expon", expon);

let sumNum1Num2 = num1 + num2;
let subNum1Num2 = num1 - num2;
let subNum2Num1 = num2 - num1;

console.log("num1 + num2", sumNum1Num2); //30
console.log(" num1 - num2", subNum1Num2); //-10
console.log("num2 - num1", subNum2Num1); //10

let totalSum = sumNum1Num2 + subNum1Num2 + subNum2Num1; //30-10+10 = 30

console.log("sumNum1Num2 + subNum1Num2 + subNum2Num1", totalSum);
