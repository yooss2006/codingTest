// function solution(arr) {
//   let answer;
//   let 양수 = [];
//   let 음수 = [];
//   for (const x of arr) {
//     if (x > 0) 양수.push(x);
//     else 음수.push(x);
//   }
//   console.log("양수", 양수, "음수", 음수);
//   answer = [...음수, ...양수];
//   return answer;
// }

function solution(arr) {
  let answer = arr;
  for (let i = 0; i < answer.length - 1; i++) {
    for (let j = 0; j < answer.length - i - 1; j++) {
      if (answer[j] * answer[j + 1] < 0 && answer[j] > 0) {
        [answer[j], answer[j + 1]] = [answer[j + 1], answer[j]];
      }
    }
  }
  return answer;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
