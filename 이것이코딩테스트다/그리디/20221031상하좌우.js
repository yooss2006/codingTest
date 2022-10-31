const MOVE_DIRECTION = {
  U: [-1, 0],
  D: [1, 0],
  L: [0, -1],
  R: [0, 1],
};

const move = (direction) => {
  return MOVE_DIRECTION[direction];
};

const solution = (n, arr) => {
  let point = [1, 1];
  arr.forEach((direction) => {
    const y = point[0] + move(direction)[0];
    const x = point[1] + move(direction)[1];
    if (y > 0 && y <= n && x > 0 && x <= n) point = [y, x];
  });
  return point;
};

console.log(solution(5, ["R", "R", "R", "D", "D"]));
