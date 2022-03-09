function solution(array, commands) {
    let answer = [];
    commands.forEach((a)=>{
        answer.push(array.slice(a[0]-1,a[1])
        .sort((a,b)=>a-b)[a[2]-1])
    }) 
    return answer;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4],[[2, 5, 3], [4, 4, 1], [1, 7, 3]] )) 