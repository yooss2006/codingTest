function solution(priorities, location) {
  let answer = 0;
  const queue = priorities.map((priority, index) => ({ index, priority }));
  while (true) {
    const numberQueue = queue.map(({ priority }) => priority);
    if (Math.max(...numberQueue) === queue[0].priority) {
      answer++;
      if (queue[0].index === location) break;
    } else queue.push(queue[0]);
    queue.shift();
  }
  return answer;
}

console.log(solution([1, 1, 9, 1, 1, 1], 0));
