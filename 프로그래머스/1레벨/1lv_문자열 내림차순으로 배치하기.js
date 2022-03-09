function solution(s) {
  return s
    .split("")
    .sort((a, b) => {
      if (b > a) {
        return 1;
      } else {
        return -1;
      }
    })
    .join("");
}
console.log(solution("Zbcdefg"));
