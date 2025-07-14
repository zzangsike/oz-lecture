// const NAME = "taem";
// let templateString = `나의 이름은 ${NAME}입니다.`;

// console.log(NAME);
// console.log(templateString);

// 변수 선언과 데이터 타입
var age = 20; // number
let name = "John"; // string
const isStudent = true; // boolean

// 이스케이프 문자 사용과 문자열 연결
let profileInfo =
  "name:\t" + name + "\nAge:\t" + age + "\nStudent:\t" + isStudent;
console.log(profileInfo);

// 배열 리터럴
let hobbies = ["reading", "gaming", "coding"];
console.log("My hobbies: " + hobbies.join(", "));

// 객체 리터럴
let profile = {
  name: "John",
  age: 20,
  isStudent: true,
};
console.log(
  "안녕, 난 " + profile.name + " 그리고 내 나이는" + profile.age + " 이야.."
);

// typeof 사용
console.log(typeof hobbies); // object
console.log(typeof profile); // object

/////////////////////////////////////////////////////////
console.log("//////////////");

var varNull = null;
var varUndefined = undefined;

console.log("null == undefined", varNull == varUndefined);
console.log("null === undefined", varNull === varUndefined);

console.log("typeof null", typeof null);
console.log("typeof undefined");
