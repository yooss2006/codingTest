function solution(a, b) {
  let answer = 0;
  let x = [a, b].sort((a, b) => {
    return a - b;
  });
  if (x[0] === x[1]) return x[0];
  for (let i = x[0]; i <= x[1]; i++) {
    answer += i;
  }
  return answer;
}
console.log(solution(3, -5));
