function solution(arr1, arr2) {
  let answer = [];
  arr1.forEach((a, i) => {
    let x = [];
    a.forEach((b, j) => {
      x.push(b + arr2[i][j]);
    });
    answer.push(x);
  });
  return answer;
}
console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);
