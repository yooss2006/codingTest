function solution(arr) {
  let answer = arr;
  answer.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[-1];
    else return a[0] - b[0];
  });

  return answer;
}
// function solution(arr) {
//   let answer = arr;
//   for (let i = 0; i < answer.length; i++) {
//     for (let j = 0; j < answer.length - i - 1; j++) {
//       if (
//         answer[j][0] > answer[j + 1][0] ||
//         (answer[j][0] === answer[j + 1][0] && answer[j][1] > answer[j + 1][1])
//       ) {
//         [answer[j], answer[j + 1]] = [answer[j + 1], answer[j]];
//       }
//     }
//   }
//   return answer;
// }

let arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];
console.log(solution(arr));
