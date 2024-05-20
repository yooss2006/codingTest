// 매개변수로 정수 n이 주어지고 n 이하의 홀수가 오름차순으로 담긴 배열을 반환하는 함수를 작성한다.

// 접근 1. n까지 완전탐색으로 접근하기
// 해결
function solution(n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) answer.push(i);
  }

  return answer;
}

// 다른 사람의 풀이
// i를 2씩 증가시키면 조건문으로 검사할 필요도 없음
// function solution(n) {
//     var answer = [];

//     for (let i = 1; i<=n; i+=2) answer.push(i)

//     return answer;
// }

console.log(solution(10));
console.log(solution(15));
