//promise.all 병렬처리
const p1 = new Promise((resolve) => setTimeout(() => resolve("작업1"), 1000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("작업2"), 1000));
Promise, all([p1, p2]).then((results) => console.log(results));

alltest();
