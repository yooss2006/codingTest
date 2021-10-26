function solution(n) {
  return (n + "")
    .split("")
    .reverse()
    .map((a) => {
      return a * 1;
    });
}
console.log(solution(12345));
