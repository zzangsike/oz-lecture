let math = 80;
let music = 90;
let english = 100;

let isLowMath = math < avg;
console.log("isMathLowAvg", isMathLowAvg);

let isEnglishLowAvg = english < avg;
console.log("isEnglishLowAvg", isEnglishLowAvg);

//수학점수가 평균보다 낮고, 영어점수도 평균보다 낮아?
console.log(isMathLowAvg && isEnglishLowAvg);

//수학점수가 평균보다 낮거나, 영어점수가 평균보다 낮아?
console.log(isMathLowAvg || isEnglishLowAvg);

console.log("!false", !false); //false
console.log("!true", !true); //false
