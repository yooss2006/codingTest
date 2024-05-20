// 정수 배열 numbers가 주어진다. numbers의 요소들으 ㅣ평균 값을 반환하도록 함수를 작성하라.
// 정답의 소수 부분이 .0, .5인 경우에만 입력으로 주어진다.

function solution(numbers) {
  let sum = numbers.reduce((acc, cur) => acc + cur, 0);

  return sum % numbers.length
    ? sum / numbers.length
    : sum / numbers.length + ".0";
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(solution([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]));
