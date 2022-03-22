function solution(arr) {
  let answer = arr;
  for (let i = 1; i < answer.length; i++) {
    let tmp = answer[i],
      j;
    for (j = i - 1; j >= 0; j--) {
      if (answer[j] > tmp) answer[j + 1] = answer[j];
      else break;
    }
    arr[j + 1] = tmp;
    console.log(answer);
  }
  return answer;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));
