function solution(s) {
    s += " ";
    let a = [];
    let 글자 = "";
    let answer = '';
    for(let i=0; i<s.length; i++){
        if(s[i]!==" "){
            글자= 글자+s[i];
        }else{
            a.push(글자);
            글자 = "";
        }
    }
    let x = a.forEach(function(data, i){
        for(let i=0; i<data.length; i++){
            if(i%2==0){
                data=data.toUpperCase();
                글자= 글자+data[i];
            }else{
                data=data.toLowerCase();
                글자= 글자+data[i];
            }
        }
        a[i]=글자;
        글자="";
    })
    for(let i=0; i<a.length; i++){
        answer+=a[i];
        answer+=" ";
    }
    answer=answer.slice(0,-1);
    return answer;
}
console.log(solution("sas csc sas"))