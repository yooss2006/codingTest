// 매개 변수 n은 피자를 나눠먹을 사람의 수이다.
// 피자 가게에선 피자를 일곱 조각으로 나눠준다.
// 모든 사람이 피자를 한 조각 이상 먹기 위해서 필요한 피자의 수를 반환하라.

// 접근 1. n을 7로 나눈 몫 + 나머지가 있다면 + 1 없다면 0을 더해 반환한다.
function solution(n) {
  return Math.floor(n / 7) + (n % 7 ? 1 : 0);
}

// 다른 사람의 풀이
// Math.ceil을 사용해 올림처리하면 더 간단하게 풀 수 있다.
// 왜 이 생각을 못했을까?
function solution(n) {
  return Math.ceil(n / 7);
}

console.log(solution(7));
console.log(solution(1));
console.log(solution(15));
