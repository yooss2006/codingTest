function solution(n, arr1, arr2) {
  var answer = [];
  arr1.forEach((a, i) => {
    let arrone = ("0".repeat(n) + a.toString(2)).slice(-n).split("");
    let arrtwo = ("0".repeat(n) + arr2[i].toString(2)).slice(-n).split("");
    let arrAdd = arrone
      .map((b, i) => {
        if (b === "0" && arrtwo[i] === "0") {
          return " ";
        } else {
          return "#";
        }
      })
      .join("");
    answer.push(arrAdd);
  });

  return answer;
}
console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
