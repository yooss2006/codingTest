function solution(c, arr) {
  let answer = 0;
  function DFS(L, sum) {
    if (sum > c) {
      return;
    }
    if (L === arr.length) answer = answer < sum ? sum : answer;
    else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
