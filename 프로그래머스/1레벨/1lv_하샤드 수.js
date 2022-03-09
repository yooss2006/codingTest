function solution(x) {
    let 사본 = x;
    let 총결과 = 0;
    while(x>0){
        총결과 += x%10;
        x = parseInt(x/10);
    }
    return Number.isInteger(사본/총결과)
}
console.log(solution(102));