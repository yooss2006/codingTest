function solution(str1, str2) {
  let answer = "YES";
  let 해쉬 = new Map();
  for (let data of str1) {
    if (해쉬.has(data)) {
      해쉬.set(data, 해쉬.get(data) + 1);
    } else {
      해쉬.set(data, 1);
    }
  }
  for (let data of str2) {
    if (해쉬.has(data) && 해쉬.get(data) > 0) {
      해쉬.set(data, 해쉬.get(data) - 1);
    } else {
      answer = "NO";
    }
  }
  return answer;
}

let a = "abaCC";
let b = "Caaab";
console.log(solution(a, b));
