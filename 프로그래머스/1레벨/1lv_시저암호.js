function solution(s, n) {
    return s.split("").map((a)=>{ 
        let num=a.charCodeAt();
        if(num==32) return " "; 
        else if(num>=65 && num<=90){
            num+=n;
            if(num>90){
                num = 64 + (num-90);
            }
        }else if(num>=97 && num<=122){
            num+=n;
            if(num>122){
                num = 96 + (num-122);
            }
        }
        return String.fromCharCode(num)}).join("");
}

console.log(solution("Z U z", 4))
