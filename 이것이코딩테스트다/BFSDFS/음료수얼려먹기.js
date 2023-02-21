function solution(n, m, map) {
  let result = 0;
  function dfs(x, y) {
    if (x < 0 || x > m - 1 || y < 0 || y > n - 1) return false;
    if (map[y][x] === 0) {
      map[y][x] = 1;
      dfs(x, y - 1);
      dfs(x, y + 1);
      dfs(x - 1, y);
      dfs(x + 1, y);
      return true;
    }
    return false;
  }
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      if (dfs(x, y)) result++;
    }
  }
  return result;
}

console.log(
  solution(4, 5, [
    [0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
  ])
);
