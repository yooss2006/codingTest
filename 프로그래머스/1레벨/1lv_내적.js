function solution(a, b) {
return a.map((a, i)=>{return a*b[i]}).reduce((a,b)=>{return a+b});
}
console.log(solution([1,2,3,4],[-3,-1,0,2]))