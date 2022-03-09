function 경우의수(분리, 반복횟수) {
  분리.froEach((v, i) => {});
}

function solution(numbers) {
  let 분리 = numbers.split("");
  let 분리된개수 = 분리.length;
  let 중복제거 = new Set();
  console.log(분리, 분리된개수);
  for (let i = 1; i <= 분리된개수; i++) {
    let arr = [];
    경우의수(분리, i);
  }
}
console.log(solution("17"));
