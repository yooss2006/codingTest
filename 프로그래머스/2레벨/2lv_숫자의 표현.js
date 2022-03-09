function solution(n) {
  let answer = 0;
  let plus = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      plus += j;
      if (plus === n) {
        answer += 1;
        plus = 0;
        break;
      } else if (plus > n) {
        plus = 0;
        break;
      }
    }
  }

  return answer;
}
console.log(solution(15));
