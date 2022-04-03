function solution(n) {
  let answer = "";
  function binary(n) {
    if (n === 0) return;
    else {
      //위에 있으면 큐
      binary(parseInt(n / 2));
      //아래에 있으면 스택의 형식
      answer += n % 2;
    }
  }
  binary(n);
  return answer;
}

console.log(solution(11));
