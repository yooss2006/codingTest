function solution(numbers) {
    return 45- numbers.reduce((a,b)=>{return a+b})
}
console.log(solution([1,2,3,4,6,7,8,0]))