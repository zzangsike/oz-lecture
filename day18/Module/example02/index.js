import { title as printTitle, print } from "./printer.js";
import { scanner } from "./scanner.js";

const userValue = "스캔해야할 값";

//스캔해야할 값을 스캔하고
const scanValue = scanner(userValue);
console.log("scanner title : ", title);
//스캔한 결과를 프린트한다.
print(scanValue);
console.log("printer title : ", title);
