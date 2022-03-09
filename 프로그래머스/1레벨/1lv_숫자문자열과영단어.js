function solution(s) {
    ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight","nine"].forEach((a,i)=>{
        let 패턴 = new RegExp(a, "g");
        s = s.replace(패턴, i);
    })
    return Number(s);
}
console.log(solution("one4seveneight"))