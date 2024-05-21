// 매개변수로 받은 문자열 my_string에서 s번째 인덱스부터 overwrite_string을 덮어쓰는 함수를 구현하라.

// 내 풀이
function solution(my_string, overwrite_string, s) {
  const arr_overwrite_string = overwrite_string.split("");
  return my_string
    .split("")
    .reduce((acc, cur, index) => {
      if (index >= s && arr_overwrite_string.length) {
        return [...acc, arr_overwrite_string.shift()];
      }
      return [...acc, cur];
    }, [])
    .join("");
}

// 다른 사람의 풀이
// 0부터 s index 까지 자른 문자열
// 덮어쓸 문자열
// s + overwrite_string.length 부터 끝까지 자른 문자열
// 위 세가지를 합쳐서 반환
function solution(my_string, overwrite_string, s) {
  return (
    my_string.slice(0, s) +
    overwrite_string +
    my_string.slice(s + overwrite_string.length)
  );
}

console.log(solution("He11oWor1d", "lloWorl", 2));
console.log(solution("Program29b8UYP", "merS123", 7));
