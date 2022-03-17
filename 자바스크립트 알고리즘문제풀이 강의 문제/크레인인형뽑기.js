function solution(board, moves) {
  let answer = 0;
  let stack = [];
  for (let x of moves) {
    let index = 0;
    for (let y of board) {
      if (y[x - 1]) {
        if (stack[stack.length - 1] === board[index][x - 1]) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(board[index][x - 1]);
        }
        board[index][x - 1] = 0;
        break;
      }
      index++;
    }
  }
  return answer;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
