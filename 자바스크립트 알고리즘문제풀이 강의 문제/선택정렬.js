// function solution(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//       let 저장소 = 0;
//       if (arr[j] < arr[j + 1]) {
//         저장소 = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = 저장소;
//       }
//     }
//     let 빈배열 = [...arr];
//     console.log(빈배열.reverse());
//   }
//   return arr.reverse();
// }

function solution(arr) {
  let answer = arr;
  for (let i = 0; i < answer.length; i++) {
    let min = i;
    for (let j = i + 1; j < answer.length; j++) {
      if (answer[min] > answer[j]) {
        min = j;
      }
    }
    // let save = answer[i];
    // answer[i] = answer[min];
    // answer[min] = save;
    [answer[i], answer[min]] = [answer[min], answer[i]];
  }

  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
