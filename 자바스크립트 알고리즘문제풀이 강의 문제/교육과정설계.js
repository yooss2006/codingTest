function solution(need, plan) {
  let answer = "YES";
  let x = [];
  for (const z of plan) {
    if (need.indexOf(z) > -1) {
      x.push(z);
    }
  }
  answer = x.join("") === need ? answer : "NO";
  return answer;
}

let a = "CBA";
let b = "CBDGEA";
console.log(solution(a, b));
