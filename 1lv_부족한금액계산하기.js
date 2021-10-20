function solution(price, money, count) {
    let sum = 0;
    for(let i=1; i<count+1; i++ ){
        sum += price*i
    }
    return (money-sum)>0 ? 0 : Math.abs(money-sum)
}

console.log(solution(3,20,4))