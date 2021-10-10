function solution(new_id) {
    new_id=new_id.toLowerCase();
    let answer = ""
    for(let data of new_id){
        if("~!@#$%^&*()=+[{]}:?,<>/".indexOf(data)<0){
            answer+=data;
            answer = answer.replace('..','.');
        }
    }
    if(answer[0]==='.'){
        answer=answer.substring(1);
    } 
    if(answer.length>=16){
        answer= answer.substring(0,15)
    }
    if(answer,answer[answer.length-1]==='.'){
        answer=answer.substring(0,answer.length-1);
    }
    if(!answer){
        answer+="a";
    }
    if(answer.length<=2){
        while(answer.length<3){
            answer+=answer[answer.length-1];
        }
    }
    
    return answer
}

console.log(solution("=.="))