function solution(n) {
    let answer = [];
    let sum = 0;
    while(n>2){
        answer.push(n%3);
        n = (n-(n%3))/3
    }

    answer.push(n);
    answer.forEach((a, i)=>{
        sum += (3**(answer.length-1-i))*a 
    })
    return sum;
}
console.log(solution(45));