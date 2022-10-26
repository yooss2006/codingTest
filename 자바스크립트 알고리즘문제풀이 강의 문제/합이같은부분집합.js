function solution(arr) {
  let answer = "NO";
  let flag = 0;
  let total = arr.reduce((a, b) => a + b, 0);
  let n = arr.length;

  const DFS = (l, sum) => {
    if (flag === 1) return;
    if (l === n) {
      if (total - sum === sum) {
        answer = "yes";
        flag = 1;
      }
    } else {
      DFS(l + 1, sum + arr[l]);
      DFS(l + 1, sum);
    }
  };
  DFS(0, 0);
  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
