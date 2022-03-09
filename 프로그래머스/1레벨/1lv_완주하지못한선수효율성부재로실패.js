function solution(participant, completion) {
    completion.forEach((a)=>{
        participant.splice( f(a),1);
    })
    return participant[0];
}
console.log(solution(["leo", "kiki", "eden"],["eden", "kiki"]))
