let 몫과나머지 = function (nums) {
  nums = nums.split(" ");
  return `${nums[0] / nums[1]} ${nums[0] % nums[1]}`;
};

console.log(몫과나머지("20 10"));
