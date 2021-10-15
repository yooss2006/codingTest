function solution(s) {
    s = s.toLowerCase().split(" ");
    var answer = '';
    s.forEach((a)=>{
        if(!/^[a-z]/.test(a)){
           answer+=(a+" ");
        }else{
            answer += a.replace(/[a-z]/, a[0].toUpperCase()) + " ";
        }})
    return answer.slice(0,-1);
}

console.log(solution("3people unFollowed me"))