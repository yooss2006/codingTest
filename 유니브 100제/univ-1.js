var nums = [100, 200, 300, 400, 500];

//방법 1 뒤에서 하나씩 빼는 방법
// nums.pop();
// nums.pop();

//방법 2 배열의 구간을 지우는 방법으로 삭제
// nums.splice(nums.length - 2, nums.length);
let 반환값 = nums.splice(1, 2);

console.log(반환값, nums);
