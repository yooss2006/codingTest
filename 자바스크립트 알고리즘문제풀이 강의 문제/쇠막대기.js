function solution(s) {
  let answer = 0;
  let stack = [];
  s.split("").forEach((x, index) => {
    if (x == "(") {
      stack.push("(");
    } else {
      if (s[index - 1] === "(") {
        if (index < 2) {
          stack.pop();
        } else {
          stack.pop();
          answer += stack.length;
        }
      } else if (s[index - 1] !== "(") {
        answer++;
        stack.pop();
      }
    }
    console.log(answer, stack, index);
  });
  return answer;
}

let a = "(((()(()()))(())()))(()())";
console.log(solution(a));
