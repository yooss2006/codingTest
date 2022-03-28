function solution(times) {
  let answer = 0;
  let arr = [];
  for (const x of times) {
    arr.push([x[0], "in"]);
    arr.push([x[1], "out"]);
  }
  arr.sort((a, b) => {
    if (a[0] == b[0]) return b[1].charCodeAt() - a[1].charCodeAt();
    else return a[0] - b[0];
  });
  let test = 0;
  arr.forEach((data) => {
    if (data[1] == "in") test++;
    else test--;
    if (test > answer) answer = test;
  });
  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 15],
];
console.log(solution(arr));
