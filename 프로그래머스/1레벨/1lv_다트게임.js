function solution(dartResult) {
    let answer = dartResult.match(/\d{1,2}\w{1}[*#]?/g)
    let 보너스 = ["S","D","T"];
    let sum = [];
    answer.forEach((a, i)=>{
        a = a.split("");
        if(a[1]=="0"){
            sum.push(10**(보너스.indexOf(a[2])+1));
        }else{
            sum.push((Number(a[0])**(보너스.indexOf(a[1])+1)));
        }
        
        if(a.indexOf("*")>-1){
            if(i==0){
                sum[i]=sum[i]*2
            }else{
                sum[i]=sum[i]*2
                sum[i-1]=sum[i-1]*2
            }
        }
        if(a.indexOf("#")>-1){
            sum[i]=-1 * sum[i]
        }
    
    });
    sum = sum.reduce((rcc,v)=>{return rcc+v})
    return sum;
}
console.log(solution("1D2S#10S"))