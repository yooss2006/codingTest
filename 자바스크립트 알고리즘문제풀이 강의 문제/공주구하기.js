function solution(n, k) {
  let queue = [];
  for (let i = 1; i < n + 1; i++) {
    queue.push(i);
  }
  while (queue.length) {
    for (let i = 1; i < k; i++) {
      queue.push(queue.shift());
    }
    queue.shift();
    if (queue.length === 1) return queue.shift();
  }
}

console.log(solution(8, 3));
