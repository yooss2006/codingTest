// function solution(n) {
//     var answer =Math.sqrt(n);
//     if(Number.isInteger(answer)){
//         return (answer+1)*(answer+1);
//     }else {
//         return -1;
//     }
    
// }
// console.log(solution(121))


function solution(n) {
    var answer = [Math.sqrt(n)].filter((a)=>Number.isInteger(a))
    return answer.length===0 ? -1 : Math.pow(answer[0]+1,2);
    
}
console.log(solution(121))