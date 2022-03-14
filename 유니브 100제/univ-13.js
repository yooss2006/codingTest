let 태양계 = [
  "수성",
  "금성",
  "지구",
  "화성",
  "목성",
  "토성",
  "천왕성",
  "혜왕성",
];
let 행성 = function (num) {
  return 태양계[num - 1];
};
console.log(행성(1));
