function solution(target, arr) {
  let answer;
  arr.sort((a, b) => {
    return a - b;
  });
  let lt = 0,
    rt = arr.length - 1,
    isFind = false;
  while (!isFind) {
    let mid = Math.floor((lt + rt) / 2);
    if (arr[mid] === target) {
      isFind = true;
      answer = mid + 1;
    } else if (arr[mid] > target) rt = mid - 1;
    else lt = mid + 1;
  }
  return answer;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
