function solution(s) {
  var answer = true;
  let count = 0;
  s.split("").forEach((data, i) => {
    data === "(" ? count++ : count === 0 ? (answer = false) : count--;
  });
  return count > 0 || answer === false ? false : true;
}
console.log(solution("(()("));
