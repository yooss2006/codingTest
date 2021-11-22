function solution(nums) {
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let m = j + 1; m < nums.length; m++) {
        answer.push(nums[i] + nums[j] + nums[m]);
      }
    }
  }
  answer = [...answer];
  let count = 0;

  for (let i = 0; i < answer.length; i++) {
    let is_ok = true;
    for (let j = 2; j <= Math.floor(Math.sqrt(answer[i])); j++) {
      if (answer[i] % j === 0) {
        console.log(answer[i], j);
        is_ok = false;
      }
    }
    if (is_ok) {
      count++;
    }
  }
  return count;
}
console.log(solution([1, 2, 3, 4]));
