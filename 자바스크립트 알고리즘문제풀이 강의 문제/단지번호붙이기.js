let 상하좌우 = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
function solution(map, mapSize) {
  let isVisited = [];
  let answerArr = [];
  let BFSArr = [];
  let 단지 = 0;

  //[
  // [false, false, false, false, false, false, false]*7
  //]을 만들기 위함
  for (let i = 0; i < mapSize; i++) {
    let arr = new Array(mapSize).fill(false);
    isVisited.push(arr);
  }

  for (let i = 0; i < mapSize; i++) {
    for (let j = 0; j < mapSize; j++) {
      //map의 해당 위치가 1로 집이있고 방문처리가 되지 않았을 경우
      if (map[i][j] === 1 && !isVisited[i][j]) {
        단지 = 0;
        DFS(i, j);
        BFSArr.push(단지);
      }
    }
  }
  console.log(BFSArr);

  function DFS(i, j) {
    isVisited[i][j] = true;
    ++단지;
    let curNode = [i, j];
    for (let num = 0; num < 4; num++) {
      let nr = curNode[0] + 상하좌우[num][0];
      let nc = curNode[1] + 상하좌우[num][1];
      if (
        nr >= 0 &&
        nc >= 0 &&
        nr < mapSize &&
        nc < mapSize &&
        map[nr][nc] === 1 &&
        !isVisited[nr][nc]
      ) {
        DFS(nr, nc);
      }
    }
  }

  function BFS(i, j) {
    let queue = [];
    isVisited[i][j] = true;
    단지 = 1;
    queue.push([i, j]);
    while (queue.length > 0) {
      let curNode = queue.shift();
      for (let num = 0; num < 4; num++) {
        let nr = curNode[0] + 상하좌우[num][0];
        let nc = curNode[1] + 상하좌우[num][1];

        if (
          nr >= 0 &&
          nc >= 0 &&
          nr < mapSize &&
          nc < mapSize &&
          map[nr][nc] === 1 &&
          !isVisited[nr][nc]
        ) {
          queue.push([nr, nc]);
          isVisited[nr][nc] = true;
          단지++;
        }
      }
    }
    return 단지;
  }
  console.log(BFSArr.length);
  // console.log(
  //   BFSArr.sort((a, b) => {
  //     return a - b;
  //   })
  // );
}

const map = [
  [0, 1, 1, 0, 1, 0, 0],
  [0, 1, 1, 0, 1, 0, 1],
  [1, 1, 1, 0, 1, 0, 1],
  [0, 0, 0, 0, 1, 1, 1],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 0, 0, 0],
];
const mapSize = 7;
console.log(solution(map, mapSize));
