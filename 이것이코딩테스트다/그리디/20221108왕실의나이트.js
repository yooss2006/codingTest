const solution = (xy) => {
  const row = ["_", "a", "b", "c", "d", "e", "f", "g", "h"];
  const patten = [
    [2, -1],
    [2, 1],
    [-2, -1],
    [-2, 1],
    [1, -2],
    [1, 2],
    [-1, -2],
    [-1, 2],
  ];
  let result = 0;
  const [x, y] = [row.indexOf(xy[0]), Number(xy[1])];
  patten.forEach((item) => {
    const [pattenX, pattenY] = [x + item[0], y + item[1]];
    if (pattenX < 9 && pattenX > 0 && pattenY < 9 && pattenY > 0) {
      result++;
    }
  });

  return result;
};

console.log(solution("c2"));
