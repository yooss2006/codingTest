function solution(d, budget) {
  let count = 0;
  d.sort((a, b) => a - b).reduce((acc, v, i) => {
    if (i === 1 && acc > budget) {
      count = 0;
    }
    if (acc + v <= budget) {
      ++count;
      return acc + v;
    }
  }, 0);
  return count;
}
console.log(solution([1, 3, 2, 1, 4], 0));
