function solution(meeting) {
  let answer = 0;
  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  let et = 0;
  for (let x of meeting) {
    if (x[0] >= et) {
      answer++;
      et = x[1];
    }
  }
  return answer;
}
// function solution(meeting) {
//   let answer = 0;
//   for (let i = 0; i < meeting.length; i++) {
//     let x = meeting[i];
//     let add = 1;
//     for (let j = i + 1; j < meeting.length; j++) {
//       if (x[1] <= meeting[j][0]) {
//         ++add;
//         x = meeting[j];
//       }
//     }
//     if (answer < add) answer = add;
//   }
//   return answer;
// }

let arr = [
  [3, 3],
  [1, 3],
  [2, 3],
];
// let arr = [
//   [1, 4],
//   [2, 3],
//   [3, 5],
//   [4, 6],
//   [5, 7],
// ];
console.log(solution(arr));
