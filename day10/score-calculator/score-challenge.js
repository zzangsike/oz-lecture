const MAX_SCORE = 105;
const BONUS_SCORE = 5;
let score;
var grade;

//사용자 입력
let inputStr = prompt("점수를 입력하세요");
console.log(inputStr);

//let inputNum = parseInt(inputStr);
let inputNum = Number(inputStr);
console.log("input", input);

if (input < 0 || input > 100 || isNaN(input)) {
  console.log("invalid score! please enter a number between 0 and 100");
} else {
  const finalScore = input + BONUS_SCORE;
}

//최종점수 계산(5점 추가)
const finalScore = input + BONUS_SCORE;
finalScore++;
finalScore = input + BONUS_SCORE;
finalScore *= 1.1;
//finalScore = !isNaN(finalScore);

//등급 결정(if문)
if (finalScore >= 100) {
  grade = "S";
} else if (finalScore >= 90) {
  grade = "A";
} else if (finalScore >= 80) {
  grade = "B";
} else if (finalScore >= 70) {
  grade = "C";
} else if (finalScore >= 60) {
  grade = "D";
} else {
  grade = "F";
}

//합격/불합격 여부 결정
const isPass = finalScore >= 60 ? "PASS" : "FAIL";

//등급에 따른 console.log() 출력 (switch문)
let message = "";
switch (grade) {
  case "S":
    message = "Super!!";
    break;
  case "A":
    message = "Excellent work!!";
    break;
  case "B":
    message = "Good job!!";
    break;
  case "C":
    message = "Satisfactory performance!!";
    break;
  case "D":
    message = "Needs improvement!!";
    break;
  case "F":
    message = "please try harder!!";
    break;
}

const consoleTemplate = `########
Final Score : ${finalScore}
Grade : ${grade}
Status : ${passStatus}
Message : ${Message}
#######`;

console.log(consoleTemplate);
//Score 조건식 검사하여
