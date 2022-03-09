let lost = [1,3]; let reserve = [2,3]; let n=3
let 반상황 = []
for(let i=1; i<=n; i++){
    if(lost.includes(i)){
        if(reserve.includes(i)){
            lost.splice(lost.indexOf(i),1);
            reserve.splice(reserve.indexOf(i),1);
    }
} 
}

for (let i = 1; i<=n; i++){
    if(lost.includes(i)){
        if(reserve.includes(i-1)){
            reserve.splice(reserve.indexOf(i-1),1)
            반상황[i-1]=1;
            console.log(i,reserve,반상황, "L")
        }else if(reserve.includes(i+1)){
            reserve.splice(reserve.indexOf(i+1),1)
            반상황[i-1]=1;
            console.log(i,reserve,반상황, 'R')
        }else{
        반상황[i-1]=0;
        }   
    }else{
        반상황[i-1]=1;
    }
}
let answer = 반상황.filter(a => 1 === a).length