// 매개 변수 n은 피자를 나눠먹을 사람의 수이다.
// 피자 가게에선 피자를 여섯 조각으로 나눠준다.
// 모든 사람이 같은 조각을 먹어야 한다면 필요한 피자의 수를 반환하라.

// 접근 1. n과 6의 최소 공배수를 구한 후 6으로 나눈 값을 반환한다.
// n과 6중에 큰 수와 작은 수를 찾는다.
// 큰 수를 작은 수로 나누고 나머지를 구한다.
// 나머지가 0이라면 작은 수가 최대 공약수이다.
// 나머지가 0이 아니라면 작은 수를 나머지로 나눠 나머지를 구한다. 이를 반복한다.
// n * 6을 하고 위에서 구한 최대 공약수를 나눈 값이 최소 공배수이다.
function solution(n) {
  let max = Math.max(n, 6);
  let min = Math.min(n, 6);
  let remainder = max % min;
  while (remainder !== 0) {
    max = min;
    min = remainder;
    remainder = max % min;
  }
  return n / min;
}

// 다른 사람의 풀이
// 결과인 피자의 수를 1씩 늘려가며 나머지가 안나올 때까지 반복하는 방법이다.
function solution(n) {
  let pizza = 1;
  while ((pizza * 6) % n) {
    pizza++;
  }
  return pizza;
}

console.log(solution(6));
console.log(solution(10));
console.log(solution(4));
