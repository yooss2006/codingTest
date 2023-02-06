function solution(progresses, speeds) {
  var answer = [];
  let index = 0;
  let day = Math.ceil((100 - progresses[0]) / speeds[0]);
  console.log(day);
  let count = 0;
  while (true) {
    if (100 - (progresses[index] + speeds[index] * day) <= 0) {
      count += 1;
    } else {
      answer.push(count);
      count = 0;
      day += 1;
    }
    index += 1;
    if (progresses.length <= index) {
      answer.push(count);
      break;
    }
  }
  return answer;
}
console.log(solution([93, 30, 55], [1, 30, 5]));
