// 문자열의 소문자는 대문자로, 대문자는 소문자로 바꿔 출력한다.

// 접근 1. 문자열을 배열로 만든다.
// 만든 배열의 아이템을 하나씩 순회하며 현재 값과 toUpperCase 메서드로 대문자로 변환한 값이 같은지 비교한다.
// 같다면 toLowerCase 메서드로 소문자로 변환한 값을 반환한다.
// 다르다면 toUpperCase 메서드로 대문자로 변환한 값을 반환한다.
// 배열을 문자열로 변환하여 반환한다.

function solution(str) {
  const strArr = str.split("");
  let answer = "";
  strArr.forEach((item) => {
    answer +=
      item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase();
  });
  return answer;
}
console.log(solution("aBcDeFg"));
