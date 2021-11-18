function solution(n) {
  let arr = [1, 1];
  for (let i = 3; i <= n; i++) {
    arr.push(((arr[i - 2] % 1234567) + (arr[i - 3] % 1234567)) % 1234567);
  }
  console.log(arr);
  return arr[arr.length - 1];
}
console.log(solution(7));

// function solution(n) {
//   return n > 2
//     ? ((solution(n - 1) % 1234567) + (solution(n - 2) % 1234567)) % 1234567
//     : 1;
// }
// console.log(solution(7));
