function solution(s) {
  s = s.split(" ");
  return s
    .sort((a, b) => a - b)
    .filter((a, i) => {
      if (i === 0 || i === s.length - 1) return a;
    })
    .join(" ");
}

console.log(solution("1 2 3 4"));
