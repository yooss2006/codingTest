function 로또규칙(n){
    if(n===6){
        return 1;
    }else if(n===5){
        return 2;
    }else if(n===4){
        return 3;
    }else if(n===3){
        return 4;
    }else if(n===2){
        return 5;
    }else{
        return 6;
    }
}

function solution(lottos, win_nums) {
    let 맞은거 = []
    let 동생놈 = 0;
    let 최고순위 = 0; let 최저순위 = 0;
    win_nums.forEach(function(data, i){
        if(lottos.indexOf(data)>=0){맞은거.push(data);}
        if(lottos[i]===0){ 
            맞은거.push(0);
            동생놈 ++;
        }
    })
    var answer = [로또규칙(맞은거.length), 로또규칙(맞은거.length-동생놈)];
    return answer;
}

console.log(solution([0,0,0,0,0,0],[38, 19, 20, 40, 15, 25]))