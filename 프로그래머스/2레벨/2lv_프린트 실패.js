function solution(priorities, location) {
  priorities = priorities
    .map((v, i) => `${i + 1}~` + v)
    .sort((a, b) => b[2] - a[2]);

  return priorities;
}
console.log(solution([1, 1, 9, 1, 1, 1], 0));
