//함수 정의 - 함수 선언문
function gugudanDeclare(num) {
    for(let i=0; i<=9; i++){
        gugudanDeclare(i+1);
    }
}

//함수표현식
const gugudanExpression = function(num);

//숫자계산함수
function sum(num1,num2){
    return num1+num2;
}

let math = 70;
let english = 90;
let social = 80;
let music = 70;
let science = 85;

const scores = [math, english, social,music,science];

//합계
const total = sum(scores);

function avg(num1 = 10, num2 = 20) {
    return (num1+num2) / 2;
}

const average = avg();

function sumDeclare(num1,num2) {

}

function personalbar(name,age) {
    this.name = name;
    this.age = age;
    this.great = function() {
        console.log("안녕하세요. 저는 ${this.name}입니다.")
    }
}

//생성자로 만들어진 객체
const personA = new Person('team', 33);
const personB = new Person('teagu', 3);
