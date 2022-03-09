function solution(n, m) {
  let sortnumber = [n, m].sort((a, b) => a - b);
  let big = sortnumber[0];
  let small = sortnumber[1];
  let x;
  while (small != 0) {
    x = big % small;
    big = small;
    small = x;
  }
  small = (n * m) / big;
  var answer = [];
  return [big, small];
}
console.log(solution(5, 12));
