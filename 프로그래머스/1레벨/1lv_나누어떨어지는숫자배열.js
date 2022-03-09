function solution(arr, divisor) {
  arr = arr
    .filter((a) => {
      if (a % divisor === 0) return a;
    })
    .sort((a, b) => {
      return a - b;
    });
  return arr.length > 0 ? arr : [-1];
}
console.log(solution([2, 36, 1, 3], 1));
