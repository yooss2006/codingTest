function solution(numbers) {
  //문자열로 변환
  numbers = numbers.map((a) => {
    return String(a);
  });
  numbers = numbers.sort((a, b) => {
    //첫글자가 다르다면 첫글자로 정렬이 가능함
    if (a[0] !== b[0]) return b[0] - a[0];
    else {
      for (let i = 1; i < [a.length, b.length].sort()[1]; i++) {
        //a[1], b[1] 처럼 같은 인덱스 끼리 비교하며 둘다 undefined가 아니고 이들이 다르다면 인덱스에 해당하는 글자로 정렬한다.
        if (a[i] !== undefined && b[i] !== undefined && a[i] !== b[i]) {
          return b[i] - a[i];
        }
        //만약 a가 자릿수가 모자르다면? 예를들어 65 6
        if (a[i] === undefined) {
          //만약  a의 첫번째 자리와 b의 i번째 자리가 같다면
          if (b[i] === a[0]) {
            if (b[i] === b[i - 1]) continue;
            else if (b[i] < b[i - 1]) return -1;
            else return 1;
          } else return b[i] - a[0];
          //만약 b가 자릿수가 모자르다면? 예를들어 6 65
        } else if (b[i] === undefined) {
          if (b[0] === a[i]) {
            if (a[i] === a[i - 1]) continue;
            else if (a[i] < a[i - 1]) return 1;
            else return -1;
          } else return b[0] - a[i];
        }
      }
    }
  });
  let zero = 0;
  numbers.forEach((a) => {
    if (a == 0) {
      zero++;
    }
  });
  console.log(numbers);
  return numbers.length === zero ? "0" : numbers.join("") + "";
}

console.log(solution([9, 999, 998]));
