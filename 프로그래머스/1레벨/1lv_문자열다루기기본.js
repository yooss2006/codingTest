function solution(s) {
  return !/\D/g.test(s) && (s.length === 4 || s.length === 6 ? true : false);
}
console.log(solution("1e22"));
