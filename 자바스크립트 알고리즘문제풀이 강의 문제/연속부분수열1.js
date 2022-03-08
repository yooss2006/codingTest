function solution(m, arr) {
  let answer = 0;
  let count = 0;
  let lt = (rt = 0);

  while (rt < arr.length) {
    count += arr[rt];
    if (count == m) {
      ++answer;
      console.log(lt, rt);
    }
    while (count >= m) {
      count -= arr[lt++];
      if (count == m) {
        ++answer;
        console.log(lt, rt);
      }
    }
    rt++;
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
