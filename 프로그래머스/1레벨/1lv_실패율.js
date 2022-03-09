function solution(N, stages) {
    let 실패율 = 0;
    let 실패율배열 = [];
    var answer = [];
    let count = 0;
    let 인원수 = stages.length;
    for(let i=1; i<N+1; i++){
        count=0;
        stages.forEach((a)=>{
            if(a==i){
                count++
            } 
        })
        실패율 = count/인원수;
        인원수 -= count;
        실패율배열.push([i,실패율])
    }
    실패율배열 = 실패율배열.sort((a,b)=>{
        return b[1]-a[1]
    })
    실패율배열.forEach((a)=>{
        answer.push(a[0]);
    })
    return answer;
}
console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]))