//map

let numbers = [1, 2, 3];

for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  newNumbers.push(num * 2);
  console.log(newNumbers);
}

numbers = newNumbers;

console.log(numbers);

function double() {
  return num * 2;
}
let newNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  newNumbers.push(num * 2);
}

numbers.map((num) => {
  console.log(num);
});

console.log(newNumbers);

//filter
let numbersA = [1, 2, 3, 4, 5];

//짝수인 값만 빼고 싶어요

//let newNumbersA = [];
//for (const num of numbersA) {
//    if (num % 2 === 0) newNumbersA.push(num);
//}
//console.log(newNumbersA);

// numbersA.filter((num) => {
//   return num % 2 === 0;
// });
// numbersA = numbersA.filter((num) => num % 2 === 0);
// console.log(numbersA);

// const sum = (a, b) => {
//   return a + b;
// };

//reduce
let numbersB = [1, 2, 3, 4];
//const sum1 = sum(sum(sum(sum(0, 1), 2), 3), 4);
//console.log(sum1);

const sum = numbersB.reduce((acc, num) => acc + num, 0);
