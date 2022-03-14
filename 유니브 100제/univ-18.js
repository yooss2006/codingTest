let average = function (aver) {
  return Math.floor(aver.reduce((acc, v) => acc + v) / aver.length);
};
console.log(average([20, 30, 40]));
