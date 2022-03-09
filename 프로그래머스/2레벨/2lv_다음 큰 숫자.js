function one_count(num) {
  return num
    .toString(2)
    .split("")
    .reduce((rcc, v) => {
      return v === "1" ? rcc + v * 1 : rcc + 0;
    }, 0);
}

function solution(n) {
  let exam = one_count(n);
  let is_answer = false;
  let answer = n;
  while (is_answer === false) {
    answer++;
    let x = one_count(answer);
    exam === x ? (is_answer = true) : 0;
  }
  return answer;
}
console.log(solution(15));
