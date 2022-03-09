function solution(m, arr) {
  let answer = 0,
    sum = 0,
    lt = 0;
  for (lt; lt < arr.length; lt++) {
    sum = 0;
    sum += arr[lt];
    let num = 1;
    while (sum <= m) {
      console.log(sum, lt, num);
      ++answer;
      sum += arr[lt + num];
      ++num;
    }
  }
  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
