const direction = [
  [1, 0],
  [0, -1],
  [-1, 0],
  [0, 1],
];

const solution = (size, me, map) => {
  let [y, x, curDirection] = me;
  let result = 0;
  let count = 0;
  let life = 1;
  while (true) {
    const nextDirection = direction[(curDirection + 1) % 4];
    if (map[y + nextDirection[0]][x + nextDirection[1]] === 1) {
      count += 1;
    } else {
      map[y][x] = 1;
      [x, y] = [x + nextDirection[1], y + nextDirection[0]];
      count = 0;
      result += 1;
    }
    curDirection += 1;
    if (count === 4 && life === 0) {
      return result;
    }
    if (count === 4 && life === 1) {
      count = life = 0;
      const backDirection = direction[(curDirection + 1) % 4];
      [x, y] = [x + backDirection[1], y + backDirection[0]];
    }
    console.log(x, y);
    console.log(map);
  }
};

console.log(
  solution(
    [4, 4],
    [1, 1, 0],
    [
      [1, 1, 1, 1],
      [1, 0, 0, 1],
      [1, 1, 0, 1],
      [1, 1, 1, 1],
    ]
  )
);
