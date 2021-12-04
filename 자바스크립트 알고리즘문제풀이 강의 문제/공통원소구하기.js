function solution(arr1, arr2) {
  arr1 = arr1
    .filter((v) => {
      return arr2.includes(v);
    })
    .sort((a, b) => a - b);

  return arr1;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
