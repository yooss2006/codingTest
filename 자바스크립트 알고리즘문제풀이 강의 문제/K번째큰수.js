function solution(n, k, card) {
  let setarr = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let m = j + 1; m < n; m++) {
        setarr.add(card[i] + card[j] + card[m]);
      }
    }
  }
  return [...setarr].sort((a, b) => b - a)[k - 1];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(arr.length, 3, arr));
