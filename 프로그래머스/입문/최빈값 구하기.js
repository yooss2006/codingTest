// 1차 시도
// 테스트 8, 9에서 런타임 에러
// 87.5점
// function solution(array) {
//   if (array.length === 1) return array[0];
//   const organized = array.reduce(
//     (acc, cur) => ({ ...acc, [cur]: acc[cur] ? acc[cur] + 1 : 1 }),
//     {}
//   );
//   const sorted = Object.entries(organized).sort((a, b) => b[1] - a[1]);
//   if (sorted[0][1] === sorted[1][1]) return -1;

//   return Number(sorted[0][0]);
// }

// 포기 후 참고한 풀이
// sorted?.[1]?.[1]를 안해줘서 런타임 에러가 발생했었다.
// 원인은 [1,1,1,1,1]과 같이 모든 수가 같은 경우를 고려하지 않았다.
// const solution = (array) => {
//   const counter = array.reduce(
//     (acc, cur) => ({
//       ...acc,
//       [cur]: (acc[cur] || 0) + 1,
//     }),
//     {}
//   );

//   const items = Object.keys(counter)
//     .map((key) => [Number(key), counter[key]])
//     .sort((a, b) => b[1] - a[1]);

//   if (items[0][1] === items?.[1]?.[1]) {
//     return -1;
//   }

//   return items[0][0];
// };

// 내 풀이에서 해결
function solution(array) {
  const organized = array.reduce(
    (acc, cur) => ({ ...acc, [cur]: acc[cur] ? acc[cur] + 1 : 1 }),
    {}
  );
  if (Object.entries(organized).length === 1) return array[0];
  const sorted = Object.entries(organized).sort((a, b) => b[1] - a[1]);
  if (sorted[0][1] === sorted[1][1]) return -1;

  return Number(sorted[0][0]);
}

console.log(solution([1, 3, 3, 2, 3, 4]));
console.log(solution([1, 1, 2, 2]));
console.log(solution([1]));
console.log(solution([1, 1, 1, 1, 1]));
