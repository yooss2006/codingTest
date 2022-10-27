const solution = (arr, m, k) => {
  const [first, second] = arr.sort((a, b) => b - a).slice(0, 2);
  let sum = 0;
  for (let i = 1; i <= m; i++) {
    if (i % k === 0) sum += second;
    else sum += first;
  }
  return sum;
};

console.log(solution([2, 4, 5, 4, 6], 8, 3));
