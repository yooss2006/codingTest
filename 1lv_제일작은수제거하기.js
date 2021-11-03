function solution(arr) {
  let min = [...arr]
    .sort((a, b) => {
      if (a > b) {
        return 1;
      } else {
        return -1;
      }
    })
    .shift();
  console.log(min);
  arr.splice(arr.indexOf(min), 1);
  return arr.length !== 0 ? arr : [-1];
}
console.log(solution([4, 3, 2, 1]));
