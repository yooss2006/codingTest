function solution(s) {
  let firstChar = s.charAt(0);
  return firstChar !== "-" || firstChar !== "+"
    ? s * 1
    : firstChar !== "-"
    ? s.substr(1) * -1
    : s.substr * 1;
}
console.log(solution("-1234"));
