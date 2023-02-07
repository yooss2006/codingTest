function solution(progresses, speeds) {
  var answer = [];
  let index = (count = 0);
  let day = Math.ceil((100 - progresses[0]) / speeds[0]);
  while (progresses.length > index) {
    if (100 - (progresses[index] + speeds[index] * day) <= 0) {
      [count, index] = [count + 1, index + 1];
    } else {
      answer.push(count);
      day = Math.ceil((100 - progresses[index]) / speeds[index]);
      count = 0;
    }
  }
  answer.push(count);
  return answer;
}
console.log(solution([93, 30, 55], [1, 30, 5]));
