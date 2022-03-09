function 최대(작은값, 큰값) {
  let 작은값보관소 = 작은값;
  while (작은값 != 0) {
    작은값보관소 = 작은값;
    작은값 = 큰값 % 작은값;
    큰값 = 작은값보관소;
  }
  return 큰값;
}

function solution(arr) {
  while (arr.length !== 1) {
    for (let i = 0; i < arr.length; i += 2) {
      if (i === arr.length - 1) {
        continue;
      } else {
        let [작은값, 큰값] = [arr[i], arr[i + 1]].sort((a, b) => a - b);
        let 최대공약수 = 최대(작은값, 큰값);
        let 최소공배수 = (작은값 * 큰값) / 최대공약수;
        arr.splice(i, 2, 최소공배수);
      }
    }
  }
  return arr[0];
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
