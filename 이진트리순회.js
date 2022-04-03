function solution(n) {
  let answer = "";
  function DFS(n) {
    if (n > 7) return;
    else {
      //   answer = answer + n; //전위 순회
      DFS(n * 2);
      answer = answer + n; //중위 순회
      DFS(n * 2 + 1);
      //   answer = answer + n; //후위 순회
    }
  }
  DFS(n);
  return answer;
}

console.log(solution(1));
