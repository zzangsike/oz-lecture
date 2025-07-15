const promise = new Promise((resolve, reject) => {
  console.log("promis 영역");
  setTimeout(() => {
    console.log("3초 지남");
    let promiseResult = "작업성공!";
    resolve(promiseResult);
  }, 3000);
  let promiseResult = "작업성공!";
  resolve(promiseResult);
}); //constructor(생성자)

promise
  .then((result) => {
    console.log("then 영역");
    console.log(result);
  })
  .catch((err) => {
    console.log("catch 영역");
    console.log(err);
  });

//promise.all 병렬처리
const p1 = new Promise((resolve) => setTimeout(() => resolve("작업1"), 1000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("작업2"), 1000));
Promise, all([p1, p2]).then((results) => console.log(results));
