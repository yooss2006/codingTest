function solution(size, arr) {
  let x = Array.from({ length: size }, () => 0);
  for (const item of arr) {
    if (x.indexOf(item) > -1) {
      for (let i = x.indexOf(item) - 1; i > -1; i--) {
        [x[i], x[i + 1]] = [x[i + 1], x[i]];
      }
    } else {
      for (let i = x.length - 2; i > -1; i--) {
        [x[i], x[i + 1]] = [x[i + 1], x[i]];
      }
    }
    x[0] = item;
  }
  return x;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
