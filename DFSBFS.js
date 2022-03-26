function adjacency(N, MArray) {
  let arr = Array.from(new Array(N + 1), () => []); //[[],[],[],[],[]]
  for (let item of MArray) {
    arr[item[0]].push(item[1]);
    arr[item[1]].push(item[0]);
  }
  return arr;
}

function solution(N, M, V, MArray) {
  let answer = [];
  let isVisit = new Array(N + 1).fill(false); //[ false, false, false, false, false ]

  //인접리스트
  const adjacencyList = adjacency(N, MArray); //[ [], [ 2, 3, 4 ], [ 1, 4 ], [ 1, 4 ], [ 1, 2, 3 ] ]
  const startNode = V;

  //   const DFS = (curNode) => {
  //     isVisit[curNode] = true;
  //     answer.push(curNode);
  //     for (let subNode of adjacencyList[curNode]) {
  //       if (isVisit[subNode]) continue;
  //       DFS(subNode);
  //     }
  //   };
  //   DFS(startNode);

  const BFS = (curNode) => {
    isVisit[curNode] = true;
    answer.push(curNode);
    let queue = [curNode];
    while (queue.length > 0) {
      for (let subNode of adjacencyList[queue.shift()]) {
        if (isVisit[subNode]) continue;
        queue.push(subNode);
        answer.push(subNode);
        isVisit[subNode] = true;
      }
    }
  };
  BFS(startNode);
  return answer;
}
const N = 4; //정점의 개수
const M = 5; //간선의 개수
const V = 1; //시작할 정점의 번호
const MArray = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 4],
  [3, 4],
]; //간선이 연결하는 두 정점의 번호

console.log(solution(N, M, V, MArray));
