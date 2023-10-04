function solution(n) {
  let answer = 0;
  const units = [500, 100, 50, 10];
  for (const unit of units) {
    answer += Math.floor(n / unit);
    const remainder = n % unit;
    if (!remainder) break;
    n = remainder;
  }
  return answer;
}

console.log(solution(1260));
