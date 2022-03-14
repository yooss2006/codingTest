function solution(map1, map2) {
  let answer = 0;
  let hash = new Map();
  for (let i of map2) {
    if (hash.has(i)) hash.set(i, hash.get(i) + 1);
    else hash.set(i, 1);
  }
  for (let i = 0; i < map1.length; i++) {
    let isOk = true;
    let hashCopy = new Map();
    for (let x of hash) {
      hashCopy.set(x[0], x[1]);
    }
    for (let j = 0; j < map2.length; j++) {
      if (hashCopy.has(a[i + j]) && hashCopy.get(a[i + j]) > 0) {
        hashCopy.set(a[i + j], hashCopy.get(a[i + j]) - 1);
      } else {
        isOk = false;
      }
    }
    if (isOk) {
      ++answer;
      console.log(i);
    }
  }
  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
