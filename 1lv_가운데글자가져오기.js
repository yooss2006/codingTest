function solution(s) {
    
    let v = s.split("");
    let 중앙 = v.length/2;
    if(v.length%2===1){
        return v[Math.floor(중앙)];
    }else{
        return v.slice(중앙-1, 중앙+1).join("");
    }
}
console.log(solution("abcde"))