const solution = (n, m, arr) => {
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    const min = Math.min(...arr[i]);
    if (max < min) max = min;
  }
  return max;
};

console.log(
  solution(3, 3, [
    [3, 1, 2],
    [4, 1, 4],
    [2, 2, 2],
  ])
);
console.log(
  solution(2, 4, [
    [7, 3, 1, 8],
    [3, 3, 3, 4],
  ])
);
