// 매개 변수 slice는 조각 수, n은 피자를 나눠먹을 사람의 수이다.
// 모든 사람이 최소 한조각 이상의 피자를 먹으려면 최소 몇판을 시켜야 하는지를 반환하라.

function solution(slice, n) {
  return Math.ceil(n / slice);
}
console.log(solution(7, 10));
console.log(solution(4, 12));
