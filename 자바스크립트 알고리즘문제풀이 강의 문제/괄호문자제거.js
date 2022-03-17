function solution(s) {
  let stack = [];
  let strStack = [];
  for (let x of s) {
    if (x === "(") {
      stack.push("(");
    } else if (x === ")") {
      stack.pop();
    } else if (stack.length === 0) {
      strStack.push(x);
    }
  }
  return strStack.join("");
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
