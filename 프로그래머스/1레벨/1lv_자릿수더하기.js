function solution(n) {
  return (n + "").split("").reduce((rcc, v) => rcc * 1 + v * 1, 0);
}

console.log(solution(60));
