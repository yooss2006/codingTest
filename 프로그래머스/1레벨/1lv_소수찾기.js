function solution(n) {
  let arr = [];
  for (let i = 2; i <= n; i++) {
    let is_ok = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i % arr[j] === 0) {
        is_ok = 0;
        break;
      }
      if (Math.sqrt(i) <= arr[j]) {
        break;
      }
    }
    if (is_ok) {
      arr.push(i);
    }
  }
  return arr.length;
}
console.log(solution(16));
