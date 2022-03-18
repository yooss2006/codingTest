function solution(s) {
  let answer;
  let stack = [];
  for (let x of s) {
    if (parseInt(x)) {
      stack.push(+x);
    } else {
      let a = stack.pop();
      let b = stack.pop();
      switch (x) {
        case "+":
          stack.push(b + a);
          break;
        case "-":
          stack.push(b - a);
          break;
        case "*":
          stack.push(b * a);
          break;
        case "/":
          stack.push(b / a);
          break;
      }
    }
  }
  answer = stack[0];
  return answer;
}

let str = "352+*9-";
console.log(solution(str));
