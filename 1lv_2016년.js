function solution(a, b) {
    let 달력 = [31,29,31,30,31,30,31,31,30,31,30,31];
    let 요일 = ["FRI","SAT","SUN","MON","TUE","WED","THU"];
    let day = 0;
    달력.forEach((date, i)=>{
        if(i+1 <= a ){
            if(i+1==a){
                day += b;           
            }else{
                day += date;
            }
        }
    })
    let 요일찾기 = day%7==0 ? 요일.length-1 : day%7-1;
    let answer = 요일[요일찾기];
    return answer;
}
console.log(solution(12,15))