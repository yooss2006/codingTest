function solution(seoul) {
  var answer = "";
  seoul.forEach((a, i) => {
    if (a === "Kim") answer = i;
  });
  return `김서방은 ${answer}에 있다`;
}
console.log(solution(["Jane", "Kim"]));
