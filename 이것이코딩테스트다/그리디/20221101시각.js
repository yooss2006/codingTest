const solution = (n) => {
  let arr = [n, 59, 59];
  let result = 0;
  while (true) {
    arr.join("").indexOf("3") >= 0 && result++;
    if (arr[2] - 1 < 0) {
      if (arr[1] - 1 < 0) {
        if (arr[0] - 1 < 0) {
          break;
        } else {
          arr[0] -= 1;
          arr[1] = 59;
          arr[2] = 59;
        }
      } else {
        arr[1] -= 1;
        arr[2] = 59;
      }
    } else {
      arr[2] -= 1;
    }
  }
  return result;
};

console.log(solution(5));
