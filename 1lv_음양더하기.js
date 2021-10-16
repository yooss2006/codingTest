function solution(absolutes, signs) {
    return absolutes.map((a,i)=>{ return !signs[i]?-a:a}).reduce((a,b)=>{return a+b})
}

console.log(solution([4,7,12],[true,false,true]))