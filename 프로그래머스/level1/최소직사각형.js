// 매개변수로 2차원 배열을 받는데 각 배열은 가로, 세로 길이를 나타낸다.
// 모든 명함을 수납할 수 있는 최소한의 가로, 세로 크기를 반환하는 문제
// 명함을 돌려서 넣을 수 있어 가로와 세로는 바뀔 수 있다.

// 접근 1.
// 2차원 배열의 요소의 요소 중 최대 값을 구한다.(이를 일단 가로로 설정한다.)
// 2차원 배열을 순회한다.
// 각 배열의 요소를 오름차순으로 정렬한다. 정렬하는 이유는 배열의 요소 중 큰 값은 가로로 오게한 다음 작은 값은 세로로 오게 하기 위함이다.
// 배열의 첫번째 요소가 세로 값으로 설정한 값보다 크다면 세로 값으로 설정한 값을 변경한다.
function solution(sizes) {
  let width = Math.max(...sizes.map((size) => Math.max(...size)));
  let height = 0;
  sizes.forEach((size) => {
    size.sort((a, b) => a - b);
    if (height < size[0]) height = size[0];
  });
  return width * height;
}

// 다른 사람의 풀이
function solution(sizes) {
  const rotated = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));

  let maxSize = [0, 0];
  rotated.forEach(([w, h]) => {
    if (w > maxSize[0]) maxSize[0] = w;
    if (h > maxSize[1]) maxSize[1] = h;
  });
  return maxSize[0] * maxSize[1];
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
);
console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ])
);
