//최대공약수 구하기
function getGcd(max, min) {
  let result = [max, min];
  while (result[1] > 0) {
    result = [result[1], result[0] % result[1]];
  }
  return result[0];
}

function solution(numer1, denom1, numer2, denom2) {
  const denom = denom1 * denom2;
  const numer = numer1 * denom2 + numer2 * denom1;
  const max = Math.max(denom, numer);
  const min = Math.min(denom, numer);
  const gcd = getGcd(max, min);
  return [numer / gcd, denom / gcd];
}

// console.log(solution(9, 2, 1, 3));
console.log(solution(1, 5, 4, 5));
