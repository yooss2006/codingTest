function solution(s) {
  let answer = "YES";
  let stack = [];
  for (let x of s) {
    if (x === "(") {
      stack.push("(");
    } else if (stack.length > 0) {
      stack.pop();
    } else {
      answer = "NO";
      break;
    }
  }
  if (stack.length > 0) answer = "NO";
  return answer;
}

let a = "(()()))";
console.log(solution(a));
